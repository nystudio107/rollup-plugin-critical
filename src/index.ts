import {Plugin} from 'rollup';
import path from 'path';
const critical = require('critical');

const criticalSuffix = '_critical.min.css';

const defaultCriticalConfig = {
  inline: false,
  minify: true,
  extract: false,
  width: 1200,
  height: 1200,
  concurrency: 4,
  penthouse: {
    blockJSRequests: false
  }
};

interface CriticalPages {
  uri: string;
  template: string;
}

interface CriticalPluginConfig {
  criticalUrl: string;
  criticalBase?: string;
  criticalPages: Partial<CriticalPages>[];
  criticalConfig?: Partial<CriticalConfig>;
}

function PluginCritical(pluginConfig: CriticalPluginConfig, callback?: Function): Plugin {
  return {
    name: 'critical',
    async writeBundle(outputOptions, bundle) {
      const css: Array<string> = [];
      // Find all of the generated CSS assets
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'asset' && chunk.fileName.endsWith('.css')) {
          const cssFile = path.join(outputOptions.dir ?? '', chunk.fileName);
          css.push(cssFile);
        }
      }
      // If we have no CSS, skip bundle
      if (!css.length) {
        return;
      }
      // Iterate through the pages
      for (const page of pluginConfig.criticalPages) {
        const criticalBase = pluginConfig.criticalBase;
        const criticalSrc = pluginConfig.criticalUrl + page.uri;
        const criticalDest = page.template + criticalSuffix;
        // Merge in our options
        const options = Object.assign(
            { css },
            defaultCriticalConfig,
            {
              base: criticalBase,
              src: criticalSrc,
              target: criticalDest,
            },
            pluginConfig.criticalConfig
        );
        // Generate the Critical CSS
        console.log(`Generating critical CSS from ${criticalSrc} to ${criticalDest}`);
        await critical.generate(options, (err: string) => {
          if (err) {
            console.error(err);
          }
          if (callback) {
            callback(err);
          }
        });
      }
    }
  }
};

export default PluginCritical
