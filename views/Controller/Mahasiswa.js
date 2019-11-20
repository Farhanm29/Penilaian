(function (angular) {
    'use strict'
    angular.module("Mahasiswa", [])
        .controller("MahasiswaController", function ($scope, $http) {
            $scope.DatasMahasiswa = [];
            $scope.input = {};
            $scope.status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/Penilaian/restapi/mahasiswa",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasMahasiswa = response.data.result
            })
    



        })
})(window.angular);
