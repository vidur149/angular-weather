(function() {
    angular.module('counter', [])
        .controller("Weather", ['$scope', '$http', function($scope, $http) {
            // get todays date and set the background according to hour of the day
            // getHours();

            // get lat and lang of current position
            if (navigator.geolocation) {

            }

            $scope.getWeather = function(lat, long) {
                // var api_key = '?appid= write your api key here';

                // Modify the below endpoint according to the docs.

                // var weather_endpoint = 'http://api.openweathermap.org/data/2.5/weather' + api_key + '&units=metric';

                // make a get request to the endpoint

            };
        }]);
})();