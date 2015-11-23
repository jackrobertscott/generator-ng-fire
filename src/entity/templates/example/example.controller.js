(function() {
  'use strict';

  angular
    .module('<%= appname %>')
    .controller('<%= uppername %>Controller', <%= uppername %>Controller);

  /** @ngInject */
  function <%= uppername %>Controller($log, currentAuth, util, <%= uppername %>Factory, FIREBASE_ROOT) {
    var vm = this;
    var <%= lowername %>Factory;

    vm.<%= lowername %> = null;
    vm.<%= lowername %>s = [];
    vm.errors = util.errors;
    vm.create = create;
    vm.inspect = inspect;
    vm.save = save;
    vm.remove = remove;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
      util.reset();

      <%= lowername %>Factory = new <%= uppername %>Factory(FIREBASE_ROOT);
      vm.<%= lowername %>s = <%= lowername %>Factory.find();
      vm.<%= lowername %>s.$loaded()
        .then(function(<%= lowername %>s) {
          vm.<%= lowername %> = <%= lowername %>s[0];
        })
        .catch(util.failure);
    }

    /**
     * Create new data store
     */
    function create() {
      util.reset();

      vm.<%= lowername %> = {};
    }

    /**
     * Inspect a given data store
     */
    function inspect(id) {
      util.reset();

      vm.<%= lowername %> = vm.<%= lowername %>s.$getRecord(id);
    }

    /**
     * Save a data store
     */
    function save(form) {
      util.reset();

      if (util.checkForm(form)) {
        // Check if data is new or not
        if (vm.<%= lowername %>.$id) {
          vm.<%= lowername %>s.$save(vm.<%= lowername %>)
            .then(util.success)
            .catch(util.failure);
        } else {
          // Must put in String for server data verification
          vm.<%= lowername %>.userId = String(currentAuth.uid);
          vm.<%= lowername %>s.$add(vm.<%= lowername %>)
            .then(function() {
              vm.<%= lowername %> = null;
            })
            .catch(util.failure);
        }
      }
    }

    /**
     * Remove a data store
     */
    function remove() {
      util.reset();

      if (vm.<%= lowername %>.$id) {
        vm.<%= lowername %>s.$remove(vm.<%= lowername %>)
          .then(function() {
            vm.<%= lowername %> = vm.<%= lowername %>s[0];
          })
          .catch(util.failure);
      }
    }
  }
})();
