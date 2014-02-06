angular.module('kontacts', ['ngResource'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/contacts', {
        controller: 'ContactsIndexController',
        templateUrl: '/templates/kontacts/index.html'
      })
      .when('/contacts/:id', {
        controller: 'ContactsEditController',
        templateUrl: '/templates/kontacts/edit.html'
      });

    $locationProvider.html5Mode(true);
  })
  .factory('Contact', function ($resource) {
    return $resource('/api/contacts/:id');
  })
  .controller('ContactsIndexController', function ($scope, Contact) {
    $scope.contacts = Contact.query();
  })
  .controller('ContactsEditController', function ($scope, $routeParams, Contact) {
    $scope.contact = Contact.get({ id: $routeParams.id });
  });