import {Plugin} from 'rollup';
import critical from '../index';
import fs from 'fs';
import path from 'path';

const TESTS_ROOT = './src/__tests__/';

test('Basic Critical CSS generation', done => {
    function callback(err: string) {
        try {
            expect(fs.readFileSync(path.join(TESTS_ROOT, 'test_critical.min.css')))
                .toEqual(fs.readFileSync(path.join(TESTS_ROOT, 'index_critical.min.css')));
            done();
        } catch (error) {
            done(error);
        }
    }
    // Instantiate the Rollup plugin
    const plugin: Plugin = critical({
        criticalBase: TESTS_ROOT,
        criticalUrl: TESTS_ROOT,
        pages: [
            {
                uri: 'index.html',
                template: 'test',
            }
        ],
        criticalConfig: {
        }
    }, callback);
    // Call the plugin to generate critical css
    if (plugin && plugin.writeBundle) {
        // @ts-ignore
        const result = plugin.writeBundle({
            dir: TESTS_ROOT,
        }, {
            chunk: {
                type: 'asset',
                fileName: 'style.css',
            }
        });
    }
});
