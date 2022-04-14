const { assert } = require("chai");
internetPage = require("../pages/internet.page")

describe('Wait for Enabled', function() {
    it('Should wait for the inputField to be enabled', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled(4000)
        assert(true, internetPage.inputEnabledField.isEnabled())
        browser.debug()
    })

    // it('Should wait for the inputField to be disabled', () => {
    //     internetPage.clickEnableButton()
    //     internetPage.inputEnabledField.waitForEnabled(4000, true)
    //     assert(false, internetPage.inputEnabledField.isEnabled())
    // })
    
})