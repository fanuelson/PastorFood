(function(){

   var onEnterPressDirective = function () {
      return function (scope, element, attrs) {
         element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
               scope.$apply(function (){
                  scope.$eval(attrs.onEnterPress);
               });

               event.preventDefault();
            }
         });
      };
   }

angular.module('myApp').directive('onEnterPress', onEnterPressDirective);

})();
