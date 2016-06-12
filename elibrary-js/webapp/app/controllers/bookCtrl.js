(function () {
    'use strict';

    angular.module('App')
        .controller('BookCtrl', BookCtrl);

    function BookCtrl($state, $log, bookService) {
        var vm = this;

        vm.bookInfo = [];
        vm.newBook = {};

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

        vm.save = function() {
            $log.info('Save new book...');
            bookService.createBook(vm.newBook)
                .then(addBookSuccess)
        };

        function addBookSuccess(msg){
            $log.info(msg);
            $state.go('bookInfo', {}, {reload: true});
        }

    }
}());