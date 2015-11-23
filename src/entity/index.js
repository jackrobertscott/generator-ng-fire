const path = require('path');
const yosay = require('yosay');
const _ = require('lodash');
const Base = require('../base');

module.exports = class Generator extends Base {
  constructor() {
    super(...arguments);

    this.data = {};

    this.option('skip-message', {
      desc: 'Skips the welcome message',
      type: Boolean,
    });

    this.option('name', {
      desc: 'Entity name',
      type: String,
    });
  }

  initializing() {
    _.assign(
      this.data,
      this.config.getAll(),
      this.fs.readJSON(this.destinationPath('config.json'), {})
    );
  }

  prompting() {
    const done = this.async();

    if (!this.options['skip-message']) {
      this.log(yosay('Let\'s make a new entity!'));
    }

    const questions = [{
      type: 'input',
      name: 'name',
      message: 'Entity name:',
      default: 'example',
      when: !!(this.options.name && this.options.name.trim().length),
    }];

    this.prompt(questions, answers => {
      let name;
      if (this.options.name && this.options.name.trim().length) {
        name = this.options.name.trim();
      } else {
        name = answers.name.trim();
      }

      this.data.uppername = _.capitalize(_.camelCase(name));
      this.data.lowername = _.camelCase(name);
      this.data.kebabname = _.kebabCase(name);

      done();
    });
  }

  writing() {
    const name = this.data.kebabname;
    const src = (this.data.paths && this.data.paths.src) ? this.data.paths.src : 'src';

    this._templateFile('example/example.controller.js', path.join(src, 'app', name, name + '.controller.js'), this.data);
    this._templateFile('example/example.html', path.join(src, 'app', name, name + '.html'), this.data);
    this._templateFile('example/example.route.js', path.join(src, 'app', name, name + '.route.js'), this.data);

    this._templateFile('components/example/example-array.service.js', path.join(src, 'app', 'components', name, name + '-array.service.js'), this.data);
    this._templateFile('components/example/example-factory.service.js', path.join(src, 'app', 'components', name, name + '-factory.service.js'), this.data);
    this._templateFile('components/example/example-object.service.js', path.join(src, 'app', 'components', name, name + '-object.service.js'), this.data);
    this._templateFile('components/example/example.service.js', path.join(src, 'app', 'components', name, name + '.service.js'), this.data);
  }
};
