(function(){

   "use strict";

   angular.module('myApp').constant(
      "APP_CONFIG", {
         "REST_BASE_URL" : "http://localhost:8080/pastor-food-api/api",
         "DEFAULT_PAGE_SIZE": 10
      }
   );

})();
