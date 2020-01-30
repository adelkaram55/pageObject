module.exports = function(browser) {
    this.emailField = 'input[type=email]';
    this.passwordField = 'input[type=password]';
    this.loginButton = 'button[type=submit]';
    this.url= 'https://admin-dev.story-file.optima.io/login';

    this.login = function() {
        browser
        .url(this.url)
        .waitForElementVisible('body')
         .setValue(this.emailField, 'adelkaram0001@gmail.com')
          .setValue(this.passwordField, 'adeladel')
           .click(this.loginButton);
    }
};