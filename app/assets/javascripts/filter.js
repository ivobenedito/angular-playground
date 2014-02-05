var FilterController = function ($scope) {
  $scope.price = 11.50;
  $scope.amount = 10.123456789;
  $scope.message = 'Hello World';
  $scope.date = new Date();
  $scope.names = ['Tom', 'Laura', 'Zoe', 'Jeffrey'];
  $scope.people = [
    { firstname: 'Ivo',    lastname: 'Benedito' },
    { firstname: 'Isabel', lastname: 'Correia'  },
    { firstname: 'Ana',    lastname: 'Araujo'   }
  ];
};