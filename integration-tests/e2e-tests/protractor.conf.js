exports.config = {

  //The address of a running selenium server.
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  //Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['--disable-web-security']
    }
  },

  suites: {
    welcome: 'tests/welcome.page.spec.js',
    viewBooks: 'tests/view.books.spec.js',
    addBooks: 'tests/add.book.spec.js',
    updateBook: 'tests/update.book.spec.js',
    authorBooks: 'tests/author.books.spec.js'
  },

  baseUrl: 'http://127.0.0.1:9092/elibrary-js/webapp/#',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 80000
  }
};