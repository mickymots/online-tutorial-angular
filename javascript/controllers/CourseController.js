

var courseController = angular.module('courseController', []);


  
  courseController.controller('CourseCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
	  
	$scope.page = 'Module 1';
    
	$scope.course = {"courseName":"Core Java", "modules": [{"id":1,"moduleName":"Module 1"},{"id":2,"moduleName":"Module 2"}, {"id":3,"moduleName":"Module 3"}, {"id":4,"moduleName":"Module 4"}]};
  
	$scope.setModule = function(moduleId){
		
		$scope.page = moduleId;
	};
  
  }]);
  
 