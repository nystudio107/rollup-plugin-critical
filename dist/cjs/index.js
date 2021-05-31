"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
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
function PluginCritical(pluginConfig, callback) {
    return {
        name: 'critical',
        async writeBundle(outputOptions, bundle) {
            const css = [];
            // Find all of the generated CSS assets
            if (bundle) {
                for (const chunk of Object.values(bundle)) {
                    if (chunk.type === 'asset' && chunk.fileName.endsWith('.css')) {
                        if (outputOptions.dir !== undefined) {
                            const cssFile = path_1.default.join(outputOptions.dir, chunk.fileName);
                            css.push(cssFile);
                        }
                    }
                }
                // If we have no CSS, skip bundle
                if (!css.length) {
                    return;
                }
            }
            // Iterate through the pages
            for (const page of pluginConfig.criticalPages) {
                const criticalBase = pluginConfig.criticalBase;
                const criticalSrc = pluginConfig.criticalUrl + page.uri;
                const criticalDest = page.template + criticalSuffix;
                // Merge in our options
                const options = Object.assign({ css }, defaultCriticalConfig, {
                    base: criticalBase,
                    src: criticalSrc,
                    target: criticalDest,
                }, pluginConfig.criticalConfig);
                // Generate the Critical CSS
                console.log(`Generating critical CSS from ${criticalSrc} to ${criticalDest}`);
                await critical.generate(options, (err) => {
                    if (err) {
                        console.error(err);
                    }
                    if (callback) {
                        callback(err);
                    }
                });
            }
        }
    };
}
;
exports.default = PluginCritical;
