(function(){

	var modalConfirmacaoDirective = function() {

		function linkDirective(scope, element, attrs, ngModel) {
			scope.$on('$destroy', function() {
				element.modal('hide');
				element.remove();
			});
		}

		return {
			restrict: 'E',
			transclude: true,
			scope: {
				'onClickYes': '&onClickYes',
				'onClickNo': '&onClickNo',
				'isBtnYesDisabled' : '=',
				'isBtnNoDisabled' : '=',
				'mensagem': '='
			},
			replace: true,
			link: linkDirective,
			templateUrl: 'directives/modalConfirmacaoDirective/modalConfirmacaoTemplate.html'
		};
	}

	angular.module('myApp').directive('modalConfirmacao', modalConfirmacaoDirective);
})();
