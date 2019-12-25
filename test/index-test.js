
module.exports = {
  
  'Private/public mode' : function (client) {

    client
      .url('https://admin-dev.story-file.optima.io/login')
       .waitForElementVisible('body')
         .setValue('input[type=email]', 'adelkaram0001@gmail.com')
          .setValue('input[type=password]', 'adeladel')
            .click('button[type=submit]')
      //search by script name 
      .setValue('input[type=text]','adel')
       .waitForElementVisible('button')
        .click('button[type=button]')
      //Navigate to user screen
      .click('xpath', '//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[1]/a')
       .waitForElementVisible('input[name=search]')
      .setValue('input[type=text]', 'adelBulk ');
       client.setValue('input[type=text]', '\n')
       .pause(5000)
      //Activate private mode & public mode

      .element('css selector', '.btn-private')
       .waitForElementVisible('.btn-private')
        .click('.btn-private')
        .assert.containsText('.btn-private','Make Public')
        .pause(5000)
      
      .end();
      
    }
  };
  
      // .pause(5000)
     //.click('.btn-private')
    // .assert.titleContains('User')
   // .assert.visible('input[type=search]')
  // .assert.visible('button[type=submit]')