(function(){

var app = angular.module('navbarModule',[]);

app.controller('navController', ['$scope', function($scope) {
  $scope.home = { name: 'home', address: '1600 Amphitheatre' };
  $scope.about = { name: 'about', address: '123 Somewhere' };
  
  
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