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


            //Simpan Mahasiswa

            $scope.Simpan = function () {
                if ($scope.status == "Simpan") {
                    $http({
                        method: "POST",
                        url: "http://localhost/Penilaian/restapi/mahasiswa",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function (response) {
                        $scope.DatasMahasiswa.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function (error) {
                        console.log(error.message);
                        alert("GAGAL SIMPAN");
                    })
                } else {
                    $http({
                        method: "put",
                        url: "http://localhost/Penilaian/restapi/mahasiswa",
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
                    url: "http://localhost/Penilaian/restapi/mahasiswa?npm=" + item.npm,
                }).then(function (response) {
                    var index = $scope.DatasMahasiswa.indexOf(item);
                    $scope.DatasMahasiswa.splice(index, 1);
                    alert("Data Berhasil di Hapus");
                }, function (error) {
                    alert("Gagal Menghapus");
                })
            }
            $scope.GetSimpan = function (item) {
                $scope.input = {};
                $scope.status = "Simpan";
            }
            $scope.GetData=function(item){
                $scope.input = item;
                $scope.status = "Update";
            }


    
            




        })
})(window.angular);
