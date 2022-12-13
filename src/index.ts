import {Plugin} from 'rollup';
import * as path from 'path';
// Horrible nonsense to import an ESM module into CJS
// ref: https://adamcoster.com/blog/commonjs-and-esm-importexport-compatibility-examples
let generate: Function;
(async function () {
  generate = (await import('critical')).generate;
})();

const criticalSuffix = '_critical.min.css';

/**
 * Default `criticalConfig` passed in to `critical`
 */
const defaultCriticalConfig: Partial<CriticalConfig> = {
  inline: false,
  extract: false,
  width: 1200,
  height: 1200,
  penthouse: {
    blockJSRequests: false
  }
};

/**
 * [Vite.js](https://vitejs.dev/) & [Rollup](https://rollupjs.org/) plugin for generating critical CSS
 * that uses the [critical](https://github.com/addyosmani/critical) generator under the hood.
 *
 * @param {CriticalPluginConfig} pluginConfig - the plugin configuration object
 * @param {Function} callback - callback upon completion of the critical CSS generation
 * @constructor
 */
function PluginCritical(pluginConfig: CriticalPluginConfig, callback?: CriticalPluginCallback): Plugin {
  return {
    name: 'critical',
    async writeBundle(outputOptions, bundle) {
      const css: Array<string> = [];
      // Find all of the generated CSS assets
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'asset' && chunk.fileName.endsWith('.css')) {
          const cssFile = path.join(outputOptions.dir || '', chunk.fileName);
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
        // If inline is set to true, use HTML as target, otherwise CSS with suffix
        const criticalTarget = (pluginConfig.criticalConfig && pluginConfig.criticalConfig.inline == true) ? page.template + ".html" : page.template + criticalSuffix;
        // Merge in our options
        const options = Object.assign(
            { css },
            defaultCriticalConfig,
            {
              base: criticalBase,
              src: criticalSrc,
              target: criticalTarget,
            },
            pluginConfig.criticalConfig
        );
        // Generate the Critical CSS
        console.log(`Generating critical CSS from ${criticalSrc} to ${criticalTarget}`);
        await generate(options, (err: string) => {
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
}

export default PluginCritical;
