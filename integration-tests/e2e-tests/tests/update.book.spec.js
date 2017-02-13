describe('eLibrary update book view', function () {
    var navigation = require('../utils/navigation.js');

    it('update book based on isbn', function () {
        navigation.goToViewBooks();
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual("http://127.0.0.1:9092/elibrary-js/webapp/#/libraryBooks");

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div[1]/input')).sendKeys('995');
        browser.sleep(2000);

        element(by.xpath(".//*[@id='libraryBooksTable']/tbody/tr[1]/td[5]/button")).click();
        browser.sleep(2000);

        expect(element(by.xpath('html/body/div/div[1]/section/ui-view/section[1]/ol/li[3]')).getText()).toMatch('Update Book');
        browser.sleep(3500);

    });

});