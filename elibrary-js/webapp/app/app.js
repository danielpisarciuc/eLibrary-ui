(function () {
    'use strict';

    var app = angular.module('App', ['ngResource', 'ui.router', 'ui.bootstrap']);

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
            .state('bookDetails', {
                url: '/book/:id',
                templateUrl: 'app/views/bookDetails.html',
                controller: 'BookDetailsCtrl as vm'
            })

            .state('addBook', {
                url: '/addBook',
                templateUrl: 'app/views/addBook.html',
                controller: 'AddBookCtrl as vm'
            })

            .state('updateBook', {
                url: '/updateBook',
                templateUrl: 'app/views/updateBook.html',
                controller: 'UpdateBookCtrl as vm'
            });
    }

}());