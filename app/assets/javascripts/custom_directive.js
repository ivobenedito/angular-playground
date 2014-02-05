angular.module('myApp', [])
  .directive('myClicker', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<button ng-transclude></button>',
      link: function (scope, element, attrs) {
        element.bind('click', function () {
          scope.$eval(attrs.onClick);
        });
      }
    };
  })
  .controller('ExampleController', function ($scope) {
    $scope.message = 'Hello!';

    $scope.handler = function () {
      alert($scope.message);
    };
  });