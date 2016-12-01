(function() {

	"use strict";

	/* ROUTE AUTH LISTENER */
	angular.module('myApp').run(function ($rootScope, $state, $location, tokenService) {

		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
			if(toState.name != 'login') {
				if(!tokenService.hasToken()) {
					$state.go('login');
					event.preventDefault();
					return;
				}
			}


		});
	});

	/* END ROUTE AUTH LISTENER */
	angular.module('myApp').directive('includeReplace', function () {
		return {
			require: 'ngInclude',
			restrict: 'A', /* optional */
			link: function (scope, el, attrs) {
				el.replaceWith(el.children());
			}
		};
	});

	angular.module('myApp').config(function(toastrConfig) {
		angular.extend(toastrConfig, {
			autoDismiss: true,
			containerId: 'toast-container',
			maxOpened: 0,
			newestOnTop: false,
			positionClass: 'toast-bottom-right',
			preventDuplicates: false,
			preventOpenDuplicates: true,
			target: 'body'
		});
	});

	angular.module('myApp').config(function(toastrConfig) {
		angular.extend(toastrConfig, {
			allowHtml: true,
			closeButton: true,
			closeHtml: '<button>&times;</button>',
			extendedTimeOut: 10000,
			iconClasses: {
				error: 'toast-error',
				info: 'toast-info',
				success: 'toast-success',
				warning: 'toast-warning'
			},
			messageClass: 'toast-message',
			onHidden: null,
			onShown: null,
			onTap: null,
			progressBar: true,
			tapToDismiss: true,
			timeOut: 0,
			titleClass: 'toast-title',
			toastClass: 'toast'
		});
	});

})();
