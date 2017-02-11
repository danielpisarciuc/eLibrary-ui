(function () {
    'use strict';

    angular.module('App').directive('showWarningMessage', [
        function () {
            return {
                priority: 100,
                restrict: 'A',
                link: showWarningMessage
            };
        }]);

    var showWarningMessage = function (scope, element, attr) {
        var msg = "Are you sure you want to delete this book?";
        var clickAction = attr.confirmedClick;
        element.bind('click', function (event) {
            if (!confirm(msg)) {
                event.stopImmediatePropagation();
                event.preventDefault;
            }
        });
    }
}());
