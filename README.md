![Build](https://github.com/nystudio107/rollup-plugin-critical/actions/workflows/node.js.yml/badge.svg)
![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/khalwat/550f6ee414a26e0c8eae7cb6af3c214e/raw/rollup-plugin-critical__heads_master.json)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/nystudio107/rollup-plugin-critical/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/nystudio107/rollup-plugin-critical/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/nystudio107/rollup-plugin-critical/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/nystudio107/rollup-plugin-critical/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/nystudio107/rollup-plugin-critical/badges/build.png?b=master)](https://scrutinizer-ci.com/g/nystudio107/rollup-plugin-critical/build-status/master)

# rollup-plugin-critical

[Vite.js](https://vitejs.dev/) & [Rollup](https://rollupjs.org/) plugin for generating critical CSS that uses the [critical](https://github.com/addyosmani/critical) generator under the hood.

## Install

```bash
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
        criticalUrl: 'https://nystudio107.com/',
        criticalBase: './',
        criticalPages: [
            { uri: '', template: 'index' },
            { uri: 'about', template: 'about/index' },
        ],
        criticalConfig: {
        },
    }),
  ],
}
```

## Options

### `criticalUrl: string`

The base URL to use in combination with the `criticalPages` `uri`s to determine the URLs to scrape for Critical CSS

### `criticalBase: string`

The base file system path to where the generated Critical CSS file should be stored

### `criticalPages: array of objects`

An array objects that contain the page `uri`s that are combined with the `criticalUrl` to determine the URLs to scrape for Critical CSS. The resulting files are named with the `template` path, and saved to the `criticalBase` directory

### `criticalConfig: object`

This is the full [config for critical](https://github.com/addyosmani/critical#options) that is passed through to the `critical` package.

You may optionally override any properties you like here. The default values passed in are:

```js
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
```

The following [critical config properties](https://github.com/addyosmani/critical#options) are set dynamically by `rollup-plugin-critical`, but can be overridden via `criticalConfig`:

- **`css`** - set to the css files that are generated in the Rollup build
- **`base`** - property is set to `criticalBase`
- **`src`** - derived from `criticalUrl` and `criticalPages.uri`
- **`target`** - derived from `criticalPages.template` with `_critical.min.css` appended to it

## License

[MIT](LICENSE) © [nystudio107](https://nystudio107.com)
