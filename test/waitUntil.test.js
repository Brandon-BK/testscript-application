const { assert } = require("chai")
internetPage = require("../pages/internet.page")

describe('WaitUntil', function() {
    it('Should wait until the button text changes to Add', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        internetPage.clickPageButton()
        browser.waitUntil(() => {
            return internetPage.pageButton.getText() === 'Add'
        }, 6000, 'Expect button text to change')
        assert('Add', internetPage.pageButton.getText())
    })

    it('Should wait until the button text changes to Remove', () => {
        internetPage.clickPageButton()
        browser.waitUntil(() => {
            return internetPage.pageButton.getText() === 'Remove'
        }, 6000, 'Expect button text to change')
        assert('Remove', internetPage.pageButton.getText())
    })
})