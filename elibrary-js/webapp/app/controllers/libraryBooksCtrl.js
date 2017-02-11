(function () {
    'use strict';

    angular.module('App')
        .controller('LibraryBooksCtrl', LibraryBooksCtrl);

    function LibraryBooksCtrl($scope, $state, $log, $stateParams, bookService) {
        var vm = this;

        vm.books = [];

        $scope.searchBook = function (searchTerm) {
            return bookService.searchBook(searchTerm).then(bookFunction);
        };

        bookService.getAllBooks().then(bookFunction);

        function bookFunction(books) {
            if (angular.isArray(books)) {
                vm.books = books;

            } else {
                vm.books = [books];
            }
        }

        vm.delete = function (id) {
            bookService.deleteBook(id)
                .then(function (message) {
                    $log.warn(message);
                    $state.go('libraryBooks', {}, {reload: true});
                })

        }
    }
}());
