(function (angular) {
    'use strict'
    angular.module("Penilaian", [])
        .controller("PenilaianController", function ($scope, $http) {
            $scope.DatasPenilaian = [];
            $scope.Pertanyaan = [];
            $scope.input = {};
            $scope.status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/Penilaian/restapi/kompentensi",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.Pertanyaan = response.data.result.Kompetensi
            })
        })
})(window.angular);
