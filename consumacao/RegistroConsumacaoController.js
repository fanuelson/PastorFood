function registroConsumacaoController($scope, APP_CONFIG, consumacaoService, clienteService, produtoService, toastr) {

	$scope.headerMessage = "Registro de Consumação";

   $scope.registroConsumacaoRequestModel = {
      quantidadeConsumida: 1
   };

   $scope.clientes = {};
   $scope.produtos = {};

   $scope.registrarConsumacao = function() {
      var $promise = consumacaoService.registrarConsumacao($scope.registroConsumacaoRequestModel);

      $promise.success(function(res){
         $scope.mensagemSucesso = res.mensagem;
			$scope.registroConsumacaoRequestModel = {
		      quantidadeConsumida: 1
		   };
			toastr.success(res.mensagem);
      }).error(function(res) {
			$scope.error = res;
			angular.forEach(res.validacoesRegraNegocio, function(value, key) {
			  toastr.error(value);
			})
      });
   }

	$scope.isBtnDisabled = function () {
		return $scope.registroConsumacaoRequestModel.quantidadeConsumida <= 0
			|| $scope.registroConsumacaoRequestModel.idCliente == null
			|| $scope.registroConsumacaoRequestModel.idProduto == null;
	}

   $scope.findAllClientes = function() {
      var $promise = clienteService.findAll();

      $promise.success(function (res) {
         $scope.clientes = res;
      }).error(function (res) {

      });
   }

   $scope.findAllProdutos = function() {
      var $promise = produtoService.findAll();

      $promise.success(function (res) {
         $scope.produtos = res;
      }).error(function (res) {

      });
   }

   $scope.findAllClientes();
   $scope.findAllProdutos();
}

var depends = [
    '$scope',
	 'APP_CONFIG',
    'consumacaoService',
    'clienteService',
    'produtoService',
	 'toastr',
    registroConsumacaoController ]

angular.module('myApp').controller('registroConsumacaoController', depends);
