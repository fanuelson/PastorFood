function consultaConsumacaoClienteController($scope, APP_CONFIG, $stateParams, clienteService, bonusService
	, consumacaoService
	,toastr) {

	$scope.headerMessage = "Consumações de Cliente";

	$scope.formFornecedorLoading = false;

	$scope.pageSize = APP_CONFIG.DEFAULT_PAGE_SIZE;

	$scope.cliente = $stateParams.cliente;

	$scope.consumacoes = {};
	$scope.consumacoesPage = 1;

	$scope.bonusCliente = {};
	$scope.bonusClientePage = 1;

	$scope.darBonusRequest = {};

	$scope.findAllConsumacoesByCliente = function() {
		var $promise = clienteService.findAllConsumacoesByCliente($scope.cliente.id, $scope.consumacoesPage - 1 , $scope.pageSize);
		$promise.success(function(res){
			$scope.consumacoes = res;

		}).error(function(res){
			console.log(JSON.stringify(res));
		});
	}

	$scope.findAllBonusByCliente = function() {
		var $promise = clienteService.findAllBonusByCliente($scope.cliente.id, $scope.bonusClientePage - 1, $scope.pageSize);
		$promise.success(function(res){
			$scope.bonusCliente = res;
		}).error(function(res){
			console.log(JSON.stringify(res));
		});
	}

	$scope.darBonus = function(idProd) {

		$scope.darBonusRequest = {
			idCliente : $scope.cliente.id,
			idProduto : idProd
		}
		$promiseDarBonus = bonusService.darBonus($scope.darBonusRequest);
		$promiseDarBonus.success(function(res){
			$scope.findAllBonusByCliente();
		}).error(function(res){


		})
	}

	$scope.pagarDivida = function(idCons) {
		$promise = consumacaoService.pagarDivida(idCons);
		$promise.success(function(res){
			toastr.success(res.mensagem);
			$scope.findAllConsumacoesByCliente();
			$scope.findAllBonusByCliente();
		}).error(function(res){
			angular.forEach(res.validacoesRegraNegocio, function(value, key) {
				toastr.error(value);
			})
		})
	}

}

var depends = [
    '$scope',
	 'APP_CONFIG',
	 '$stateParams',
    'clienteService',
	 'bonusService',
	 'consumacaoService',
	 'toastr',
    consultaConsumacaoClienteController ]

angular.module('myApp').controller('consultaConsumacaoClienteController', depends);
