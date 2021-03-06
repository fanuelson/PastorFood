function consumacaoService($http, APP_CONFIG) {

   var resource = "/consumacoes";
	var rest_url = APP_CONFIG.REST_BASE_URL + resource;

	this.registrarConsumacao = function(registroConsumacaoRequestModel) {
		return $http.post(rest_url + '/registrar', registroConsumacaoRequestModel);
	};

   this.pagarDivida = function(idCons) {
      return $http.get(rest_url + '/' + idCons + '/pagarDivida');
   }


};

var depends = [
	'$http',
	'APP_CONFIG',
	consumacaoService
];

angular.module('myApp').service('consumacaoService', depends);
