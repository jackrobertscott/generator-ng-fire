(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .factory('<%= uppername %>Object', <%= uppername %>Object);

  /**
   * Extensions on service applied only to object entities
   * @see https://www.firebase.com/docs/web/libraries/angular/guide/extending-services.html
   */
  /** @ngInject */
  function <%= uppername %>Object($firebaseObject, <%= uppername %>) {
    var service = angular.extend(<%= uppername %>, {
      // extensions...
    });

    return $firebaseObject.$extend(service);
  }
})();
