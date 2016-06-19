(function () {
    'use strict';

    angular.module('App')
        .controller('InfoBookCtrl', InfoBookCtrl);

    function InfoBookCtrl($scope, $state, $log, $stateParams, bookService) {
        var vm = this;

        vm.books = [];

        $scope.editBook = function () {
            bookService.getBookById($stateParams.bookId)
                .then(bookFunction);
        };


        bookService.getAllBooks().then(bookFunction);

        function bookFunction(books) {
            if (angular.isArray(books)) {
                vm.books = books;

            } else {
                vm.books = [books];
            }
        }

        vm.details = function () {
            $state.go('libraryBooks', {}, {reload: true});
        };

        $scope.delete = function (id) {
            bookService.deleteBook(id)
                .then(function (message) {
                    $log.warn(message);
                    $state.go('libraryBooks', {}, {reload: true});
                })

        }
    }
}());
