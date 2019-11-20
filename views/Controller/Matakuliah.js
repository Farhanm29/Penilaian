(function (angular) {
    'use strict'
    angular.module("Matakuliah", [])
    .controller("MatakuliahController", function($scope,$http){
        $scope.DatasMatakuliah = [];
            $scope.input = {};
            $scope.status = "Simpan";
            $http({
                method: "get",
                url: "http://localhost/Penilaian/restapi/matakuliah",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasMatakuliah = response.data.result
            })
    

    })
})(window.angular);
