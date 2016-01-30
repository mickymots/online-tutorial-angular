(function(){

var app = angular.module('courseDetail',[]);

app.directive('courseDetail', function(){
	return {
		restrict: 'E',
		templateUrl:  'templates/courseDetail.html',
    };
});
})();