(function () {
    'use strict';

    angular.module('App')
        .controller('AddBookCtrl', AddBookCtrl);

    function AddBookCtrl($state, $log, bookService) {
        var vm = this;

        vm.newBook = {};

        vm.save = function () {
            $log.info('Save new book...');
            bookService.createBook(vm.newBook)
                .then(addBookSuccess)
        };

        function addBookSuccess(msg) {
            $log.info(msg);
            $state.go('libraryBooks', {}, {reload: true});
        }
    }
}());