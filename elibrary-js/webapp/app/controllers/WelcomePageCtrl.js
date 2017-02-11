(function () {
    'use strict';

    angular.module('App')
        .controller('WelcomePageCtrl', WelcomePageCtrl);

    function WelcomePageCtrl($state, bookService) {

        var vm = this;

        vm.books = [];

        vm.searchBook = function (searchTerm) {
            return bookService.searchBook(searchTerm).then(function (books) {
                var bookList = [];

                angular.forEach(books, function (book) {
                    bookList.push({id: book.id, title: 'Title: ' + book.title + ', ISBN: ' + book.isbn});
                });
                return bookList;
            });
        };

        vm.viewBookDetails = function viewBookDetails($item) {
            if (!$item) {
                return;
            }

            var bookId = $item.id;

            return $state.go('bookDetails', bookId);
        }
    }
}());