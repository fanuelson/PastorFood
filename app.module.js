(function() {
   "use strict";

   var depends = [
      'ui.router',
      'ngMaterial',
      'ui.utils.masks',
      'idf.br-filters',
      'ngFileSaver',
      'cl.paging',
      'ngAnimate',
      'toastr'
   ];
   angular.module('myApp', depends);

})();
