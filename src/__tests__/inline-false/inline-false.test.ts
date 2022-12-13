import fs from 'fs';
import path from 'path';
import PluginCritical from '../../index';
import {Plugin} from 'rollup';
import {expect, test} from 'vitest'

const testRoot = path.join(__dirname, '/');
const testOutputPath = path.join(testRoot, '__output__/test_critical.min.css');

const pluginConfig: CriticalPluginConfig = {
    criticalBase: testRoot,
    criticalUrl: testRoot,
    criticalPages: [
        {
            uri: 'index.html',
            template: '__output__/test',
        }
    ],
    criticalConfig: {
        inline: false,
    },
};

test('`inline: false` Critical CSS generation', async () => {
    // Instantiate the Rollup plugin
    const plugin: Plugin = PluginCritical(pluginConfig);
    // Call the plugin to generate critical css
    if (plugin && typeof plugin.writeBundle === 'function') {
        // @ts-ignore
        await plugin.writeBundle({
            dir: testRoot,
        }, {
            chunk: {
                type: 'asset',
                fileName: 'style.css',
            }
        });
        // Compare the output with the snapshot
        expect(fs.readFileSync(testOutputPath).toString())
          .toMatchSnapshot();
    }
});
