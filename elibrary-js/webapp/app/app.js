(function () {
    'use strict';

    var app = angular.module('App', ['ngResource', 'ngRoute']);

    app.config(config);

    function config($routeProvider){
        $routeProvider
            .when('/authorBooks', {
                templateUrl: 'app/views/authorBooks.html',
                controller: 'AuthorCtrl',
                controllerAs: 'vm'
            })
            .when('/libraryBooks', {
                templateUrl: 'app/views/libraryBooks.html',
                controller: 'BookCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/authorBooks'
            });
    }

}());