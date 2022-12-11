import { Plugin } from 'rollup';

/**
 * [Vite.js](https://vitejs.dev/) & [Rollup](https://rollupjs.org/) plugin for generating critical CSS
 * that uses the [critical](https://github.com/addyosmani/critical) generator under the hood.
 *
 * @param {CriticalPluginConfig} pluginConfig - the plugin configuration object
 * @param {Function} callback - callback upon completion of the critical CSS generation
 * @constructor
 */
declare function PluginCritical(pluginConfig: CriticalPluginConfig, callback?: CriticalPluginCallback): Plugin;

export { PluginCritical };
