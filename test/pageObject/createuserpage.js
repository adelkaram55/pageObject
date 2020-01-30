module.exports= function(browser){
    this.displayname='input[name=displayName]';
    this.username= 'input[name=username]';
    this.email= 'input[name=email]';
    this.password= 'input[name=password]';
    this.submit= 'button[type=submit]';
    this.search='input[type=text]';
    
    this.cssSelector = 'css selector';
    this.xpath='xpath';
    

    this.createuserpage= function(email){
        browser
        .waitForElementVisible('body',10000)
         .waitForElementVisible('input')
          .setValue(this.displayname, 'displayname')
           .setValue(this.username, 'username')
          .setValue(this.email, email)
         .setValue(this.password, 'adeladel')
        .click(this.submit)
        
        

    },
    this.clickcreatebutton = function(){
        browser
        .waitForElementVisible('button')
        .click(this.cssSelector, '.btn-info')
        

    },
    this.searchField=function(searchtext,Key){
        browser
        .pause(5000)
        .waitForElementVisible('button')
        .click(this.search)
        .setValue(this.search,searchtext)
        .setValue(this.search,Key)
        .waitForElementVisible('body')

    },
    this.editButton=function(classname){
        browser
        .click(this.cssSelector,classname)
    },
    this.deleteButton=function(){
        browser
        .click(this.cssSelector,'.btn-delete')
    },
    this.deletePopup=function(){
        browser
        .click(this.xpath,'/html/body/div[2]/div[2]/div/div/div[3]/button[2]')
    },
    this.disableButton=function(classname){
        browser
        .click(this.cssSelector,classname)
    },
    this.enableButton=function(classname){
        browser
        .click(this.cssSelector,classname)
    },
    this.privatemodeButton=function(classname){
        browser
        .click(this.cssSelector,classname)
    },
    this.publicmodeButton=function(classname){
        browser
        .click(this.cssSelector,classname)
    },
    this.usernameButton=function(){
        browser
        .click(this.cssSelector,'.btn-username')
    }

};