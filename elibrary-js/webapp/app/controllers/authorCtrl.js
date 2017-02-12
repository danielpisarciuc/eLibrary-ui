(function () {
    'use strict';

    angular.module('App')
        .controller('AuthorCtrl', AuthorCtrl);

    function AuthorCtrl($scope, $state, $stateParams, authorService, bookService) {
        var vm = this;

        $scope.filterTerm = '';
        $scope.numPerPage = 10;
        $scope.currentPage = 1;

        $scope.paginate = function (value) {
            var begin, end, index;

            begin = ($scope.currentPage - 1) * $scope.numPerPage;
            end = begin + $scope.numPerPage;
            index = $scope.authorBooks.indexOf(value);

            return (begin <= index && index < end);
        };

        vm.delete = function (bookId) {
            bookService.deleteBook(bookId)
                .then(function () {
                    $state.go('authorBooks', {}, {reload: true});
                })
        };

        authorService.getAuthorBooks($stateParams.authorName).then(function resolve(books) {
            $scope.authorBooks = books;
        });

    }

}());