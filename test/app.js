'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('ng-fire:app', function() {
  describe('passing appname', function() {
    before(function(done) {
      this.data = {
        appname: 'appy',
        framework: 'ionic',
      };
      helpers.run(path.join(__dirname, '../generators/app'))
        .withArguments([this.data.appname])
        .withOptions({
          framework: this.data.framework,
        })
        .on('end', done);
    });

    it('creates app files', function() {
      assert.file([
        '.gitignore',
        '.jshintrc',
        'bower.json',
        'package.json',
        'config.json',
        'gulpfile.js',
        'README.md',
      ]);
      assert.file([
        'gulp/clean.js',
        'gulp/compile.js',
        'gulp/compress.js',
        'gulp/inject.js',
        'gulp/upload.js',
        'gulp/watch.js',
      ]);
      assert.file([
        'src/app/base/base.controller.js',
        'src/app/base/base.html',
        'src/app/base/base.route.js',
        'src/app/components/auth/auth.service.js',
        'src/app/components/util/util.service.js',
        'src/app/components/README.md',
        'src/app/main/main.controller.js',
        'src/app/main/main.html',
        'src/app/main/main.route.js',
        'src/app/index.config.js',
        'src/app/index.constants.js',
        'src/app/index.module.js',
        'src/app/index.route.js',
        'src/app/index.run.js',
      ]);
    });

    it('creates files with appname argument', function() {
      assert.fileContent([
        ['src/app/base/base.controller.js', this.data.appname],
        ['src/app/base/base.route.js', this.data.appname],
        ['src/app/components/auth/auth.service.js', this.data.appname],
        ['src/app/components/util/util.service.js', this.data.appname],
        ['src/app/main/main.controller.js', this.data.appname],
        ['src/app/main/main.route.js', this.data.appname],
        ['src/app/index.config.js', this.data.appname],
        ['src/app/index.constants.js', this.data.appname],
        ['src/app/index.module.js', this.data.appname],
        ['src/app/index.route.js', this.data.appname],
        ['src/app/index.run.js', this.data.appname],
      ]);
    });
  });
});
