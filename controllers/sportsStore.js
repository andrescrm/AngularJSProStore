angular.module("sportsStore")
.constant("dataUrl", "/datasources/data.json")
.controller("sportsStoreCtrl", function($scope, $http, dataUrl){
    $scope.data = {};

    $http.get(dataUrl)
        .then(function(data) {
            $scope.data.products = data.data;
        },
        function(error) {            
            $scope.data.error = error;
        });
}); 