(function (angular) {
    'use strict'
    angular.module("Userinrole", [])
        .controller("UserinroleController", function ($scope, $http) {
            $scope.DatasUserinrole = [];
            $scope.DatasUser
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
            $scope.Simpan = function () {
                if ($scope.status == "Simpan") {
                    $http({
                        method: "POST",
                        url: "http://localhost/Penilaian/restapi/userinrole",
                        data: $scope.input,
                        header: {
                            "Content-Type": "application/json"
                        }
                    }).then(function (response) {
                        $scope.DatasUserinrole.push(angular.copy($scope.input));
                        alert("Berhasil di Simpan")
                    }, function (error) {
                        console.log(error.message);
                        alert("GAGAL SIMPAN");
                    })
                } else {
                    $http({
                        method: "put",
                        url: "http://localhost/Penilaian/restapi/userinrole",
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
                    url: "http://localhost/Penilaian/restapi/userinrole?iduserinrole=" + item.iduserinrole,
                }).then(function (response) {
                    var index = $scope.DatasUserinrole.indexOf(item);
                    $scope.DatasUserinrole.splice(index, 1);
                    alert("Data Berhasil di Hapus");
                }, function (error) {
                    alert("Gagal Menghapus");
                })
            }
            $scope.GetSimpan = function (item) {
                $scope.input = {};
                $scope.status = "Simpan";
            }
            $scope.GetData = function (item) {
                $scope.input = item;
                $scope.status = "Update";
            }







        })
})(window.angular);
