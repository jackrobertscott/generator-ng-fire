(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('base.<%= lowername %>', {
        url: '/<%= lowername %>',
        templateUrl: 'app/<%= lowername %>/<%= lowername %>.html', // use suffix '.html' instead of '.jade' as it accesses redered version
        controller: '<%= uppername %>Controller',
        controllerAs: 'vm',
      });
  }
})();
