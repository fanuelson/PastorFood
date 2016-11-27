function clienteService($http, APP_CONFIG) {

	var rest_url = APP_CONFIG.REST_BASE_URL;

	this.save = function(cliente) {
		return $http.post(rest_url + '/clientes', cliente);
	};

	this.darBonus = function(idCliente) {
		return $http.put(rest_url + '/clientes/'+idCliente+'/darBonus');
	};

	this.findAll = function() {
		return $http.get(rest_url + '/clientes');
	};

	this.findAllConsumacoesByCliente = function(idCliente, page, size) {
		var pageParams = "?page=" + page + "&size=" + size;
		return $http.get(rest_url + '/clientes/' +idCliente+ '/consumacoes' + pageParams);
	};

	this.findAllBonusByCliente = function(idCliente, page, size) {
		var pageParams = "?page=" + page + "&size=" + size;
		return $http.get(rest_url + '/clientes/' +idCliente+ '/bonus' + pageParams);
	};

	this.del = function(idCliente) {
		return $http.delete(rest_url + '/clientes/' + idCliente);
	};

};

var depends = [
	'$http',
	'APP_CONFIG',
	clienteService
];

angular.module('myApp').service('clienteService', depends);
