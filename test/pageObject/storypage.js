
module.exports = function(browser){
    this.cssSelector ='css selector';
    this.xpath ='xpath';
    this.logStartDate ='input[type=date]';
    this.logEndDate ='';
    this.importVideo ='react-select-2-input';
    this.addToExhibit ='';
    this.removeExhibit ='';
    this.content ='';
    this.edit ='';
    this.searchInput ='input[type=text]';
    this.smallTalk ='';
    this.uploadBtn ='Button[type=submit]';


    this.downloadLogHistory=function(){
        browser
        .click(this.cssSelector,'.btn-warning')
        .setValue(this.logStartDate,'01122019')
        .setValue('#formFieldendDate','23122019')
        .pause(2000)
        .click(this.xpath,'/html/body/div[2]/div[2]/div/div/div[2]/div/div/button')
        .pause(5000)
    },
    this.importBVideo=function(xpath,searchPath,searchText,enterky,chooseBID,chooseBtnId,filePath){
        browser
        .click(this.xpath,xpath)
        .waitForElementVisible('body')
        .click(this.xpath,searchPath)
        .waitForElementVisible('span')
        .execute(function() {
           document.querySelector('#formFieldzip').setAttribute("class", "democlass");
           
         });
        
      browser
      .setValue(this.searchInput,searchText)
      .pause(2000)
        .setValue(this.searchInput,enterky)
        .setValue(chooseBID, require('path').resolve(__dirname + '/' +filePath))
        .click(this.uploadBtn)
        browser.pause(3000)
        .waitForElementPresent('span.help-block',800000000000)

    }

};