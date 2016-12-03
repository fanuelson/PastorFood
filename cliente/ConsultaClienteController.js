(function() {

	function consultaClienteController($scope, APP_CONFIG, $stateParams, clienteService, toastr) {

		var v = $scope;

		$scope.headerMessage = "Gerenciador Clientes";

		$scope.pageSize = APP_CONFIG.DEFAULT_PAGE_SIZE;

		$scope.clientes = {};

		var startLoading = function() {
			$scope.listaLoading = true;
		}
		var stopLoading = function() {
			$scope.listaLoading = false;
		}

		$scope.findAllClientes = function() {
			startLoading();

			$promiseFindAll = clienteService.findAll();

			$promiseFindAll.success(function(res){
				$scope.clientes = res;

				stopLoading();
			}).error(function(res){
				$scope.mensagemErro = res.mensagem;
				stopLoading();
			})
		}

		$scope.darBonus = function(cliente) {
			startLoading();

			$promiseDarBonus = clienteService.darBonus(cliente.id);
			$promiseDarBonus.success(function(res){
				$scope.findAllClientes();
				stopLoading();
			}).error(function(res){

				stopLoading();
			})
		}

		$scope.clienteHasBonus = function(cliente) {
			for(var i = 0 ; i < cliente.bonus.length ; i ++) {
				if(cliente.bonus[i].quantidadeBonusCorrente > 10){
					return true;
				}
			}
			return false;
		}

		var idClienteExcluir = {};
		$scope.setClienteExcluir = function(idCli) {
			idClienteExcluir = idCli;
		}

		$scope.del = function() {
			var $promise = clienteService.del(idClienteExcluir);

			$promise.success(function(res){
				toastr.success(res.mensagem);
				$scope.findAllClientes();
			}).error(function(res){
				angular.forEach(res.validacoesRegraNegocio, function(value, key) {
					toastr.error(value);
				})
			});
		}

		$scope.findAllClientes();

	}

	var depends = [
		'$scope',
		'APP_CONFIG',
		'$stateParams',
		'clienteService',
		'toastr',
		consultaClienteController
	]

	angular.module('myApp').controller('consultaClienteController', depends);

})();
