(function () {
    'use strict';

    angular.module('App')
        .factory('authorService', authorService);

    function authorService($q, $http) {

        var BASE_URL = 'http://localhost:9091/elibrary-ds';

        return {
            getAuthorBooks: getAuthorBooks
        };

        function getAuthorBooks(authorName) {
            return $http.get(BASE_URL + '/book/author-books?authorName=' + authorName)
                .then(sendGetData)
                .catch(sendGetError);
        }

        function sendGetData(response) {
            return response.data;
        }

        function sendGetError(response) {
            return $q.reject('Error authorService status: ' + response.status + ')');
        }
    }

}());