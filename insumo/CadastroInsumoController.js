(function() {

	function cadastroInsumoController($scope, APP_CONFIG, $stateParams, insumoService, medidaService, toastr) {

		$scope.headerMessage = "Cadastro de Insumo";

		$scope.formInsumoLoading = true;

		$scope.insumo = {

		};


		$scope.findAllMedidas = function() {
			$promiseFindAllMedida = medidaService.findAll();

			$promiseFindAllMedida.success(function(data) {
				$scope.medidas = data;
				$scope.formInsumoLoading = false;
			}).error(function(data) {
				$scope.formInsumoLoading = false;
				toastr.error("Erro ao buscar Medidas.");
			});
		}

		$scope.findAllMedidas();

		$scope.findOneParam = function() {
			if($stateParams.idInsumo) {
				$promiseFindOne = insumoService.findOne($stateParams.idInsumo);
				$promiseFindOne
				.success(function(res){
					$scope.insumo = res.obj;
					$scope.insumo.medida = $scope.insumo.medida.abreviacao;
				})
				.error(function(res){
					console.log(res);
				});
			}
		}
		$scope.findOneParam();

		$scope.insumoIsInvalid = function() {
			return S($scope.insumo.nome).isEmpty()
			|| $scope.insumo.quantidade == null
			|| $scope.insumo.quantidade == 0
			|| S($scope.insumo.medida).isEmpty();

		}

		$scope.save = function() {
			$scope.formInsumoLoading = true;
			console.log($scope.insumo.medida);
			$promiseSave = insumoService.save($scope.insumo);

			$promiseSave.success(function(data) {
				$scope.formInsumoLoading = false;
				$scope.error = null;
				$scope.insumo = {};
				toastr.success(data.mensagem);
			}).error(function(data) {
				$scope.formInsumoLoading = false;
				$scope.error = data;
				angular.forEach(data.validacoesRegraNegocio, function(value, key) {
					toastr.error(value);
				})
			});
		}


		$scope.isMedidaSelected = function(abrev) {
			return insumo.medida.abreviacao == abrev;
		}

		$scope.limparCampos = function() {
			$scope.insumo = {};
			$scope.error = {};
			$scope.findAllMedidas();
			$scope.formInsumoLoading = false;
			$scope.retornoSucesso = {};
		}


	}

	var depends = [
		'$scope',
		'APP_CONFIG',
		'$stateParams',
		'insumoService',
		'medidaService',
		'toastr',
		cadastroInsumoController ]

		angular.module('myApp').controller('cadastroInsumoController', depends);
})();
