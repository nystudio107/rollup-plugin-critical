import fs from 'fs';
import path from 'path';
import critical from '../../index';
import { CriticalPluginConfig } from '../../@types/rollup-plugin-critical';
import { Plugin } from 'rollup';

const testRoot = path.join(__dirname, '/');
const testOutputPath = path.join(testRoot, 'test_critical.min.css');
const expectedOutputPath = path.join(testRoot, 'index_critical.min.css');

const pluginConfig: CriticalPluginConfig = {
    criticalBase: testRoot,
    criticalUrl: testRoot,
    criticalPages: [
        {
            uri: 'index.html',
            template: 'test',
        }
    ],
    criticalConfig: {
        inline: false,
    },
};

test('`inline: false` Critical CSS generation', done => {
    function callback(err: string) {
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
    if (plugin && plugin.writeBundle) {
        // @ts-ignore
        const result = plugin.writeBundle({
            dir: testRoot,
        }, {
            chunk: {
                type: 'asset',
                fileName: 'style.css',
            }
        });
    }
});
