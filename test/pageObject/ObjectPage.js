// module.exports= function(browser){

// this.login =function(){
//     browser
//     .url('https://admin-dev.story-file.optima.io/login')
//        .waitForElementVisible('body')
//         .setValue('input[type=email]', 'adelkaram0001@gmail.com')
//          .setValue('input[type=password]', 'adeladel')
//           .click('button[type=submit]')

//           return browser ;
//     };
// this.navigateToUserScreen = function(){
//     browser
//         browser.waitForElementVisible('button')
//         //   .click('button[type=button]')
//         //   .pause(5000)
//            .click('xpath', '//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[1]/a')
//             .waitForElementVisible('body',10000)
            
//              return browser;

// };
// this.createUserButton = function(){
//     browser
//     .waitForElementVisible('button')
//     .element('css selector','.btn-info')
//     .click('css selector','.btn-info');

//     return browser;
// };
// this.cretaeUserFields = function(){
    
//         browser
//           .waitForElementVisible('body',10000)
//            .waitForElementVisible('input')
//             .setValue('input[name=displayName]', 'Auto user')
//              .setValue('input[name=username]', 'Auto user')
//             .setValue('input[name=email]', 'adelkaram0002@gmail.com')
//            .setValue('input[name=password]', 'adeladel')
//           .click('button[type=submit]')
//           .pause(5000)

//           return browser;
   
// };
// this.assertUserCreate = function(){
//     browser
//     .waitForElementVisible('button')
//      .click('button[type=button]')
//       .click('xpath', '//*[@id="app"]/div/div/div/div[2]/div[1]/div/div/div/nav/div/div/div[2]/ul/li[1]/a')
//        .waitForElementVisible('body',10000)
//       .setValue('input[type=text]','Auto user')
//      .setValue('input[type=text]','\n')
//     .assert.containsText('.btn-username','Auto user')

//     return browser
// };
//  return this;
// };