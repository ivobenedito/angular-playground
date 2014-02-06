angular.module('kontacts', ['ngResource'])
  .controller('KontactsController', function ($scope, $resource) {
    var Contact = $resource('/api/contacts/:id');
    $scope.contacts = Contact.query();
  });