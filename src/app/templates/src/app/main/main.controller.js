(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, util, Auth, FIREBASE_ROOT, $state) {
    var vm = this;
    var auth;

    vm.errors = util.errors;
    vm.login = login;
    vm.resetPassword = resetPassword;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
      auth = Auth.get(FIREBASE_ROOT);
    }

    /**
     * Login user
     */
    function login(form, data) {
      util.reset();

      if (util.checkForm(form)) {
        auth.$authWithPassword({
            email: data.email,
            password: data.password,
          })
          .then(function(authData) {
            $log.log('logged in: ' + authData.uid);
            $state.go('base.example');
          })
          .catch(util.failure);
      }
    }

    /**
     * Login user
     */
    function resetPassword(form, data) {
      util.reset();

      if (util.checkForm(form)) {
        auth.$resetPassword({
            email: data.email,
          })
          .then(function() {
            // TODO notify user of success
            $log.debug('A new password has been sent to your email account');
          })
          .catch(util.failure);
      }
    }
  }
})();
