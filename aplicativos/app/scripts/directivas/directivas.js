(function(){
	'use strict';

	angular.module('directivasModule', [])
	.directive('dialog', [function () {
		return {
			restrict: 'A',
			scope : {
				altura = '@',
				largura = '@'
			},
			link: function (scope, iElement, iAttrs) {
				console.log$scope.altura);
				iElement.dialog({
      				height: iAttrs.altura || 300,
      				width: iAttrs.largura || 350,
     			    modal: true,

				}); 
			}	
		};
	}])
})();