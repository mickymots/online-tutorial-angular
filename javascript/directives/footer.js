(function(){

var app = angular.module('footerModule',[]);



app.directive('footerTag', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/footer.html',
		controller: function(){

			
			this.company = {"year":2015,"name":"Education Edge","companyType":"Inc."}
	
		
			
		},
		controllerAs: 'footerPanel'
	};
});


})();