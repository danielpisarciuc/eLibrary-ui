(function () {
    'use strict';

    angular.module('App')
        .controller('LibraryBooksCtrl', LibraryBooksCtrl);

    function LibraryBooksCtrl($scope, $state, bookService) {
        var vm = this;
        $scope.sortType = 'isbn';
        $scope.sortReverse = false;
        $scope.filterTerm = '';
        $scope.numPerPage = 10;
        $scope.currentPage = 1;

        $scope.paginate = function (value) {
            var begin, end, index;

            begin = ($scope.currentPage - 1) * $scope.numPerPage;
            end = begin + $scope.numPerPage;
            index = $scope.libraryBooks.indexOf(value);

            return (begin <= index && index < end);
        };

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
