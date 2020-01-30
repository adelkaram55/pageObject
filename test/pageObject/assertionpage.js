var createuserpage = require ('./createuserpage');
module.exports=function(browser){

    this.assertcreateuser=function(storyname){
        const Createuserpage= new createuserpage(browser);
        Createuserpage.searchField('username','\n');
        browser
      
       .assert.containsText('.btn-username',storyname)
    }
};



























  // .waitForElementVisible('button')
        // .click('button[type=button]')
        //  .click(this.userbutton, xpath)
        //   .waitForElementVisible('body',10000)
        //  .setValue(this.inputuser,username)
        // .setValue(this.searchbyusername,enterkey)



            //  this.userbutton='xpath';
    //  this.inputuser='input[type=text]';
    //  this.searchbyusername='input[type=text]';


    //  this.assert='';