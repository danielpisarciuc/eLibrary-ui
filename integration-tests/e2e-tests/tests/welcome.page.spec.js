describe('eLibrary application is up and running', function () {
    var navigation = require('../utils/navigation.js');

    it('should have the welcome page', function () {
        navigation.goHome();
        browser.sleep(1000);

        expect(browser.getTitle()).toEqual('eLibrary');
        browser.sleep(2000);
    });
});
