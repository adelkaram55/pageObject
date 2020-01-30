export default class Page {
    constructor() {
        this.title = 'My Page'
    }

    open(path) {
        browser.url("https://admin.dev.storyfile.com/login");
        return browser;
    }
}