

var courseController = angular.module('courseController', []);


	courseController.controller('moduleCtrl', [ '$http', '$log', function($http,$log){
		
		var module = this;
		module.pages = {};
		module.page = "";
		module.pageHeader="XXXXX";
		
		module.loadModule = function(moduleId, moduleName, pageHeader){
		   
			module.pageHeader = moduleName;
			
			//$log.info("calling load module ->: "+ moduleId + " : "+ moduleName +":"+ pageHeader);
			
			$http.get('resources/data/'+moduleId+'.json').success(function(data) {
				
				$log.info(data.pages);
				module.pages = data.pages;
				module.page = data.data;
				
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
	
  
courseController.controller('CourseCtrl', ['$http', '$log',
  
  function($scope, $http, $log) {

    
	this.course = {"courseName":"Core Java", "modules": [{"id":1,"moduleName":"Module 1"},{"id":2,"moduleName":"Module 2"}, {"id":3,"moduleName":"Module 3"}, {"id":4,"moduleName":"Module 4"}]};
  
  
}]);
  
 