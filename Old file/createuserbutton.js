module.exports = function(browser){

    this.cssSelector = 'css selector';

    this.clickcreatebutton = function(path){
        browser
        .waitForElementVisible('button')
        .click(this.cssSelector, path)
        

    }

}