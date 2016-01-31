(function(){

var app = angular.module('courseModule',['ngRoute','courseController','leftNavgationModule','courseHeader','courseDetail','navbarModule','footerModule']);

	app.config(['$routeProvider', 

	function($routeProvider){
		
		$routeProvider.when('/',{templateUrl:'templates/contentPanel.html'})
		.when('/courseDetail',{templateUrl:'templates/courseDetailPane.html', controller: 'CourseCtrl'})
		
		.otherwise({redirectTo:'/'});
	}]);

})();

