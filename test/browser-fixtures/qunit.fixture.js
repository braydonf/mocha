'use strict';

/* eslint-env browser */

process.stdout = require('../../vendor/browser-stdout')();

window.mocha.timeout(200)
  .ui('qunit');
