
module.exports = {
  
  'Error Dublicate Email' : function (browser) {

    browser
      .url('https://admin-dev.story-file.optima.io/login')
       .waitForElementVisible('body')
        .setValue('input[type=email]', 'adelkaram0001@gmail.com')
       .setValue('input[type=password]', 'adeladel')
      .click('button[type=submit]')
//navigate to user screen 
        .click('xpath', '//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[1]/a')
        .waitForElementVisible('body',10000)
        .waitForElementVisible('button')
        .setValue('input[type=text]','adelbulk')
        .setValue('input[type=text]','\n')
//Select create user button :don't write space in the class name.
      browser.element('css selector','.btn-info')
      .click('.btn-info')
        .waitForElementVisible('body')
         .waitForElementVisible('input')
          .setValue('input[name=displayName]', 'adelbulk')
         .setValue('input[name=username]', 'adelbulk')
        .setValue('input[name=email]', 'test@storyfile.com')
       .setValue('input[name=password]', 'adeladel')
      .click('button[type=submit]')
      .pause(5000)
      browser.assert.visible('.alert-danger')
//Confirm error message while dublicate email "An error occurred while trying to save the data on server, please try again."
     
      .end();
  }
};



// .setValue('input#formFieldimage', require('path').resolve(__dirname + '/' +'OriginalProfileImage.png')) // Works