(function() {

	function consultaCaixaController($scope, $mdToast, APP_CONFIG, caixaService, FileSaver, Blob) {

		$scope.headerMessage = "Consulta Caixas";

		$scope.pageSize = APP_CONFIG.DEFAULT_PAGE_SIZE;

		$scope.caixasPage = {};

		$scope.filtroPesquisa = {};

		$scope.insumoExclusao = {};

		$scope.pdfLoading = false;

		var startPdfLoading = function() {
			$scope.pdfLoading = true;
		}

		var stopPdfLoading = function() {
			$scope.pdfLoading = false;
		}

		var startTabelaLoading = function() {
			$scope.tabelacaixasLoading = true;
		}

		var stopTabelaLoading = function() {
			$scope.tabelacaixasLoading = false;
		}

		$scope.findAllcaixasPageFilterBy = function(page) {
			if(page == $scope.caixasPage.totalPages) {
				return;
			}
			$scope.tabelacaixasLoading = true;
			startTabelaLoading();
			$promisePage = caixaService.findAllPageFilterBy($scope.filtroPesquisa, page, $scope.pageSize);
			$promisePage.success(function(data) {
				$scope.caixasPage = data;
				stopTabelaLoading();
			}).error(function(data){
				stopTabelaLoading();
			});

		}

		$scope.pesquisar = function() {
			$scope.findAllcaixasPageFilterBy();
		}

		$scope.limparFiltroPesquisa = function() {
			$scope.filtroPesquisa = {};
		}

		vm = this;
		$scope.setInsumoExclusao = function(insumo) {
			vm.insumoExclusao = insumo;
		}

		$scope.getPages = function(num) {
			return new Array(num);
		}

		var setPageSize = function(pageSize) {
			$scope.pageSize = pageSize;
		}

		$scope.findAllcaixasPageFilterBy(0);

		var showSuccessToast = function(mensagem) {
			$mdToast.show({
				hideDelay   : 5000,
				position    : 'bottom right',
				controller  : 'successToastController',
				templateUrl : '/toasts/successToast.html',
				msgSuccess: mensagem
			});
		}

		var showErrorToast = function(mensagem) {
			$mdToast.show({
				hideDelay   : 5000,
				position    : 'bottom right',
				controller  : 'errorToastController',
				templateUrl : '/toasts/errorToast.html',
				msgErro: mensagem
			});
		}

	}

	var depends = [
		'$scope',
		'$mdToast',
		'APP_CONFIG',
		'caixaService',
		'FileSaver',
		'Blob',
		consultaCaixaController ]

		angular.module('myApp').controller('consultaCaixaController', depends);
})();
