angular.module('myApp', [])
  .filter('clean', function () {
    return function (input, separator) {
      var filter = new RegExp('[^a-z0-9' + (separator || '-') + ']', 'ig')

      return input.toLowerCase()
                  .replace(/\s+/g, (separator || '-'))
                  .replace(filter, '');
    };
  })
  .controller('CustomFilterController', function ($scope) {
    $scope.text = 'Hello world, this is some text!'
  });