(function () {
    'use strict';

    angular.module('App')
        .controller('AuthorCtrl', AuthorCtrl);

    function AuthorCtrl($scope, $stateParams, authorService) {

        authorService.getAuthorBooks($stateParams.authorName).then(function resolve(books) {
            $scope.authorBooks = books;
        });

    }

}());