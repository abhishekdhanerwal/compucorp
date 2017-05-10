'use strict';

var musicApp = angular.module('musicApp', ['ngResource', 'ngRoute' ,'musicApp.search' ])
    .config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/home',
            {
                templateUrl: 'search/search.html',
                controller: 'SearchMusicCtrl',
                controllerAs: 'vm'
            });

        $routeProvider.otherwise({redirectTo: '/home'});

        $locationProvider.html5Mode(true);

    });
