(function () {
    'use strict';

    angular.module('App')
        .controller('LibraryBooksCtrl', LibraryBooksCtrl);

    function LibraryBooksCtrl($scope, $state,bookService) {
        var vm = this;

        bookService.getAllBooks().then(function resolve(books) {
            $scope.libraryBooks = books;
        });

        vm.delete = function (bookId) {
            bookService.deleteBook(bookId)
                .then(function () {
                    $state.go('libraryBooks', {}, {reload: true});
                })
        };
    }
}());
