var bulkUploadFile = require ('./pageObject/storypage');
var loginPage = require ('./pageObject/loginPage');
var navigator = require ('./pageObject/navigatorPage');
var createuserpage = require ('./pageObject/createuserpage');
// var assertion= require ('./assertionpage');

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
Navigatetousertap.userTap('//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[1]/a');
},
//search by user name 

'search by username':function(browser){
  const Createuserpage= new createuserpage(browser);
  Createuserpage.searchField('rose','\n');
},
//open story page 

'select story name':function(browser){
  const openStory= new createuserpage(browser);
  openStory.usernameButton('.btn-username');

},

   //Bulk import videos
    'bulk import':function(browser){
        const BulkUploadFile= new bulkUploadFile(browser);
        BulkUploadFile.importBVideo('//*[@id="app"]/div/div/div/div[1]/div/div[2]/p[3]/button','//*[@id="app"]/div/div/div/div[2]/div[2]/div/div[2]/div/div/div/div/div[1]','Auto script','\n','#formFieldzip','input[type=file]','Archive(4).zip')
    }
};