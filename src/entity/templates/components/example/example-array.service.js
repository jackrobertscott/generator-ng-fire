(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .factory('<%= uppername %>Array', <%= uppername %>Array);

  /** @ngInject */
  function <%= uppername %>Array($firebaseArray, <%= uppername %>) {
    var service = angular.extend(<%= uppername %>, {
      // extensions...
    });

    return $firebaseArray.$extend(service);
  }
})();
