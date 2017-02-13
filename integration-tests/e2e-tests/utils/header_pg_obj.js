(function () {
    'use strict';

    var HeaderPage = function () {
        this.searchBoxInput = element(by.id('globalSearchInput'));

        this.getResults = function () {
            return element.all(by.css('.suggestion'));
        }
    };

    module.exports = new HeaderPage();
}());