#!/usr/bin/env node

var lingon = require('lingon');
var riot = require('gulp-riot');

lingon.config.server.catchAll = 'index.html';

lingon.preProcessors.push('tag', function() {
  return riot();
});
