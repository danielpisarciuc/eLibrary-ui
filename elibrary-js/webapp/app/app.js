(function () {
    'use strict';

    var app = angular.module('App', ['ngResource', 'ui.router', 'ui.bootstrap']);

    app.config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/welcome');

        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'app/views/welcome.html',
                controller: 'WelcomePageCtrl as vm'
            })
            .state('authorBooks', {
                url: '/authorBooks?authorName',
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
                url: '/updateBook/:id',
                templateUrl: 'app/views/updateBook.html',
                controller: 'UpdateBookCtrl as vm'
            });
    }

}());