(function(){

var app = angular.module('aboutUsModule',[]);



app.directive('mentorHeader', function(){
	return {
		restrict: 'E',
		templateUrl: 'mentorHeader.html',
		controller: function(){

		var store = this;
    	store.pickups = [ {
						"name" : "Amit Singh",
	
						"description": "Developer @ Education Edge",
	
						"image":  "16878330.jpg",
	
	
						},{
						"name" : "Donald Duck",
						
						"description": "Developer @ Education Edge",
						
						"image":  "16878331.jpg" ,
						
						
						},{
						"name" : "Micky Mouse",
						
						"description": "Developer @ Education Edge",
						
						"image": "16878332.jpg",
						
						
						}];
			this.tab = 0;
	
			this.selectTab = function(setTab){
				this.tab = setTab;
			};
	
			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			};
		},
		controllerAs: 'headerPanel'
	};
});


app.directive('mentorDetail', function(){
	return {
		restrict: 'E',
		templateUrl: 'mentorDetail.html',
	};
});

//app.directive('educationEdge', function(){
	//return {
	//	restrict: 'E',
	//	templateUrl: 'education-edge.html',
		
	//};
//});


})();