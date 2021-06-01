import dts from 'rollup-plugin-dts';

/**
 * @type [import('rollup').RollupOptions]
 */
export default {
    input: './src/@types/rollup-plugin-critical.d.ts',
    plugins: [dts({respectExternal: true})],
    output: {
        file: './dist/index.d.ts',
        format: 'es',
    },
}
