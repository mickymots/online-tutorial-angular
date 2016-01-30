(function(){

var app = angular.module('navbarModule',[]);

app.controller('navController', ['$scope', function($scope) {
  $scope.home = { name: 'home' };
  $scope.about = { name: 'about'};
  
  
}]);

app.directive('navbarTag', function(){
	return {
		restrict: 'E',
		
			scope: {
				pageInfo: '=info'
			},
			
			templateUrl:  'templates/navbar.html',
    };
});
})();