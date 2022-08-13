# Rollup Plugin Critical

All notable changes to this project will be documented in this file.

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
