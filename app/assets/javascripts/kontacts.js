angular.module('kontacts', ['ngResource'])
  .controller('KontactsController', function ($scope, $resource) {
    var Contact = $resource('/api/contact');
    window.Contact = Contact;

    $scope.contacts = [];
  });