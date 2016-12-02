(function(){

	var modalConfirmacaoOpenerDirective = function() {

		function linkDirective(scope, element, attrs) {

			$(element).click(function() {
				var modalToOpen = "" ;
				if(!S(scope.targetModalId).isEmpty()) {
					modalToOpen = scope.targetModalId;
				} else if(!S(scope.targetModalClass).isEmpty()) {
					modalToOpen = scope.targetModalClass;
				}
				$(modalToOpen).modal('show');
			});

		};

		return {
			restrict: 'A',
			scope: {
				'targetModalId' : '=',
				'targetModalClass' : '='
			},
			link: linkDirective
		};
	}

	angular.module('myApp').directive('modalConfirmacaoOpener', modalConfirmacaoOpenerDirective);

})();
