angular.module("demos.core").service("progressService", [
    "$http", function ($http) {
        var httpConfig = {
            params: {
            }
        };

        var baseUrl = "http://pb-api.herokuapp.com";

        var _getBarsData = function () {
            return $http.get(baseUrl + "/bars", httpConfig);
        };

        return {
            getBarsData: _getBarsData
        };
    }
]); 