(function () {
    'use strict';

    angular.module('App')
        .controller('BookDetailsCtrl', BookDetailsCtrl);

    function BookDetailsCtrl($scope, $stateParams, bookService) {

        bookService.getBookById($stateParams.id).then(function resolve(book) {
            $scope.bookDetails = book;
        });
    }
}());