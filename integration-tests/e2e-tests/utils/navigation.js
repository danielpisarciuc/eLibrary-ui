(function () {
    'use strict';

    module.exports = {
        goHome: function () {
            browser.get(browser.baseUrl);
            element(by.id('welcome')).click();
        },
        goToViewBooks: function () {
            element(by.id('libraryBooks')).click();
        },
        goToAddBook: function () {
            element(by.id('addBook')).click();
        }
    };

}());