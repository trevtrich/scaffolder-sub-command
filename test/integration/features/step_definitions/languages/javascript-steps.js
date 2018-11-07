import {Given, Then} from 'cucumber';
import {assert} from 'chai';
import any from '@travi/any';
import {readFile} from 'mz/fs';
import bddStdIn from 'bdd-stdin';

Given(/^the project language should be JavaScript$/, async function () {
  this.setAnswerFor('projectType', '\n');
  // this.setAnswerFor('gitRepo', '\n');

  bddStdIn(
    'project-name', '\n',
    'some project description', '\n',
    '\n',
    '\n',
    '\n',
    '\n',
    '\n',
    '\n',
    this.getAnswerFor('gitRepo'),
    this.getAnswerFor('projectType'),
    // '\n',
    // any.word(), '\n',
    // bddStdIn.keys.up, '\n',
    // '\n',
    // '\n',
    // '\n',
    // 'n', '\n',
    // 'n', '\n'
  );
});

Then(/^JavaScript ignores are defined$/, async function () {
  const gitIgnore = await readFile(`${process.cwd()}/.gitignore`);

  assert.equal(gitIgnore.toString(), `/node_modules/
/lib/
/coverage/
/.nyc_output/

.eslintcache`);
});
