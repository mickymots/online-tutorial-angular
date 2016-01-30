

var courseController = angular.module('courseController', []);


  
  courseController.controller('CourseCtrl', ['$scope', '$http', '$log',
  function($scope, $http, $log) {
	  
	$scope.pageHeader = 'Module 1';
	$scope.page="Content Loading..."
    $scope.pages = {};
	
	$scope.course = {"courseName":"Core Java", "modules": [{"id":1,"moduleName":"Module 1"},{"id":2,"moduleName":"Module 2"}, {"id":3,"moduleName":"Module 3"}, {"id":4,"moduleName":"Module 4"}]};
  
	$scope.setModule = function(moduleId, moduleName){
		
		$scope.pageHeader = moduleName;
		
		$log.info("calling xhr");
		$http.get('resources/data/'+moduleId+'.json').success(function(data) {
			$scope.page = data.data;
			$scope.pages = data.pages;
			
		});
		
	};
	
	
	$scope.setPage = function(pageId, pageName){
		
		$scope.pageHeader = pageName;
		$scope.page = pageName;
		$log.info("calling xhr");
		// $http.get('resources/data/'+moduleId+'.json').success(function(data) {
			// $scope.page = data.data;
			// $scope.pages = data.pages;
			
		// });
		
	};
  
  }]);
  
 