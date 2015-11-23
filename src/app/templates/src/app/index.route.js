(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    // Remove '#' from url
    // Must add <base href="/"> in <head></head> tags aswell
    // $locationProvider.html5Mode(true);

    // Set default url
    $urlRouterProvider.otherwise('/');
  }
})();
