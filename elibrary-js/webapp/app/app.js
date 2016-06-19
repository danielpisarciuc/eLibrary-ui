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
                controller: 'AdminCtrl as vm'
            })
            .state('authorBooks', {
                url: '/authorBooks',
                templateUrl: 'app/views/authorBooks.html',
                controller: 'AuthorCtrl as vm'
            })
            .state('libraryBooks', {
                url: '/libraryBooks',
                templateUrl: 'app/views/libraryBooks.html',
                controller: 'LibraryBooksCtrl as vm'
            })
            .state('bookInfo', {
                url: '/book/:id',
                templateUrl: 'app/views/bookInfo.html',
                controller: 'BookInfo as vm'
            })

            .state('addBook', {
                url: '/addBook',
                templateUrl: 'app/views/addBook.html',
                controller: 'AddBookCtrl as vm'
            });
    }

}());