(function(){
	'use strict';

	angular.module('recuperaSenhaModule', [])
	.controller('recuperarSenhaController', recuperarSenhaController );

	recuperarSenhaController.$injector = [];

	function recuperarSenhaController(){
		console.log('recupera senha');
	}
	  
})();