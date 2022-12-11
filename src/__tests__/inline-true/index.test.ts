import fs from 'fs';
import path from 'path';
import critical from '../../index';
import { Plugin } from 'rollup';

const testRoot = path.join(__dirname, '/');
const testOutputPath = path.join(testRoot, 'test_index.html');
const expectedOutputPath = path.join(testRoot, 'index_critical.html');

const pluginConfig: CriticalPluginConfig = {
    criticalBase: testRoot,
    criticalUrl: testRoot,
    criticalPages: [
        {
            uri: 'index.html',
            template: 'test_index',
        }
    ],
    criticalConfig: {
        inline: true,
    },
};

test('`inline: true` Critical CSS generation', done => {
    function callback() {
        try {
            expect(fs.readFileSync(testOutputPath))
                .toEqual(fs.readFileSync(expectedOutputPath));
            done();
        } catch (error) {
            done(error);
        }
    }
    // Instantiate the Rollup plugin
    const plugin: Plugin = critical(pluginConfig, callback);
    // Call the plugin to generate critical css
    if (plugin && typeof plugin.writeBundle === 'function') {
        // @ts-ignore
        plugin.writeBundle({
            dir: testRoot,
        }, {
            chunk: {
                type: 'asset',
                fileName: 'style.css',
            }
        });
    }
});
