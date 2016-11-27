function bonusService($http, APP_CONFIG) {

   var resource = "/bonus";
	var rest_url = APP_CONFIG.REST_BASE_URL + resource;

	this.darBonus = function(darBonusRequest) {
		return $http.put(rest_url + '/darBonus', darBonusRequest);
	};

};

var depends = [
	'$http',
	'APP_CONFIG',
	bonusService
];

angular.module('myApp').service('bonusService', depends);
