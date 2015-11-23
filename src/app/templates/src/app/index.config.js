(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Toggle debug logs
    $logProvider.debugEnabled(true);
  }
})();
