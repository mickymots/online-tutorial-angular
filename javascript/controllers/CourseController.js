
var courseController = angular.module('courseController', []);

courseController.controller('moduleCtrl', [ '$http', '$log' , function($http,$log){

	var controller = this;
		
	controller.loadModule = function(module){
	 $http.get('resources/data/'+module.id+'.json').success(function(data) {
			//module.pages = {};
			$log.info(data.pages);
			//module.pages = data.pages;
			//module.page = data.data;
			
			module.pages = data.pages;
			
		});
					
	  
	};
		
		
}]);
	
	
  
courseController.controller('CourseCtrl', ['$http', '$log',  
  
  function($http, $log) {
    
	this.pageHeader="XXXXX";
	this.course = {"courseName":"Core Java", 
	"modules": [{"id":1,"moduleName":"Module 1", 'pages':[]},
				{"id":2,"moduleName":"Module 2", 'pages':[]}, 
				{"id":3,"moduleName":"Module 3", 'pages':[]}, 
				{"id":4,"moduleName":"Module 4", 'pages':[]}
				]};
  
	this.updatePageHeader = function(newHeader){
		$log.info('update page header called');
		this.pageHeader = newHeader;
	}
	
	this.resetModule = function(){
		
		for(i=0;i<this.course.modules.length;i++){
			this.course.modules[i].pages = [];
		}
	}
  
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
	
  
 