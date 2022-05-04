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
    it('Should wait for loading process to finish', async () => {
      await brandonBishopUserPage.loadingProcess()
   });
   // it('Should click Admin', async () => {
   //    await brandonBishopUserPage.clickMyAdmin()
   //    await browser.pause(2000)
   // });
   // it('Should click Users', async () => {
   //    await brandonBishopUserPage.clickUsersCard()
   //    await browser.pause(5000)
   // });
   // it('Should click dropdown', async () => {
   //    await brandonBishopUserPage.clickDropdown()
   //    await browser.pause(5000)
   //    //clickDropdownOption()
   // });
   // it('Should click dropdown option1', async () => {
   //    await brandonBishopUserPage.clickDropdownOption()
   //    await browser.pause(5000)
   //    //clickDropdownOption()
   // });
})