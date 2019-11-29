// (function (angular) {
//     'use strict'
//     angular.module("Pertanyaan", [])
//         .controller("PertanyaanController", function ($scope, $http) {
//             $scope.DatasPertanyaan = [];
//             $scope.input = {};
//             $scope.status = "Simpan";
//             $http({
//                 method: "get",
//                 url: "http://localhost/Penilaian/restapi/pertanyaan",
//                 header: {
//                     "Content-Type": "application/json"
//                 }
//             }).then(function (response) {
//                 $scope.DatasPertanyaan = response.data.result
//             })


//             //Simpan Mahasiswa

//             $scope.Simpan = function () {
//                 if ($scope.status == "Simpan") {
//                     $http({
//                         method: "POST",
//                         url: "http://localhost/Penilaian/restapi/pertanyaan",
//                         data: $scope.input,
//                         header: {
//                             "Content-Type": "application/json"
//                         }
//                     }).then(function (response) {
//                         $scope.DatasPertanyaan.push(angular.copy($scope.input));
//                         alert("Berhasil di Simpan")
//                     }, function (error) {
//                         console.log(error.message);
//                         alert("GAGAL SIMPAN");
//                     })
//                 } else {
//                     $http({
//                         method: "put",
//                         url: "http://localhost/Penilaian/restapi/pertanyaan",
//                         data: $scope.input,
//                         header: {
//                             "Content-Type": "application/json"
//                         }
//                     }).then(function (response) {
//                         alert("Berhasil di Diubah");
//                     }, function (error) {
//                         alert("Gagal Update");
//                     })
//                 }

//             }

//             $scope.GetSimpan = function (item) {
//                 $scope.input = {};
//                 $scope.status = "Simpan";
//             }
//             $scope.GetData = function (item) {
//                 $scope.input = item;
//                 $scope.status = "Update";
//             }








//         })
// })(window.angular);
