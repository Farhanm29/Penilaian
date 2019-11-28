(function (angular) {
    'use strict'
    angular.module("MyApp", ["MyController", "ngAnimate", "ui.router"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("Home");
            $stateProvider
                .state("Home", {
                    url: "/Home",
                    templateUrl: "views/pages/Home.html",
                    controller: "HomeController"
                })
                .state("Mahasiswa", {
                    url: "/Mahasiswa",
                    templateUrl: "views/pages/Mahasiswa.html",
                    controller: "MahasiswaController"
                })
                .state("DetailPenilaian", {
                    url: "/DetailPenilaian",
                    templateUrl: "views/pages/DetailPenilaian.html",
                    controller: "DetailPenilaianController"
                })
                .state("Penilaian", {
                    url: "/Penilaian",
                    templateUrl: "views/pages/Penilaian.html",
                    controller: "PenilaianController"
                })
                .state("Matakuliah", {
                    url: "/Matakuliah",
                    templateUrl: "views/pages/Matakuliah.html",
                    controller: "MatakuliahController"
                })
                .state("Kompetensi", {
                    url: "/Kompetensi",
                    templateUrl: "views/pages/Kompetensi.html",
                    controller: "KompetensiController"
                })
                .state("TahunAkademik", {
                    url: "/TahunAkademik",
                    templateUrl: "views/pages/TahunAkademik.html",
                    controller: "TahunAkademikController"
                })
                .state("Userinrole", {
                    url: "/Userinrole",
                    templateUrl: "views/pages/Userinrole.html",
                    controller: "UserinroleController"
                });
        })
        .controller("view", function ($scope, $window) {
            if ($window.sessionStorage.getItem("Username") == "undefined" || $window.sessionStorage.getItem("Username") == "" || $window.sessionStorage.getItem("Username") == null) {
                window.location.href = "index.html";
            }
            $scope.logout = function () {
                sessionStorage.clear();
                window.location.href = "index.html";
            }
        })


})(window.angular);