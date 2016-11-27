(function() {
   "use strict";

   var depends = [
      'ui.router',
      'ngMaterial',
      'ui.utils.masks',
      'idf.br-filters',
      'ngFileSaver',
      'cl.paging'
   ];
   angular.module('myApp', depends);

})();
