(function () {
	var app = angular.module("mySite", []);

	app.controller('lifestyleController', function($scope){
		$scope.contents = lifestyleImages;
	});

	var lifestyleImages = [ 
		   { 
		    icon: 'img/sloth-life.jpg', 
		    title: 'MOVE'
		    
		  },
		  {
		  	icon: 'img/social-media.jpg',
		  	title: 'Tits on Sticks'
		  }

		];



})();

