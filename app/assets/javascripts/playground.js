var BrowserController = function ($scope) {
  $scope.clean = function () {
    $scope.path = $scope.path
                        .replace(/\s+/, '-')
                        .replace(/[^a-z0-9-]/i, '');
  };
}

var ContactsController = function ($scope) {
  $scope.people = [
    { name: 'Ivo',    number: '123456789' },
    { name: 'Isabel', number: '456789123' },
    { name: 'Joao',   number: '789123456' },
    { name: 'Pedro',  number: '987654321' }
  ];
};