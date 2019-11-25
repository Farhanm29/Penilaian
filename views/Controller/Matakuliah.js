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
            $scope.Simpan = function () {
                if ($scope.status == "Simpan") {
                    $http({
                        method: "POST",
                        url: "http://localhost/Penilaian/restapi/matakuliah",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function (response) {
                        $scope.DatasMatakuliah.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function (error) {
                        console.log(error.message);
                        alert("GAGAL SIMPAN");
                    })
                } else {
                    $http({
                        method: "put",
                        url: "http://localhost/Penilaian/restapi/matakuliah",
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
                    url: "http://localhost/Penilaian/restapi/matakuliah?kdmk=" + item.kdmk,
                }).then(function (response) {
                    var index = $scope.DatasMatakuliah.indexOf(item);
                    $scope.DatasMatakuliah.splice(index, 1);
                    alert("Data Berhasil di Hapus");
                }, function (error) {
                    alert("Gagal Menghapus");
                })
            }
            $scope.GetData=function(item){
                $scope.input = item;
                $scope.status=update;

            }
           
            $scope.GetSimpan = function (item) {
                $scope.input = {};
                $scope.status = "Simpan";
            }
           
    

    })
})(window.angular);
