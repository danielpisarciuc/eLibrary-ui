(function () {
    'use strict';

    angular.module('App')
        .controller('AddBookCtrl', AddBookCtrl);

    function AddBookCtrl($state, $log, bookService, referenceDataService) {
        var vm = this;

        vm.newBook = {};
        vm.bookFormats = {};

        var BOOK_FORMAT = 'BOOK_FORMAT';
        referenceDataService.bookFormat(BOOK_FORMAT)
            .then(referenceData);

        function referenceData(referenceData) {
            if (angular.isArray(referenceData)) {
                vm.bookFormats = referenceData;

            } else {
                vm.bookFormats = [referenceData];
            }
        };

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