import dts from 'rollup-plugin-dts';

/**
 * @type [import('rollup').RollupOptions]
 */
export default {
    input: './src/index.ts',
    plugins: [dts()],
    output: {
        file: './dist/index.d.ts',
        format: 'es',
    },
}
