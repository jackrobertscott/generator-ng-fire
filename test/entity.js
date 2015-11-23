'use strict';

var path = require('path');
var _ = require('lodash');
var fs = require('fs-extra');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('ng-fire:entity', function() {
  describe('passing options', function() {
    before(function(done) {
      this.data = {
        name: 'example entity',
      };
      this.data.uppername = _.capitalize(_.camelCase(this.data.name));
      this.data.lowername = _.camelCase(this.data.name);
      this.data.kebabname = _.kebabCase(this.data.name);
      helpers.run(path.join(__dirname, '../generators/entity'))
        .inTmpDir(function(dir) {
          fs.copySync(path.join(__dirname, 'common'), dir);
        })
        .withOptions({
          name: this.data.name,
        })
        .on('end', done);
    });

    it('creates entity files', function() {
      assert.file([
        'src/app/' + this.data.kebabname + '/' + this.data.kebabname + '.controller.js',
        'src/app/' + this.data.kebabname + '/' + this.data.kebabname + '.html',
        'src/app/' + this.data.kebabname + '/' + this.data.kebabname + '.route.js',
        'src/app/components/' + this.data.kebabname + '/' + this.data.kebabname + '-array.service.js',
        'src/app/components/' + this.data.kebabname + '/' + this.data.kebabname + '-factory.service.js',
        'src/app/components/' + this.data.kebabname + '/' + this.data.kebabname + '-object.service.js',
        'src/app/components/' + this.data.kebabname + '/' + this.data.kebabname + '.service.js',
        'src/app/components/' + this.data.kebabname + '/rules.json',
      ]);
    });
  });
});
