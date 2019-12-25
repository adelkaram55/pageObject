
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
       .click('button[type=submit]')
       .pause(5000)

       //Assert account created successfuly 
       .waitForElementVisible('button')
       .click('button[type=button]')
        .click('xpath', '//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[1]/a')
         .waitForElementVisible('body',10000)
       .setValue('input[type=text]','Auto user')
        .setValue('input[type=text]','\n')
        .assert.containsText('.btn-username','Auto user')
//End test "close webdrive"
      .end();
  }
//   https://storyfile-dev-development.s3.amazonaws.com/UserPersonalImage965?AWSAccessKeyId=AKIAY5Z2EN4KG2UPKWG7&Expires=1577016532&Signature=m6OJQcv6XjvCCJbsuOysNXd59Eo%3D
//   https://storyfile-dev-development.s3.amazonaws.com/UserPersonalImage965?AWSAccessKeyId=AKIAY5Z2EN4KG2UPKWG7&Expires=1577015648&Signature=t4otXEH5zY24XR7XKBQyWPrWbNM%3D
    //  https://storyfile-dev-development.s3.amazonaws.com/UserPersonalImage965?AWSAccessKeyId=AKIAY5Z2EN4KG2UPKWG7&Expires=1577016838&Signature=gA7ms1Zh1vszQh8yQcKdYrbCmLY%3D
};