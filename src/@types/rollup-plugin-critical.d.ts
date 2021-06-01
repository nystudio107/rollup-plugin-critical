import {Plugin} from 'rollup';
import {CriticalConfig} from './critical';

export interface CriticalPages {
    /** Combined with `criticalUrl` to determine the URLs to scrape for Critical CSS */
    uri: string;
    /** Critical CSS files are named with the `template` path, and saved to the `criticalBase` directory */
    template: string;
}

export interface CriticalPluginConfig {
    /**
     * The base URL to use in combination with the `criticalPages` `uri`s to determine the URLs to scrape for Critical CSS.
     * This can also be a file system path. This is combined with `criticalPages.uri`
     * to determine pages to scrap for critical CSS.
     * Determines the `criticalConfig.src` property
     */
    criticalUrl: string;
    /**
     * The base file system path to where the generated Critical CSS file should be saved.
     * This is combined with `criticalPages.template` with `_critical.min.css` appended
     * to it to determine the saved critical CSS file name.
     * Determines the `criticalConfig.target` property
     */
    criticalBase?: string;
    /**
     * An array objects that contain the page `uri`s that are combined with the `criticalUrl` to
     * determine the URLs to scrape for Critical CSS. The resulting files are named with the
     * `template` path, and saved to the `criticalBase` directory
     */
    criticalPages: Partial<CriticalPages>[];
    /**
     * This is the full [config for critical](https://github.com/addyosmani/critical#options) that is passed
     * through to the `critical` package.
     * You may optionally override any properties you like here
     */
    criticalConfig?: Partial<CriticalConfig>;
}

/**
 * [Vite.js](https://vitejs.dev/) & [Rollup](https://rollupjs.org/) plugin for generating critical CSS
 * that uses the [critical](https://github.com/addyosmani/critical) generator under the hood.
 *
 * @param {CriticalPluginConfig} pluginConfig - the plugin configuration object
 * @param {Function} callback - callback upon completion of the critical CSS generation
 * @constructor
 */
declare function PluginCritical(pluginConfig: CriticalPluginConfig, callback?: Function): Plugin;
