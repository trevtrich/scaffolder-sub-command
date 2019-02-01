import {exists, readFile} from 'mz/fs';
import {Given, Then} from 'cucumber';
import bddStdIn from 'bdd-stdin';
import {assert} from 'chai';

Given(/^the project should be versioned in git$/, async function () {
  this.setAnswerFor('gitRepo', '\n');

  // bddStdIn(
  //   'project-name',
  //   'some project description',
  //   bddStdIn.keys.down, '\n', '\n',
  //   'y', '\n',
  //   'y', '\n',
  //   this.getAnswerFor('gitRepo'), '\n',
  //   bddStdIn.keys.down, '\n', '\n',
  //   '\n'
  // );
});

Given(/^the project should not be versioned in git$/, async function () {
  this.setAnswerFor('gitRepo', 'n');

  bddStdIn(
    'project-name',
    'some project description',
    bddStdIn.keys.down, '\n', '\n',
    'y', '\n',
    'y', '\n',
    this.getAnswerFor('gitRepo'), '\n',
    bddStdIn.keys.down, '\n', '\n',
    '\n'
  );
});

Then(/^the base git files should be present$/, async function () {
  const gitAttributes = await readFile(`${process.cwd()}/.gitattributes`);

  assert.equal(gitAttributes, '* text=auto');
  // assert.isTrue(gitDirectoryStats.isDirectory());
});

Then('the base git files should not be present', async function () {
  assert.isFalse(await exists(`${process.cwd()}/.git`));
  assert.isFalse(await exists(`${process.cwd()}/.gitattributes`));
  assert.isFalse(await exists(`${process.cwd()}/.gitignore`));
});
