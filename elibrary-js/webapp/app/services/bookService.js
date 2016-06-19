(function () {
    'use strict';

    angular.module('App')
        .factory('bookService', bookService);

    function bookService($q, $http) {

        var BASE_URL = 'http://localhost:9091/elibrary-ds';

        return {
            createBook: createBook,
            deleteBook: deleteBook,
            upateBook: updateBook,
            getBookById: getBookById,
            getBookDetails: getBookDetails
        }

        function createBook(book) {
            return $http.post(BASE_URL + '/book/create', book)
                .then(updateSuccess)
                .catch(updateError);
        }

        function deleteBook(bookId) {
            return $http.delete(BASE_URL + '/book/delete/' + bookId)
                .then(deleteSuccess)
                .catch(deleteError);
        }

        function updateBook(book) {
            return $http.put(BASE_URL + '/book/update' + book.id, book)
                .then(updateSuccess)
                .catch(updateError);
        }

        function getBookById(bookId) {
            return $http.get(BASE_URL + '/book/fetch/' + bookId)
                .then(sendGetData)
                .catch(sendGetError);
        }

        function getBookDetails(bookId) {
            return $http.get(BASE_URL + '/book/details/' + bookId)
                .then(sendGetData)
                .catch(sendGetError);
        }

        function sendGetData(response) {
            return response.data;
        }

        function sendGetError(response) {
            return $q.reject('Error bookService status: ' + response.status + ')');
        }

        function updateSuccess(response) {
            return 'bookService OK: ' + response.config.data.name;
        }

        function updateError(response) {
            return $q.reject('Error bookService status: ' + response.status + ')');
        }

        function deleteSuccess(response) {
            return 'Deleted';
        }

        function deleteError(response) {
            return $q.reject('Error bookService delete status: ' + response.status + ')');
        }
    }

}());