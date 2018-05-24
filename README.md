# scaffolder-sub-command

scaffolder [sub-command](https://github.com/tj/commander.js#command-specific-options) for [commander](https://github.com/tj/commander.js)

<!-- status badges -->
[![Build Status][ci-badge]][ci-link]
[![Codecov](https://img.shields.io/codecov/c/github/travi/scaffolder-sub-command.svg)](https://codecov.io/github/travi/scaffolder-sub-command)

## Usage

<!-- consumer badges -->
[![npm][npm-badge]][npm-link]
[![MIT license][license-badge]][license-link]

### Installation

```sh
$ npm install @travi/scaffolder-sub-command -S
```

### Adding this sub-command to a [commander](https://github.com/tj/commander.js) program

```js
import program from 'commander';
import {addSubCommand} from '@travi/scaffolder-sub-command';

addSubCommand(program);
```

## Contribution

<!-- contribution badges -->
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Greenkeeper badge](https://badges.greenkeeper.io/travi/scaffolder-sub-command.svg)](https://greenkeeper.io/)
[![PRs Welcome][PRs-badge]][PRs-link]

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

## Related Projects

* [javascript-scaffolder](https://npm.im/@travi/javascript-scaffolder)
* [project-scaffolder](https://npm.im/@travi/project-scaffolder)
* [cli](https://npm.im/@travi/cli)

[npm-link]: https://www.npmjs.com/package/@travi/scaffolder-sub-command
[npm-badge]: https://img.shields.io/npm/v/@travi/scaffolder-sub-command.svg
[license-link]: LICENSE
[license-badge]: https://img.shields.io/github/license/travi/scaffolder-sub-command.svg
[ci-link]: https://travis-ci.com/travi/scaffolder-sub-command
[ci-badge]: https://img.shields.io/travis/travi/scaffolder-sub-command.svg?branch=master
[commit-convention-link]: https://conventionalcommits.org
[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[commitizen-link]: http://commitizen.github.io/cz-cli/
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[PRs-link]: http://makeapullrequest.com
[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
