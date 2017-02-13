describe('eLibrary click on view books link', function() {
    var navigation = require('../utils/navigation.js');

    it('should have view books tab', function() {
        navigation.goToViewBooks();
        browser.sleep(1000);

        element(by.id('libraryBooks')).click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:9092/elibrary-js/webapp/#/libraryBooks");
        browser.sleep(2000);
    });
});
