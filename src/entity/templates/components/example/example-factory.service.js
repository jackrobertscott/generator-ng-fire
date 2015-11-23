(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .factory('<%= uppername %>Factory', <%= uppername %>Factory);

  /** @ngInject */
  function <%= uppername %>Factory(Firebase, <%= uppername %>Array, <%= uppername %>Object) {
    function Service(url) {
      this._dir = '<%= lowername %>s';
      this._url = url;
      this._root = new Firebase(this._url);
      this._ref = this._root.child(this._dir);
    }

    Service.prototype.find = function find(filter) {
      var findRef = this._ref;

      if (typeof filter === 'function') {
        if (!(findRef = filter(findRef))) {
          throw new Error('Filter callback in find function must return firebase ref');
        }
      }

      return new <%= uppername %>Array(findRef);
    };

    Service.prototype.findById = function findById(<%= lowername %>Id) {
      return new <%= uppername %>Object(this._ref.child(<%= lowername %>Id));
    };

    Service.prototype.findByChild = function findByChild(child, value) {
      return new <%= uppername %>Array(this._ref.orderByChild(child).equalTo(value));
    };

    return Service;
  }
})();
