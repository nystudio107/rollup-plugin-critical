import {Plugin} from 'rollup';
import critical from '../index';
import fs from 'fs';

test('Basic Critical CSS generation', done => {
    function callback(err: string) {
        try {
            expect(fs.readFileSync('./src/__tests__/test_critical.min.css'))
                .toEqual(fs.readFileSync('./src/__tests__/index_critical.min.css'));
            done();
        } catch (error) {
            done(error);
        }
    }
    // Instantiate the Rollup plugin
    const plugin: Plugin = critical({
        criticalBase: './src/__tests__/',
        criticalUrl: './src/__tests__/',
        pages: [
            {
                uri: 'index.html',
                template: 'test',
            }
        ],
        criticalConfig: {
            css: ['./src/__tests__/style.css'],
        }
    }, callback);
    // Call the plugin to generate critical css
    if (plugin && plugin.writeBundle) {
        // @ts-ignore
        const result = plugin.writeBundle(undefined, undefined);
    }
});
