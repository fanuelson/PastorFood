function cadastroClienteController($scope, clienteService) {

	$scope.headerMessage = "Cadastro de Cliente";

	$scope.formFornecedorLoading = false;

	$scope.fornecedor = {
		isInvalid : function() {
			return S(this.nome).isEmpty();
		}
	};

	$scope.cliente = {
		isInvalid : function() {
			return S(this.nome).isEmpty();
		}
	};

	$scope.save = function() {
		$scope.retornoSucesso = {};
		$scope.formFornecedorLoading = true;

		$promiseSave = clienteService.save($scope.cliente);

		$promiseSave.success(function(data) {
			$scope.formFornecedorLoading = false;
			$scope.error = null;
			$scope.fornecedor = {};
			$scope.retornoSucesso = data;
		}).error(function(data) {
			$scope.formFornecedorLoading = false;
			$scope.error = data;
		});
	}

	$scope.limparCampos = function() {
		$scope.cliente = {
			isInvalid : function() {
				return S(this.nome).isEmpty();
			}
		};
		$scope.error = {};
		$scope.formFornecedorLoading = false;
		$scope.retornoSucesso = {};
	}

}

var depends = [
    '$scope',
    'clienteService',
    cadastroClienteController ]

angular.module('myApp').controller('cadastroClienteController', depends);
