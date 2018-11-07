import {Before, Given} from 'cucumber';
import any from '@travi/any';

Given(/^the npm cli is logged in$/, function () {
  this.exec.withArgs('npm whoami').yields(`${any.word()}\n`);
});
