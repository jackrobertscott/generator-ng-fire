const yosay = require('yosay');
const _ = require('lodash');
const Base = require('../base');

module.exports = class Generator extends Base {
  constructor() {
    super(...arguments);

    this.data = {};

    this.argument('appname', {
      type: String,
      required: true,
    });

    this.appname = this.data.appname = _.kebabCase(this.appname);

    this.option('skip-message', {
      desc: 'Skips the welcome message',
      type: Boolean,
    });
  }

  initializing() {
    if (typeof this.options.framework === 'string' && ['semantic-ui', 'ionic', 'bs4', 'bs3', 'none'].indexOf(this.options.framework.trim()) !== -1) {
      this.data.framework = this.options.framework.trim();
    }
  }

  prompting() {
    const done = this.async();

    if (!this.options['skip-message']) {
      this.log(yosay('Allo! Allo! Welcome to the Ng-Fire Generator!'));
    }

    const questions = [{
      type: 'list',
      name: 'framework',
      message: 'Use a framework:',
      default: 'semantic',
      choices: [{
        name: 'Semantic UI',
        value: 'semantic-ui',
      }, {
        name: 'Ionic',
        value: 'ionic',
      }, {
        name: 'Bootstrap 4',
        value: 'bs4',
      }, {
        name: 'Bootstrap 3',
        value: 'bs3',
      }, {
        name: 'None',
        value: 'none',
      }],
      when: !!this.data.framework,
    }];

    this.prompt(questions, answers => {
      _.assign(this.data, answers);

      done();
    });
  }

  configuring() {
    this.config.set(this.data);
  }

  writing() {
    this._copyFile('_.gitignore', '.gitignore');
    this._copyFile('_.jshintrc', '.jshintrc');
    this._templateFile('_bower.json', 'bower.json', this.data);
    this._copyFile('_package.json', 'package.json');
    this._copyFile('config.json');
    this._copyFile('gulpfile.js');
    this._templateFile('README.md', this.data);
    this._copyDirectory('gulp');
    this._copyFile('src/favicon.ico');
    this._copyDirectory('src/assets');
    this._templateFile('src/index.html', this.data);
    this._templateDirectory('src/app', this.data);
  }

  install() {
    this.installDependencies();
  }
};
