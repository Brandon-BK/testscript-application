//ENV=bishop npm test -- --spec ./test/activeChurch/activeChurch.test.js

const activeChurchPage = require("../../pages/activeChurch.page")


describe('OPen up give my life form', async () => {
    it('Should click give your life button, enter a name and email', () => {
       await browser.url(`${browser.options.baseUrl}`)
       await browser.refresh();
       await activeChurchPage.clickGiveYourLifeButton()
       await activeChurchPage.setNameValue('Jadon')
       await activeChurchPage.setEmailValue("sancho@gmail.com")
    })
})