const { assert } = require('chai');
internetPage = require('../pages/internet.page')

describe('Javascript Alerts', function() {
    it('Should get text of alert', () => {
        browser.url(`${browser.options.baseUrl}/javascript_alerts`);
        internetPage.clickJavascriptAlertButton(1)
        console.log(browser.getAlertText())
        browser.pause(3000)
        assert('I am a JS Alert', browser.getAlertText())
    })
    it('Should accept alert', () => {
        browser.acceptAlert()
        assert("You successfuly clicked an alert", internetPage.getResultText())
    })
    it('Should dismiss alert', () => {
        internetPage.clickJavascriptAlertButton(2)
        browser.dismissAlert()
        assert("You clicked cancel", internetPage.getResultText())
        browser.pause(5000)
    })
    it('Should send text to the alert', () => {
        internetPage.clickJavascriptAlertButton(3)
        browser.sendAlertText('This is some text')
        browser.acceptAlert()
        assert("You entered: This is some text", internetPage.getLiText())
        browser.pause(10000)
    })
})