(function(){

var app = angular.module('leftNavgationModule',[]);

app.directive('leftNavigation', function(){
	return {
		restrict: 'E',
		
			
		templateUrl:  'templates/leftNavigation.html',
    };
});
})();


