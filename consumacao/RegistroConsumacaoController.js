function registroConsumacaoController($scope, APP_CONFIG, consumacaoService, clienteService, produtoService) {

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
      }).error(function(res) {

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
    registroConsumacaoController ]

angular.module('myApp').controller('registroConsumacaoController', depends);
