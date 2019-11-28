(function (angular) {
    'use strict'
    angular.module("Userinrole", [])
        .controller("UserinroleController", function ($scope, $http) {
            $scope.DatasUserinrole = [];
            $scope.DatasUser = [];
            $scope.input = {};
            $scope.status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/Penilaian/restapi/userinrole",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasUserinrole = response.data.result
            })
           


           

           

        })
})(window.angular);
