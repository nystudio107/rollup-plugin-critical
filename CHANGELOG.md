# Rollup Plugin Critical

All notable changes to this project will be documented in this file.

## 1.0.15 - 2025.02.02
###  Changed
* Updated to Node 22 & npm 11
* Updated to latest deps

## 1.0.14 - 2024.09.04
###  Changed
* Updated to the latest Critical & other deps

## 1.0.13 - 2023.11.22
###  Changed
* Switch over to using Node 20 and NPM 10 in the Dockerfile
* Update to Vite `^5.0.0` and Vitest `^1.0.0-beta.5`

### Fix
* Fix an issue where building with a project of `"type": "module"` would fail because conditional exports were not defined in `"exports"` ([#12](https://github.com/nystudio107/rollup-plugin-critical/issues/12))

## 1.0.12 - 2022.12.12
### Fix
* Fix import of the now ESM-only `critical` package into the CJS build of `rollup-plugin-critical` ([#9](https://github.com/nystudio107/rollup-plugin-critical/issues/9))

## 1.0.11 - 2022.12.12
### Changed
* Refactored the tests to use snapshots

### Fixed
* Fixed an issue where the plugin was being bundled as ESM, when it should be CommonJS for broader (and backwards) compatibility ([#9](https://github.com/nystudio107/rollup-plugin-critical/issues/9))

## 1.0.10 - 2022.12.11
### Added
* Add `eslint` to the build phase

### Changed
* Install the latest `npm` in the Docker image
* Add `dev`, `release` commands, remove `update` dependency
* Minify the `dist/` output
* Clean up type definitions
* Refactor to use `critical` `^5.0.0`
* Switch tests from Jest to Vitest

## 1.0.9 - 2022.09.13
### Added
* Added support for `inline: true` via ([#5](https://github.com/nystudio107/rollup-plugin-critical/pull/5))

## 1.0.8 - 2021.10.15
### Changed
* Switched to `critical` `^4.0.0` ([#2](https://github.com/nystudio107/rollup-plugin-critical/issues/2))
* Remove the `minify` option, since it was removed from `critical` `^4.0.0`

## 1.0.7 - 2021-06-02
### Changed
* Switched to `tsup` for bundling

## 1.0.6 - 2021-06-01
### Fixed
* Fixed build of `dist/index.d.ts` to have the correct default export by sourcing `index.ts`

## 1.0.5 - 2021-06-01
### Fixed
* Fixed `respectExternal` setting

## 1.0.4 - 2021-06-01
### Changed
* Split types out into separate files
* Use Rollup and dts to build the types

## 1.0.3 - 2021-05-31
### Fixed
* Fixed `dist/index.d.ts` to have complete type definitions

## 1.0.2 - 2021-05-31
### Changed
* Administrivia

## 1.0.1 - 2021-05-31
### Changed
* Remove unneeded conditionals
* Improve comment typehints in jsdoc
* Remove vestigial `concurrency` property

## 1.0.0 - 2021-05-30
### Added
* Initial release
