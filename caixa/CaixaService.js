function caixaService($http, APP_CONFIG) {

   var resource = "/caixas";
   var rest_url = APP_CONFIG.REST_BASE_URL + resource;

   this.findAllPageFilterBy = function(filtro, page, size) {
		var pageParams = "?page=" + page + "&size=" + size;
		return $http.post(rest_url + '/filtered/pageable' + pageParams, filtro);
	};

	this.abrirCaixa = function(valorInicial) {
		return $http.put(rest_url + "/abrir", valorInicial);
	};

	this.fecharCaixa = function() {
		return $http.get(rest_url + "/fechar");
	};

	this.findCaixaAberto = function() {
		return $http.get(rest_url + "/aberto");
	};

};

var depends = [
	'$http',
	'APP_CONFIG',
	caixaService
];

angular.module('myApp').service('caixaService', depends);
