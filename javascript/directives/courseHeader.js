(function(){

var app = angular.module('courseHeader',[]);

app.controller('navController', ['$scope', function($scope) {
  $scope.home = { name: 'home', address: '1600 Amphitheatre' };
  $scope.about = { name: 'about', address: '123 Somewhere' };
  
  
}]);

app.directive('courseHeader', function(){
	return {
		restrict: 'E',
		templateUrl:  'templates/courseHeader.html',
    };
});
})();