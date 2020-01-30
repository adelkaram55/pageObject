module.exports= function(broswer){
    this.cssSelector= 'xpath';

    this.userTap= function(){
        broswer
        // .pause(3000)
        .waitForElementVisible('body')
        .click(this.cssSelector,'//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[1]/a')
        .waitForElementVisible('body')
        .pause(5000)
    },
    this.contentTap=function(path){
        broswer
        .waitForElementVisible('body')
        .click(this.cssSelector,path)

    },
    this.channelsTap=function(path){
       broswer
       .waitForElementVisible('body')
       .click(this.cssSelector,path)
    },
    this.themesTap=function(path){
       broswer
       .waitForElementVisible('body')
       .click(this.cssSelector,path)
    },
    this.logoutTap=function(){
        broswer
        .waitForElementVisible('body')
        .click(this.cssSelector,'//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[5]/a')
    }
};

// ContentPath='//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[2]/a';
// channelsTap='//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[3]/a';
// themesTap='//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[4]/a';
// logoutTap='//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[5]/a';