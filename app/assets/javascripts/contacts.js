angular
  .module('contacts', [])
  .config(function ($routeProvider) {
    // Configure the routes
    $routeProvider
      .when('/contact/:index', {
        templateUrl: 'templates/contacts/edit.html',
        controller:  'ContactEditController'
      })
      .when('/add', {
        templateUrl: 'templates/contacts/edit.html',
        controller: 'ContactAddController'
      })
      .when('/delete/:index', {
        templateUrl: 'templates/contacts/edit.html',
        controller: 'ContactDeleteController'
      })
      .when('/', {
        templateUrl: 'templates/contacts/list.html',
      });
  })
  .controller('ContactsController', function ($scope) {
    // $scope.contacts is available in all children
    $scope.contacts = [
      { name: 'Ivo',    number: '123456789' },
      { name: 'Isabel', number: '456789123' },
      { name: 'Joao',   number: '789123456' },
      { name: 'Pedro',  number: '987654321' }
    ];
  })
  .controller('ContactEditController', function ($scope, $routeParams) {
    // Load in a contact from the route (/contact/:index)
    $scope.contact = $scope.contacts[$routeParams.index];
    $scope.index = $routeParams.index;
  })
  .controller('ContactAddController', function ($scope, $routeParams) {
    var length = $scope.contacts.push({
                   name: 'New contact',
                   number: ''
                 });

    $scope.index = length - 1;
    $scope.contact = $scope.contacts[$scope.index];
  })
  .controller('ContactDeleteController', function ($scope, $routeParams, $location) {
    $scope.contacts.splice($routeParams.index, 1);
    $location.path('/').replace();
  });

