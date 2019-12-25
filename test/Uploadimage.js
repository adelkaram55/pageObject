module.exports = {
  
  'Uploadimage' : function (browser) {

    browser
      .url('https://admin.dev.storyfile.com/login')
       .waitForElementVisible('body')
        .setValue('input[type=email]', 'adelkaram0001@gmail.com')
       .setValue('input[type=password]', 'adeladel')
      .click('button[type=submit]')
//navigate to user screen 
       .pause(5000)
        .click('xpath', '//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[1]/a')
       .waitForElementVisible('body',10000)
      .waitForElementVisible('button')
      .setValue('input[type=text]','adelbulk')
      .setValue('input[type=text]','\n')
      
//Upload image process
        browser.click('.btn-edit')
        .pause(2000)
        .waitForElementVisible('#formFieldimage')
        .setValue('input#formFieldimage', require('path').resolve(__dirname + '/' +'OriginalProfileImage.png'))
        .click('button[type=submit]')
        .pause(10000)
        .waitForElementVisible('body')
        .pause(10000)
        browser.assert.attributeContains(".row-image", "src", "https://storyfile-dev-development.s3.amazonaws.com/UserPersonalImage510?");
    


  }
  }