(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .factory('util', util);

  /** @ngInject */
  function util($log) {
    var service = {
      errors: [],
      checkForm: checkForm,
      reset: reset,
      success: success,
      failure: failure,
    };

    return service;

    /**
     * Check form is valid
     */
    function checkForm(form) {
      if (form.$invalid) {
        service.errors.push('Please fill out the required inputs');
        $log.debug('Form invalid');
        $log.debug(form);

        return false;
      }

      return true;
    }

    /**
     * Reset page errors etc.
     */
    function reset(cb) {
      // must empty array like this to preserve memory address
      service.errors.length = 0;
      if (typeof cb === 'function') {
        cb();
      }
    }

    /**
     * Default handle success callback
     */
    function success() {
      $log.debug('success');
    }

    /**
     * Default handle callback failure errors
     */
    function failure(error) {
      $log.debug('failure');
      $log.error(error);
      service.errors.push('An error occured. We appologise for the inconvenience.');
    }
  }
})();
