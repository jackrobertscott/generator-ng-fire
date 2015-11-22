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

  prompting() {
    const done = this.async();

    if (!this.options['skip-message']) {
      this.log(yosay('Allo! Allo! Welcome to the Ng-Fire Generator!'));
    }

    const questions = [];

    this.prompt(questions, answers => {
      _.assign(this.data, answers);

      done();
    });
  }

  configuring() {
    this.config.set(this.data);
  }

  install() {
    this.installDependencies();
  }
};
