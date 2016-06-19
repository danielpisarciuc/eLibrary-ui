(function () {
    'use strict';

    angular.module('App')
        .controller('AddBookCtrl', AddBookCtrl);

    function AddBookCtrl($scope, $state, $log, bookService, referenceDataService) {
        var vm = this;

        vm.book = {
            "isbn": '',
            "title": '',
            "bookAuthors": [
                {
                    "firstName": '',
                    "lastName": ''
                }
            ],
            "bookDetails": [
                {
                    "language": '',
                    "format": '',
                    "subject": '',
                    "publicationDate": '',
                    "description": ''
                }
            ]
        };

        vm.bookFormats = {};
        vm.bookLanguages = {};
        vm.bookSubjects = {};
        var BOOK_FORMAT = 'BOOK_FORMAT';
        var BOOK_LANGUAGE = 'BOOK_LANGUAGE';
        var BOOK_SUBJECT = 'BOOK_SUBJECT';

        referenceDataService.bookFormat(BOOK_SUBJECT)
            .then(bookSubjects);

        function bookSubjects(bookSubjects) {
            if (angular.isArray(bookSubjects)) {
                vm.bookSubjects = bookSubjects;

            } else {
                vm.bookSubjects = [bookSubjects];
            }
        }

        referenceDataService.bookFormat(BOOK_LANGUAGE)
            .then(bookLanguages);

        function bookLanguages(bookLanguages) {
            if (angular.isArray(bookLanguages)) {
                vm.bookLanguages = bookLanguages;

            } else {
                vm.bookLanguages = [bookLanguages];
            }
        }

        referenceDataService.bookFormat(BOOK_FORMAT)
            .then(bookFormats);

        function bookFormats(bookFormats) {
            if (angular.isArray(bookFormats)) {
                vm.bookFormats = bookFormats;

            } else {
                vm.bookFormats = [bookFormats];
            }
        }

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