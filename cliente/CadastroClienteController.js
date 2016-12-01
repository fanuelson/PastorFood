function cadastroClienteController($scope, clienteService, toastr) {

	$scope.headerMessage = "Cadastro de Cliente";

	$scope.formFornecedorLoading = false;

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
			$scope.limparCampos();
			toastr.success(data.mensagem);
		}).error(function(data) {
			$scope.formFornecedorLoading = false;
			$scope.error = data;
			angular.forEach(data.validacoesRegraNegocio, function(value, key) {
				toastr.error(value);
			})
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
	 'toastr',
    cadastroClienteController ]

angular.module('myApp').controller('cadastroClienteController', depends);
