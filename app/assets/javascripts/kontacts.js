'use strict';

angular.module('kontacts', ['ngResource', 'ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/kontacts', {
        controller: 'ContactsIndexController',
        templateUrl: '/templates/kontacts/index.html'
      })
      .when('/kontacts/new', {
        controller: 'ContactsNewController',
        templateUrl: '/templates/kontacts/new.html'
      })
      .when('/kontacts/:id', {
        controller: 'ContactsEditController',
        templateUrl: '/templates/kontacts/edit.html'
      });

    $locationProvider.html5Mode(true);
  })

  .factory('Contact', function ($resource, $http) {
    function Contact() {
      this.service = $resource('/api/contacts/:id', { id: '@id' },
                                                    { update: { method: 'PATCH' }});
    };

    Contact.prototype.all = function () {
      return this.service.query();
    };

    Contact.prototype.create = function (contact) {
      return this.service.save(contact);
    }

    Contact.prototype.show = function (id) {
      return this.service.get({ id: id});
    };

    Contact.prototype.update = function(contact) {
      return this.service.update(contact);
    };

    Contact.prototype.delete = function (id) {
      this.service.remove({ id: id });
    };

    return new Contact;
  })

  .controller('ContactsIndexController', function ($scope, Contact) {
    $scope.contacts = Contact.all();
  })

  .controller('ContactsEditController', function ($scope, $routeParams, $timeout, Contact) {
    var saveTimeout;

    $scope.contact = Contact.show($routeParams.id);

    $scope.save = function () {
      $timeout.cancel(saveTimeout);
      saveTimeout = $timeout(function () {
                      Contact.update($scope.contact);
                    }, 1000);
    };
  })

  .controller('ContactsNewController', function ($scope, $location, Contact) {
    $scope.save = function () {
      Contact.create($scope.contact).$promise.then(function (contact) {
        $location.path('/kontacts/' + contact.id);
      });
    };
  });