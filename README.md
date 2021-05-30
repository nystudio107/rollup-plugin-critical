# rollup-plugin-critical

[Rollup](https://github.com/rollup/rollup) plugin for generating critical css.

It uses the [critical](https://github.com/addyosmani/critical) generator under the hood.

## Install

```sh
npm i -D rollup-plugin-critical
```

## Usage

```js
// rollup.config.js

import critical from 'rollup-plugin-critical'

export default {
  input: 'index.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    critical({
        criticalUrl: 'https://nystudio107.com',
        pages: [
            {
                uri: '/',
                template: 'index'
            }
        ],
    }),
  ],
}
```

## Options

### `source: string`

A path to a source image which would be used to generate icons.

### `configuration: object`


## License

[MIT](LICENSE) © [nystudio107](https://nystudio107.com)
