describe('eLibrary add book tab', function () {
    var navigation = require('../utils/navigation.js');
    var todayDate = require('../utils/publicationDate.js');
    var isbn = Math.floor(Math.random() * 898) + 101;
    var bookTitle = 'Automation Test -' + isbn;

    it('should have add view tab', function () {
        navigation.goToAddBook();

        browser.sleep(1000);

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[2]/table/tbody/tr/td[1]/input')).click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:9092/elibrary-js/webapp/#/addBook");
        browser.sleep(2000);
    });


    it('create new book', function () {
        navigation.goToAddBook();

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[1]/table/tbody/tr/td[1]/input')).sendKeys(isbn);
        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[1]/table/tbody/tr/td[2]/input')).sendKeys(bookTitle);
        browser.sleep(2000);

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[2]/table/tbody/tr/td[1]/input')).click();
        browser.sleep(1000);

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[2]/table/tbody/tr/td[1]/input')).sendKeys('Engl');
        element.all(by.repeater('match in matches')).get(0).click();
        browser.sleep(1000);

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[2]/table/tbody/tr/td[2]/input')).sendKeys('Print');
        element.all(by.repeater('match in matches')).get(0).click();
        browser.sleep(1000);

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[3]/table/tbody/tr/td[1]/input')).sendKeys('Arhitect');
        element.all(by.repeater('match in matches')).get(0).click();
        browser.sleep(2000);

        todayDate.publicationDate('02/14/2017');

        element(by.id('summary')).sendKeys('Protractor Automation tests - add new book into the database');
        browser.sleep(1000);

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[5]/table/tbody/tr/td[1]/input')).sendKeys('Author 1 firstName');
        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[5]/table/tbody/tr/td[2]/input')).sendKeys('Author 2 lastName');

        browser.sleep(1000);
        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[5]/table/tbody/tr/td[3]/button')).click();

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[5]/table/tbody/tr[2]/td[1]/input')).sendKeys('Author 2 firstName');
        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[5]/table/tbody/tr[2]/td[2]/input')).sendKeys('Author 2 lastName');
        browser.sleep(1000);

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[5]/table/tbody/tr[2]/td[4]/button')).click();

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div/div[6]/button')).click();
        browser.sleep(3500);

    });

    it('verify if book is present into library books view', function () {
        navigation.goToViewBooks();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:9092/elibrary-js/webapp/#/libraryBooks");

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div[1]/input')).sendKeys(isbn);
        browser.sleep(3500);

        expect(element(by.xpath(".//*[@id='libraryBooksTable']/tbody/tr/td[1]")).getText()).toMatch(isbn.toString());
        expect(element(by.xpath(".//*[@id='libraryBooksTable']/tbody/tr/td[2]")).getText()).toMatch(isbn.toString());

    });

    it('search book based on isbn', function () {
        navigation.goHome();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:9092/elibrary-js/webapp/#/welcome");

        element(by.model('searchTerm')).sendKeys(isbn);
        browser.sleep(3500);
        element.all(by.repeater('match in matches')).get(0).click();
        browser.sleep(3500);

        expect(element(by.xpath('html/body/div[1]/div[1]/section/ui-view/section[1]/ol/li[3]')).getText()).toMatch('Book Details');
        browser.sleep(3500);
    });

    it('delete book based on isbn', function () {
        navigation.goToViewBooks();
        browser.sleep(3500);
        expect(browser.getCurrentUrl()).toEqual("http://localhost:9092/elibrary-js/webapp/#/libraryBooks");

        element(by.xpath('html/body/div/div[1]/section/ui-view/section[2]/div[1]/input')).sendKeys(isbn);
        browser.sleep(3500);

        element(by.xpath(".//*[@id='libraryBooksTable']/tbody/tr/td[6]/button")).click();
        browser.sleep(3500);

    });
});
