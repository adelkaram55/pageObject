module.exports = {
  
  'Upload image' : function (browser) {

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
//Upload image process
browser.click('xpath','//*[@id="app"]/div/div/div/div[2]/div[2]/div/div[2]/div/div/div/div/ul/li[8]/a')
.click('xpath','//*[@id="app"]/div/div/div/div[2]/div[2]/div/div[2]/div/div/div/table/tbody/tr[18]/td[5]/button[1]/span')
.setValue('input#formFieldimage', require('path').resolve(__dirname + '/' +'OriginalProfileImage.png'))
.click('button[type=submit]')
.pause(5000)
.waitForElementVisible('body')
.pause(10000)

  }
  }