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
        })

}) (window.angular);