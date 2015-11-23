(function() {
  'use strict';

  angular
    .module('<%= appname %>', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ui.router',
      'firebase',
    ]);
})();
