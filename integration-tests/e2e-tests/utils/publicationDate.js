(function () {
    'use strict';

    module.exports = {
        publicationDate: function (date) {
            element(by.model("book.publicationDate")).sendKeys(date);
            browser.sleep(1000);
        }
    };
}());