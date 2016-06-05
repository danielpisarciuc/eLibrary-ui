(function () {
    'use strict';

    angular.module('App')
        .controller('BookCtrl', BookCtrl);

    function BookCtrl(bookService) {
        var vm = this;

        vm.bookInfo = [];

        var bookId = 69;
        bookService.getBookById(bookId)
            .then(bookFunction);

        function bookFunction(book) {
            if (angular.isArray(book)) {
                vm.bookInfo = book;

            } else {
                vm.bookInfo = [book];
            }
        }

    }
}());