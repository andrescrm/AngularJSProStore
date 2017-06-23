angular.module("sportsStore")
.constant("dataUrlTest", "http://localhost:5500/products")
.constant("dataUrlProd", "/AngularJSProStore/datasources/data.json")
.controller("sportsStoreCtrl", function($scope, $http, dataUrlTest, dataUrlProd){
    $scope.data = {};
    var url = window.document.location.hostname == "localhost" ? dataUrlTest : dataUrlProd;

    $http.get(url)
        .then(function(data) {
            $scope.data.products = data.data;
        },
        function(error) {            
            $scope.data.error = error;
        });
}); 