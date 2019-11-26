(function (angular) {
    'use strict'
    angular.module("Tahunakademik", [])
    .controller("TahunakademikController", function($scope,$http){
        $scope.DatasKompetensi = [];
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
            $scope.Simpan = function () {
                if ($scope.status == "Simpan") {
                    $http({
                        method: "POST",
                        url: "http://localhost/Penilaian/restapi/TahunAkademik",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function (response) {
                        $scope.DatasTahunAkademik.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function (error) {
                        console.log(error.message);
                        alert("GAGAL SIMPAN");
                    })
                } else {
                    $http({
                        method: "put",
                        url: "http://localhost/Penilaian/restapi/tahunakademik",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function (response) {
                        alert("Berhasil di Diubah");
                    }, function (error) {
                        alert("Gagal Update");
                    })
                }

            }
            $scope.Hapus = function (item) {
                $http({
                    method: "delete",
                    url: "http://localhost/Penilaian/restapi/tahunakademik?idtahunakademik=" + item.idtahunakademik,
                }).then(function (response) {
                    var index = $scope.DatasTahunAkademik.indexOf(item);
                    $scope.DatasTahunAkademik.splice(index, 1);
                    alert("Data Berhasil di Hapus");
                }, function (error) {
                    alert("Gagal Menghapus");
                })
            }
            $scope.GetData=function(item){
                $scope.input = item;
                $scope.status="Update";

            }
           
            $scope.GetSimpan = function (item) {
                $scope.input = {};
                $scope.status = "Simpan";
            }
           
    

    })
})(window.angular);
