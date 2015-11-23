(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('base.<%= lowername %>', { // child state of base (requires authentication)
        url: '/<%= lowername %>',
        templateUrl: 'app/<%= lowername %>/<%= lowername %>.html',
        controller: '<%= uppername %>Controller',
        controllerAs: 'vm',
      });
  }
})();
