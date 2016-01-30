

var courseController = angular.module('courseController', []);


	courseController.controller('moduleCtrl', ['$scope', '$http', '$log', function($scope,$http,$log){
		
		$scope.pages = {};
		
		$scope.loadModule = function(moduleId, moduleName){
		   
			pageHeader = moduleId;
			
			$log.info("calling load module"+ $scope.pageHeader);
			//$rootScope.pageHeader ="...";
			$http.get('resources/data/'+moduleId+'.json').success(function(data) {
				$scope.pages = data.pages;
				$scope.page = data.data;
				
			});
		};
	}]);
	
	courseController.controller('pageCtrl', ['$scope', '$http', '$log', function($scope,$http,$log){
		
		
		$scope.pages = {};
		$scope.loadPage = function(pageId, pageName){
		
			$log.info("calling load module");
			//$rootScope.pageHeader ="...";
			$http.get('resources/data/'+pageId+'.json').success(function(data) {
				$scope.pages = data.pages;
				$scope.page = data.data;
				
			});
		};
	}]);
	
  
  courseController.controller('CourseCtrl', ['$scope', '$http', '$log',
  
  function($scope, $http, $log) {
	$scope.pageHeader = 'Module Information';
	$scope.page="Content Loading...";
    //$scope.pages = {};
	
	$scope.course = {"courseName":"Core Java", "modules": [{"id":1,"moduleName":"Module 1"},{"id":2,"moduleName":"Module 2"}, {"id":3,"moduleName":"Module 3"}, {"id":4,"moduleName":"Module 4"}]};
  
  
  }]);
  
 