var app= angular.module("mainApp", []);

app.controller('mainCtrl', function($scope, $window) {
    $scope.login = {
    	prefix: 'Welcome back, ',
    	suffix: '!',
    	name: 'Daeny888'
    };

    $scope.data = $window.data.projects.recent;

    $scope.removeItem = function(_index) {
    	$scope.data.splice(_index, 1);
    };
});
  
  
