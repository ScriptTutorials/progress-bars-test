angular.module('demos.core').directive('progressbar', ['progressService',
    function (progressService) {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "app/directives/progressbar.html",
        link: function (scope, element, attrs) { 

            scope.bars = [];
            scope.buttons = [];
            scope.limit = 0;
            scope.selectedBar = 0;

            progressService.getBarsData().then(function (response) {
                var responseData = response.data;

                responseData.bars.map(function(barValue) {
                    scope.bars.push({value: barValue});
                });

                responseData.buttons.map(function(buttonValue) {
                    scope.buttons.push({value: buttonValue});
                });

                scope.limit = responseData.limit;
            });

            scope.updateProgressbar = function(value) {
                scope.bars[scope.selectedBar].value += value;

                if (scope.bars[scope.selectedBar].value < 0) {
                    scope.bars[scope.selectedBar].value = 0;
                }
            };
        }
    }
}]);