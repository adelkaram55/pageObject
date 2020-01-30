
var createuserpage = require ('./createuserpage');
module.exports = function(browser){

this.csselector = 'css selector';

    this.publicUser=function(){
        browser
        .element(this.csselector, '.btn-private')
        .waitForElementVisible('.btn-private')
         .click('.btn-private')
         .assert.containsText('.btn-private','Make Public');
            const Createuserpage = new createuserpage(browser);
            Createuserpage.searchField('','\n');
            browser.element(this.csselector, '.btn-private')
            .waitForElementVisible('.btn-private')
             .click('.btn-private')
             .pause(2000)
    }

     
}