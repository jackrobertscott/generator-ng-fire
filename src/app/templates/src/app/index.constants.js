/* global
  moment:false,
  jQuery:false,
  Firebase:false,
  _:false
*/
(function() {
  'use strict';

  angular
    .module('<%= appname %>')

    // Set all outside libraries as angular constants to be used like services
    .constant('moment', moment)
    .constant('jQuery', jQuery)
    .constant('Firebase', Firebase)
    .constant('lodash', _)

    // App constants
    .constant('FIREBASE_ROOT', 'https://<%= appname %>.firebaseio.com');
})();
