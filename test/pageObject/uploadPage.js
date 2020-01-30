module.exports = function(browser){

    this.Uploadimage = function (){

    browser.click('.btn-edit')
    .pause(2000)
    .waitForElementVisible('#formFieldimage')
    .setValue('input#formFieldimage', require('path').resolve(__dirname + '/' +'IMG_1523.PNG'))
    .click('button[type=submit]')
    .pause(2000)
    .waitForElementVisible('body')
    .pause(2000)
    browser.assert.attributeContains(".row-image", "src", "https://storyfile-dev-development.s3.amazonaws.com/UserPersonalImage510?");
    }
}