import {readFile} from 'mz/fs';
import {resolve} from 'path';
import {Before, After, When, setWorldConstructor} from 'cucumber';
import stubbedFs from 'mock-fs';
import sinon from 'sinon';
import quibble from 'quibble';
import {World} from '../support/world';
// import action from '../../../../src/action';

let action, shell;

setWorldConstructor(World);

Before(async function () {
  // work around for overly aggressive mock-fs, see:
  // https://github.com/tschaub/mock-fs/issues/213#issuecomment-347002795
  require('mock-stdin'); // eslint-disable-line import/no-extraneous-dependencies
  require('chalk'); // eslint-disable-line import/no-extraneous-dependencies

  // this.sinonSandbox = sinon.createSandbox();

  this.exec = sinon.stub();
  shell = quibble('shelljs', () => ({exec: this.exec}));
  action = require('../../../../src/action').default;

  stubbedFs({
    node_modules: {
      '@travi': {
        'project-scaffolder': {
          templates: {
            'editorconfig.txt': await readFile(resolve(
              __dirname,
              '../../../../',
              'node_modules/',
              '@travi/project-scaffolder/templates/editorconfig.txt'
            )),
            'README.mustache': await readFile(resolve(
              __dirname,
              '../../../../',
              'node_modules/',
              '@travi/project-scaffolder/templates/README.mustache'
            ))
          }
        }
      }
    },
    '.gitconfig': `
[github]
    user = travi
`
  });
});

After(() => {
  stubbedFs.restore();
  quibble.reset();
});

When(/^the project is scaffolded$/, async function () {
  await action();
});
