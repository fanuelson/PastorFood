(function() {

   function caixaController($scope, APP_CONFIG, caixaService, toastr) {
      var vm = $scope;

      vm.headerMessage = "Abertura de Caixa";

      vm.valorInicial = 0;

      vm.error = {};

      vm.caixaAberto = null;

      $scope.abrirCaixa = function() {

         var $promise = caixaService.abrirCaixa(vm.valorInicial);

         $promise.success(function(res){
            vm.mensagemSucesso = res.mensagem;
            toastr.success(res.mensagem);
            toastr.info("Caixa Aberto");
            findCaixaAberto();
         }).error(function(res){
            angular.forEach(res.validacoesRegraNegocio, function(value, key) {
               toastr.error(value);
            });
         });
      }

      $scope.fecharCaixa = function() {

         var $promise = caixaService.fecharCaixa();

         $promise.success(function(res){
            vm.mensagemSucesso = res.mensagem;
            toastr.success(res.mensagem);
            toastr.info("Caixa fechado.");
            findCaixaAberto();
         }).error(function(res){
            angular.forEach(res.validacoesRegraNegocio, function(value, key) {
               toastr.error(value);
            });
         });
      }

      $scope.hasCaixaAberto = function() {
         return vm.caixaAberto!=null;
      }

      $scope.isValorValido = function() {
         return vm.valorInicial != {}
            && vm.valorInicial >= 0;
      }

      var findCaixaAberto = function() {
         var $promise = caixaService.findCaixaAberto();

         $promise.success(function(res){
            vm.caixaAberto = res.obj;
         }).error(function(res){
            vm.error.validacoes = res.validacoesRegraNegocio;
         });
      }


      findCaixaAberto();
   }

   var depends = [
      '$scope',
		'APP_CONFIG',
      'caixaService',
      'toastr',
      caixaController
   ]

   angular.module('myApp').controller('caixaController', depends);
})();
