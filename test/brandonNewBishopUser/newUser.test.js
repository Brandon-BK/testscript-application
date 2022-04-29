brandonBishopUserPage = require("../../pages/brandonBishopUser.page");

describe("Login", () => {
    it('Should set value for the email input', async () => {
       await browser.url(`${browser.options.baseUrl}/`);
       await brandonBishopUserPage.enterEmail('TDD')
    });
    it('Should set value for the password input', async () => {
       await brandonBishopUserPage.enterPassword('PASSWORD')
    });
    it('Should click submit button', async () => {
       await brandonBishopUserPage.clickSubmitBtn()
    //    await browser.pause(60000)
    });
    
})