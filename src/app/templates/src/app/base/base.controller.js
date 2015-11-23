(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .controller('BaseController', BaseController);

  /** @ngInject */
  function BaseController($log, util, $state, Auth, FIREBASE_ROOT) {
    var vm = this;
    var auth;

    vm.errors = util.errors;
    vm.logout = logout;
    vm.changePassword = changePassword;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
      auth = Auth.get(FIREBASE_ROOT);
    }

    /**
     * Logout of firebase account
     */
    function logout() {
      auth.$unauth();
      $log.log('logged out');
      $state.go('main');
    }

    /**
     * Change a users password
     */
    function changePassword(form, data) {
      util.reset();

      if (util.checkForm(form)) {
        auth.$changePassword({
            email: data.email,
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
          })
          .then(function() {
            // TODO notify user of success
            $log.debug('Password changed successfully.');
          })
          .catch(util.failure);
      }
    }
  }
})();
