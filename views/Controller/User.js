(function (angular) {
    'use strict'
    angular.module("User", [])
        .controller("UserController", function ($scope, $http, $window) {
            $scope.input = {};
            $scope.login = function () {
                var Url = "http://localhost/Penilaian/restapi/User?Username=" + $scope.input.Username + "&Pasword=" + $scope.input.Pasword;
                $http({
                    method: "get",
                    url: Url
                }).then(function (response) {
                    alert("Sukses Login");
                    $window.sessionStorage.setItem("Username", $scope.input.Username);
                    window.location.href = "index.html"
                }, function (error) {
                    alert("Gagal Login");
                    $window.sessionStorage.setItem("Username", $scope.input.Username);
                })
            }
            
        })






})(window.angular);

