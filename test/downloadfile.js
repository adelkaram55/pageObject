var loginPage = require ('./pageObject/loginPage');
var navigator = require ('./pageObject/navigatorPage');
var createuserpage = require ('./pageObject/createuserpage');
var downloadhistory = require ('./pageObject/storypage');

module.exports={
  
  //Go To login page

  '@tags':['login'],
    before:function(browser){
      const LoginPage = new loginPage(browser);
      LoginPage.login('adelkaram0001@gmail.com', 'adeladel');
  },
  //Navigate To User Screen
        
  '@tags': ['navigat to user screen'],
  'navigat to user screen': function(browser){
      const Navigatetousertap = new navigator(browser);
  Navigatetousertap.userTap();
  },
  //search by user name 

  'search by username':function(browser){
    const Createuserpage = new createuserpage(browser);
    Createuserpage.searchField('rose','\n');
  },
  //open story page 

  'select story name':function(browser){
    const openStory = new createuserpage(browser);
    openStory.usernameButton();

  },

  'download log history': function (browser){
   const Downloadhistory = new downloadhistory(browser);
   Downloadhistory.downloadLogHistory();  
  
  },
  'download file' : function (browser){
      browser
        
      .end();
    }
};













// const papa = require('papaparse');
// const fs = require('fs');

// ..
// ..
// fs.stat(localFilePath, function(err, stats){
//     if (!err) {    
//         var fileContents = fs.readFileSync(localFilePath, 'utf8');
//         papa.parse(fileContents,{
//             complete:function(results){
//                 city = results.data[1][1];
//                 state = results.data[1][2];
//                 done()
//             }
//         });
//     }





//old code:  
// .setValue('input[type=text]','adel')
        // .waitForElementVisible('button')
        // .pause(3000)
        //  .click('a[href*="/users/1/"]')
       //Navigate to user screen
    //    .click('xpath', '//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[1]/a')
    //     .waitForElementVisible('button')
    //     .waitForElementVisible('input[name=search]')
    //    .setValue('input[type=text]', 'rose ');
    //     browser.setValue('input[type=text]', '\n')
        
        // browser.click('.btn-username')
        // .click('.btn-warning')
        // .setValue('input[type=date]','01122019')
        // .setValue('#formFieldendDate','23122019')
        // .pause(2000)
        // .click('xpath','/html/body/div[2]/div[2]/div/div/div[2]/div/div/button')
        // .pause(5000)