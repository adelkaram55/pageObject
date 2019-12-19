
module.exports = {
  
  'Create user' : function (browser) {

    browser
      .url('https://admin-dev.story-file.optima.io/login')
       .waitForElementVisible('body')
        .setValue('input[type=email]', 'adelkaram0001@gmail.com')
         .setValue('input[type=password]', 'adeladel')
          .click('button[type=submit]')
//navigate to user screen
      .waitForElementVisible('button')
       .click('button[type=button]')
        .click('xpath', '//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[1]/a')
         .waitForElementVisible('body',10000)
          .waitForElementVisible('button');
//Select create user button :don't write space in the class name.
      browser.element('css selector','.btn-info')
//Create user and submit
      .click('.btn-info')
       .waitForElementVisible('body',10000)
        .waitForElementVisible('input')
         .setValue('input[name=displayName]', 'Auto user')
          .setValue('input[name=username]', 'Auto user')
         .setValue('input[name=email]', 'adelkaram0002@gmail.com')
        .setValue('input[name=password]', 'adeladel')
        // .setValue('input[type=file]',)
       .click('button[type=submit]')
       .pause(5000)
       browser.assert.visible('.alert-danger')
//End test "close webdrive"
      .end();
  }
};