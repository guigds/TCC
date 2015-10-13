(function(){
	'use strict';

	angular.module('homeModule', [])
	.controller('homeController', homeController);

	homeController.$injector = ['$scope', '$rootScope', '$location'];

	function homeController($scope, $rootScope, $location){

		console.log('Home controller');
		var vm = this;

		vm.tarefas = [{categoria:'tarefaXXX'},
		{categoria:'Trabalho'},
		{categoria:'tarefaXXX'},
		{categoria:'tarefaXXX'},
		{categoria:'tarefaXXX'},];

		function linhaSelecionada(item){
			$location.path('/tpl/tarefas');
		}


		vm.linhaSelecionada = linhaSelecionada;
	}

})();