(function (angular) {
    'use strict'
    angular.module("User", [])
        .controller("UserController", function ($scope, $http, $window) {
            $scope.input = {};
            $scope.login = function () {
                var Url = "http://localhost/Penilaian/restapi/User?Username=" + $scope.input.Username + "&Pasword=" + $scope.input.Pasword;
                $http({
                    method: "get",
                    url: Url
                }).then(function (response) {
                    if(response.data.data.Status==true){
                        if(response.data.data.data[0].Nama_role=="Mahasiswa"){
                            $window.sessionStorage.setItem("Username", response.data.data.data[0].Username);
                            $window.sessionStorage.setItem("Nama", response.data.data.data[0].Nama);
                            $window.sessionStorage.setItem("Email", response.data.data.data[0].email);
    
                            window.location.href = "mahasiswa.html"
                        }else{
                            $window.sessionStorage.setItem("Username", response.data.data.data[0].Username);
                        $window.sessionStorage.setItem("Nama", response.data.data.data[0].Nama);
                        $window.sessionStorage.setItem("Email", response.data.data.data[0].email);

                        window.location.href = "admin.html"
                        }
                        
                    }else{
                        alert("PERIKSA KEMBALI USERNAME DAN PASWORD ANDA");
                    }
                    
                }, function (error) {
                    alert("Gagal Login");
                    $window.sessionStorage.setItem("Username", $scope.input.Username);
                })
            }
            
        })






})(window.angular);

