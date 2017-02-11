(function () {
    'use strict';

    angular.module('App')
        .controller('UpdateBookCtrl', UpdateBookCtrl);

    function UpdateBookCtrl($scope, $state, $log, bookService, referenceDataService) {
        var vm = this;

        vm.books = [];

        vm.editBook = function (bookId) {
            bookService.getBookById(bookId)
                .then(bookFunction);
        };

        function bookFunction(books) {
            if (angular.isArray(books)) {
                vm.books = books;

            } else {
                vm.books = [books];
            }
        }
    }
}());