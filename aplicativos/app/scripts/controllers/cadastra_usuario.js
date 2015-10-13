(function(){
	'use strict';

	angular.module('cadastraUsuarioModule', [])
	.controller('cadastraUsuarioController', cadastraUsuarioController );

	cadastraUsuarioController.$injector = ['$rootScope','$scope','$location'];

	function cadastraUsuarioController($rootScope, $scope, $location){

	}
})();