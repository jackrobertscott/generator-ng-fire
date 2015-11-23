(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vmMC',
      });
  }
})();
