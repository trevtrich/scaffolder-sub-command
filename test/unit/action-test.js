import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import * as projectScaffolder from '@travi/project-scaffolder';
import action from '../../src/action';
import {javascript} from '../../src/enhanced-scaffolders';

suite('action', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(projectScaffolder, 'scaffold');
    sandbox.stub(console, 'error');
  });

  teardown(() => {
    process.exitCode = 0;
    sandbox.restore();
  });

  test('that language scaffolders are provided to the project scaffolder', () => {
    projectScaffolder.scaffold.resolves();

    return action().then(() => assert.calledWith(
      projectScaffolder.scaffold,
      {languages: {JavaScript: javascript}, overrides: {copyrightHolder: 'Matt Travi'}}
    ));
  });

  test('that the exit-code is set to `1` upon failure when a code is not provided', () => {
    const error = new Error();
    projectScaffolder.scaffold.rejects(error);

    return action().then(() => {
      assert.equal(process.exitCode, 1);
      assert.calledWith(console.error, error);      // eslint-disable-line no-console
    });
  });

  test('that the exit-code is set to the provided code upon failure when provided', () => {
    const code = any.integer();
    const error = new Error();
    error.data = {code};
    projectScaffolder.scaffold.rejects(error);

    return action().then(() => assert.equal(process.exitCode, code));
  });
});