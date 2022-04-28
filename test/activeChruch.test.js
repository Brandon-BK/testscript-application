const activeChurchPage = require("../pages/activeChurch.page")

// activeChurchPage = require("../pages/internet.page")


describe('click the give your life btn', () => {
    it('Should wait until the button', () => {
        browser.url(`${browser.options.baseUrl}`)
        activeChurchPage.clickGiveYourLifeBtn()
        
    })

    // it('Should wait until the button text changes to Remove', () => {
    //     internetPage.clickPageButton()
    //     browser.waitUntil(() => {
    //         return internetPage.pageButton.getText() === 'Remove'
    //     }, 6000, 'Expect button text to change')
    //     assert('Remove', internetPage.pageButton.getText())
    // })
})