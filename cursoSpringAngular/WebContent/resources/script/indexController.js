var app= angular.module('loja',[]);

app.controller('indexController', ['$scope', function($scope){
	$scope.user= {nome: 'João'};
}]);