var app= angular.module('loja',[]);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {controller: "listController", templateUrl:"list.html"})
	.when("edit/name",{controller: "editController", templateUrl:"form.html"})
	.when("/new", {controller:"newController",templateUrl:"form.html"})
	.otherwise({redirectTo:"/"});
	
});

app.run(function($rootScope){
	$rootScope.frutas = ['banana', 'melancia', 'pera']
});

app.controller('listaController', ['$scope', function($scope){
	
}]);

function listController($scope){}