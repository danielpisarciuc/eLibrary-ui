(function () {
    'use strict';

    angular.module('App')
        .controller('AddBookCtrl', AddBookCtrl);

    function AddBookCtrl($scope, $state, $log, bookService, referenceDataService) {
        var vm = this;

        $scope.book = {};
        $scope.bookAuthors = [];

        var BOOK_FORMAT = 'BOOK_FORMAT';
        var BOOK_LANGUAGE = 'BOOK_LANGUAGE';
        var BOOK_SUBJECT = 'BOOK_SUBJECT';

        referenceDataService.bookFormat(BOOK_FORMAT)
            .then(function bookFormats(bookFormats) {
                $scope.bookFormats = bookFormats;
            });

        referenceDataService.bookLanguage(BOOK_LANGUAGE)
            .then(function bookLanguages(bookLanguages) {
                $scope.bookLanguages = bookLanguages;
            });

        referenceDataService.bookSubject(BOOK_SUBJECT)
            .then(function bookSubject(bookSubjects) {
                $scope.bookSubjects = bookSubjects;
            });

        vm.addLanguage = function (language) {
            $scope.book.language = language.id;
        };

        vm.addFormat = function (format) {
            $scope.book.format = format.id;
        };

        vm.addSubject = function (subject) {
            $scope.book.subject = subject.id;
        };

        vm.save = function () {

            var data = {
                "isbn": $scope.book.isbn,
                "title": $scope.book.title,
                "bookAuthors": $scope.bookAuthors,
                "bookDetails": [
                    {
                        "language": $scope.book.language,
                        "format": $scope.book.format,
                        "subject": $scope.book.subject,
                        "publicationDate": $scope.book.publicationDate,
                        "description": $scope.book.description
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