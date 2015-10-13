(function(){
	'use strict';

	/**
	*  Module
	*
	* Description
	*/
	angular.module('tarefaModule', [])
	.controller('tarefaController', tarefaController);


	tarefaController.$injector = ['$rootScope', '$scope','$location'];

	function tarefaController($rootScope, $scope, $location){
		console.log('Criar Tarefa');
		var vm = this;

		vm.nome 		='';
		vm.descricao 	='';
		vm.prioritdade	= false;
		vm.nivel		= 0;

	}	
})();