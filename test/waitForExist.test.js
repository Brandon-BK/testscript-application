const { assert } = require("chai");
internetPage = require("../pages/internet.page");

describe('Wait for Exist', function() {
    it('Should wait until the delete button exist', () => {
        browser.url(`${browser.options.baseUrl}/add_remove_elements/`);
        internetPage.clickExampleButton()
        internetPage.deleteButton(1).waitForExist()
        assert(true, internetPage.deleteButton(1).isExisting())
    })
    it.skip('Should wait for the delete button to not exist', () => {
        internetPage.clickDeleteButton(1)
        internetPage.deleteButton(1).waitForExist(500, true)
        assert(false, internetPage.deleteButton(1).isExisting())
    })
})