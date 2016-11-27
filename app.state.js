(function() {
   'use strict' ;

   /* -- ROUTE CONFIG -- */
	var routeConfig = function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state("home", {
			  url: "/",
			  views: {
				  "starterContent":{
					  template: "<h1>EAE BELEZA?<h1/>"
				  }
			  }
			})
			.state("login", {
			  url: "/login",
			  views: {
				  "starterContent":{
						 templateUrl: "login/login.html"
					 }
			  }
			})
			.state("cadastro-cliente", {
			  url: "/cadastro-cliente",
			  views: {
				  "starterContent":{
					  templateUrl: "cliente/cadastro-cliente.html"
				  }
			  }
			})
			.state("consulta-clientes", {
			  url: "/consulta-clientes",
			  views: {
				  "starterContent":{
					  templateUrl: "cliente/consulta-clientes.html"
				  }
			  }
			})
			.state("consulta-consumacao-cliente", {
			  url: "/consulta-consumacao-cliente",
           params: {
               cliente: null
           },
			  views: {
				  "starterContent":{
					  templateUrl: "consumacao/consulta-consumacao-cliente.html"
				  }
			  }
			})
			.state("registro-consumacao", {
			  url: "/registro-consumacao",
			  views: {
				  "starterContent":{
					  templateUrl: "consumacao/registro-consumacao.html"
				  }
			  }
			})
			.state("caixa", {
			  url: "/caixa",
			  views: {
				  "starterContent":{
					  templateUrl: "caixa/caixa.html"
				  }
			  }
			})
			.state("consulta-caixa", {
			  url: "/consulta-caixa",
			  views: {
				  "starterContent":{
					  templateUrl: "caixa/consulta-caixa.html"
				  }
			  }
			})
			.state("calculadora-cedula", {
			  url: "/calculadora-cedula",
			  views: {
				  "starterContent":{
					  templateUrl: "calculadoraCedula/calculadoraCedula.html"
				  }
			  }
			})
			.state("cadastro-fornecedor", {
			  url: "/cadastro-fornecedor",
			  views: {
				  "starterContent":{
					  templateUrl: "fornecedor/cadastro-fornecedor.html"
				  }
			  }
			})
			.state("consulta-fornecedor", {
			  url: "/consulta-fornecedor",
			  views: {
				  "starterContent":{
					  templateUrl: "fornecedor/consulta-fornecedor.html"
				  }
			  }
			})
			.state("cadastro-insumo", {
				  url: "/cadastro-insumo",
				  params: {
		            idInsumo: null
		        },
				  views: {
						"starterContent":{
						 templateUrl: "insumo/cadastro-insumo.html"
						}
				  }
			})
			.state("consulta-insumos", {
				  url: "/consulta-insumo",
				  views: {
						"starterContent":{
						 templateUrl: "insumo/consulta-insumos.html"
						}
				  }
			})
			.state("cadastro-produto", {
				  url: "/cadastro-produto",
				  params: {
		            idProd: null
		        },
				  views: {
						"starterContent":{
							 templateUrl: "produto/cadastro-produto.html"
						}
				  }
			})
			.state("consulta-produtos", {
				  url: "/consulta-produtos",
				  views: {
						"starterContent":{
							 templateUrl: "produto/consulta-produtos.html"
						}
				  }
			});

	}

	var configRoute = [
		'$stateProvider',
		'$urlRouterProvider',
		routeConfig
	]

	angular.module('myApp').config(configRoute);

	/* -- END ROUTE CONFIG -- */

})();
