import {After, Before, Given} from 'cucumber';
import any from '@travi/any';
import nock from 'nock';
import {OK} from 'http-status-codes';

let githubScope;
export const githubToken = any.word();
const debug = require('debug')('test');

Before(async () => {
  nock.disableNetConnect();

  githubScope = nock('https://api.github.com/').log(debug);
});

After(() => {
  nock.enableNetConnect();
  nock.cleanAll();
});

Given(/^the GitHub token is valid$/, async function () {
  githubScope
    .matchHeader('Authorization', `token ${githubToken}`)
    .post('/user/repos')
    .reply(OK, {
      ssh_url: any.url(),
      html_url: any.url()
    });
  githubScope
    .matchHeader('Authorization', `token ${githubToken}`)
    .get(`/users/${this.githubUser}/repos`)
    .reply(OK, []);
  githubScope
    .matchHeader('Authorization', `token ${githubToken}`)
    .get('/user')
    .reply(OK, {login: this.githubUser});
});
