(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .factory('<%= uppername %>Object', <%= uppername %>Object);

  /** @ngInject */
  function <%= uppername %>Object($firebaseObject, <%= uppername %>) {
    var service = angular.extend(<%= uppername %>, {
      // extensions...
    });

    return $firebaseObject.$extend(service);
  }
})();
