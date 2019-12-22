
module.exports = {
  'Demo test Google': function (client) {
    client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'Fuck you Adel !!!')
        .setValue('input[type=text]', '\n')
        .waitForElementVisible('.g div div div a h3', 2000)
        .getText('.g div div div a h3',(result) => {
            client.assert.equal(result.value,"Adele - \"Fuck Off\" - Antwerp - YouTube").end()
        })
  }
}

