(function (angular) {
    'use strict'
    angular.module("TahunAkademik", [])
    .controller("TahunAkademikController", function($scope,$http){
        $scope.DatasTahunAkademik = [];
            $scope.input = {};
            $scope.status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/Penilaian/restapi/tahunakademik",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasTahunAkademik = response.data.result
            })

    })
})(window.angular);
