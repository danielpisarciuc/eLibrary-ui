(function () {
    'use strict';

    angular.module('App')
        .factory('referenceDataService', referenceDataService);

    function referenceDataService($q, $http) {

        var BASE_URL = 'http://localhost:9091/elibrary-ds';

        return {
            bookFormat: referenceData,
            bookLanguage: referenceData,
            bookSubject: referenceData
        };

        function referenceData(type) {
            return $http.get(BASE_URL + '/reference-data/' + type)
                .then(sendGetData)
                .catch(sendGetError);
        }

        function sendGetData(response) {
            return response.data;
        }

        function sendGetError(response) {
            return $q.reject('Error bookService status: ' + response.status + ')');
        }

    }
}());