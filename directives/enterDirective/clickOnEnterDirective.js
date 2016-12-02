(function(){

   var clickOnEnterDirective = function () {
      return function (scope, element, attrs) {
         element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
               $(element).click();

               event.preventDefault();
            }
         });
      };
   }

angular.module('myApp').directive('clickOnEnter', clickOnEnterDirective);

})();
