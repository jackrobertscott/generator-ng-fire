(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .factory('<%= uppername %>Array', <%= uppername %>Array);

  /**
   * Extensions on service applied only to array entities
   * @see https://www.firebase.com/docs/web/libraries/angular/guide/extending-services.html
   */
  /** @ngInject */
  function <%= uppername %>Array($firebaseArray, <%= uppername %>) {
    var service = angular.extend(<%= uppername %>, {
      // extensions...
    });

    return $firebaseArray.$extend(service);
  }
})();
