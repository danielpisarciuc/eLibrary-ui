(function () {
    'use strict';

    angular.module('App')
        .controller('AddBookCtrl', AddBookCtrl);

    function AddBookCtrl($state, $log, bookService, referenceDataService) {
        var vm = this;

        vm.book = {
            "isbn": null,
            "title": null,
            "bookAuthors": [
                {
                    "firstName": null,
                    "lastName": null
                }
            ],
            "bookDetails": [
                {
                    "language": null,
                    "format": null,
                    "subject": null,
                    "publicationDate": null,
                    "description": null
                }
            ]
        };

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
            bookService.createBook(vm.book)
                .then(addBookSuccess)
        };

        function addBookSuccess(msg) {
            $log.info(msg);
            $state.go('libraryBooks', {}, {reload: true});
        }
    }
}());