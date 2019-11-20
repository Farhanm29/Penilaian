(function (angular) {
    'use strict'
    angular.module("Penilaian", [])
    .controller("PenilaianController", function($scope,$http){
        $scope.DatasPenilaian = [];
            $scope.input = {};
            $scope.status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/Penilaian/restapi/penilaian",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasPenilaian = response.data.result
            })

    })
})(window.angular);
