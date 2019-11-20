(function (angular) {
    'use strict'
    angular.module("Mahasiswa", [])
    .controller("MahasiswaController", function($scope,$http){
        $scope.DatasMahasiswa = [];
            $http({
                method: "get",
                url: "http://localhost/Penilaian/restapi/mahasiswa",
                header: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $scope.DatasPegawai = response.data.result
            })


    })
})(window.angular);
