import {Plugin} from 'rollup';
import path from 'path';
const critical = require('critical');

const criticalSuffix = '_critical.min.css';

const defaultCriticalConfig = {
  base: './',
  src: 'index.html',
  target: 'index.css',
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
  pages: Partial<CriticalPages>[];
  criticalConfig: Partial<CriticalConfig>;
}

function PluginCritical(pluginConfig: CriticalPluginConfig): Plugin {
  return {
    name: 'critical',
    async writeBundle(outputOptions, bundle) {
      const css: Array<string> = [];
      // Find all of the generated CSS assets
      for (const chunk of Object.values(bundle)) {
        if (chunk.type ==='asset' && chunk.fileName.endsWith('.css')) {
          if (outputOptions.dir !== undefined) {
            const cssFile = path.join(outputOptions.dir, chunk.fileName);
            css.push(cssFile);
          }
        }
      }
      // If we have no CSS, skip bundle
      if (!css.length) {
        return;
      }
      // Merge in our options
      let options = Object.assign(
          { css },
          defaultCriticalConfig,
          pluginConfig.criticalConfig
      );
      // Iterate through the pages
      for (const page of pluginConfig.pages) {
        const criticalSrc = pluginConfig.criticalUrl + page.uri;
        const criticalDest = page.template + criticalSuffix;
        options = Object.assign(
            options,
            {
              src: criticalSrc,
              target: criticalDest,
            }
        );
        console.log(`Generating critical CSS from ${criticalSrc} to ${criticalDest}`);
        await critical.generate(options, (err: string) => {
          if (err) {
            console.error(err);
          }
        });
      }
    }
  }
};

export default PluginCritical
