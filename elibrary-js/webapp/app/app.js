(function () {
    'use strict';

    var app = angular.module('App', ['ngResource', 'ui.router']);

    app.config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/admin');

        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/views/admin.html',
                controller: 'BookCtrl as vm'
            })
            .state('authorBooks', {
                url: '/authorBooks',
                templateUrl: 'app/views/authorBooks.html',
                controller: 'AuthorCtrl as vm'
            })
            .state('libraryBooks', {
                url: '/libraryBooks',
                templateUrl: 'app/views/libraryBooks.html',
                controller: 'BookCtrl as vm'
            })
            .state('addBook', {
                url: '/addBook',
                templateUrl: 'app/views/addBook.html',
                controller: 'BookCtrl as vm'
            });
    }

}());