(function () {
    'use strict';

    angular.module('App')
        .controller('UpdateBookCtrl', UpdateBookCtrl);

    function UpdateBookCtrl($scope, $stateParams, bookService, referenceDataService) {
        var vm = this;

        $scope.book = {};

        bookService.getBookById($stateParams.id)
            .then(function bookFunction(book) {
                $scope.book = book;
            });

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

        vm.updateBook = function () {
            //TODO implement this.
        }
    }
}());