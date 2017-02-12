(function () {
    'use strict';

    angular.module('App')
        .controller('AddBookCtrl', AddBookCtrl);

    function AddBookCtrl($scope, $state, $log, bookService, referenceDataService) {
        var vm = this;

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

        $scope.save = function () {


            var data = {
                "isbn": vm.book.isbn,
                "title": vm.book.title,
                "bookAuthors": [
                    {
                        "firstName": vm.bookAuthors ? vm.bookAuthors.firstName : null,
                        "lastName": vm.bookAuthors ? vm.bookAuthors.lastName : null
                    }
                ],
                "bookDetails": [
                    {
                        "language": vm.bookDetails.language,
                        "format": vm.bookDetails.format,
                        "subject": vm.bookDetails.subject,
                        "publicationDate": vm.bookDetails.publicationDate,
                        "description": vm.bookDetails.description
                    }
                ]
            };


            $log.info('Save new book...');
            bookService.createBook(data)
                .then(function (message) {
                    $log.info(message);
                    $state.go('libraryBooks', {}, {reload: true});
                })
        };

        function addBookSuccess(msg) {
            $log.info(msg);
            $state.go('libraryBooks', {}, {reload: true});
        }

        $scope.rows = ['Default row'];
        $scope.counter = 1;

        vm.addRow = function () {
            $scope.rows.push($scope.counter);
            $scope.counter++;
        };

        vm.removeRow = function ($index) {
            $scope.rows.splice($index, 1);
            $scope.counter--;
        }
    }
}());