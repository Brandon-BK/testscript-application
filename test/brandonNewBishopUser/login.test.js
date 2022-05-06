// ENV=bishop npm test -- --spec ./test/brandonNewBishopUser/login.test.js
const brandonBishopUserPage = require("../../pages/brandonBishopUser.page");


describe("Login", () => {
   it('Should set value for the email input', async () => {
       await browser.url(`${browser.options.baseUrl}/`);
       await browser.refresh();
       await brandonBishopUserPage.enterEmail('TDD')
   });
   it('Should set value for the password input', async () => {
       await brandonBishopUserPage.enterPassword('PASSWORD')
   });
   it('Should click submit button', async () => {
       await brandonBishopUserPage.clickSubmitBtn()
   });
   it('Should wait for loading process to finish', async () => {
      await brandonBishopUserPage.loadingProcess()
      // await expect(brandonBishopUserPage.profile).toHaveTextContaining('My Profile')
   });
   it('Should click Admin', async () => {
        await brandonBishopUserPage.clickMyAdmin()
   });
   it('Should click Users', async () => {
        await brandonBishopUserPage.clickUsersCard()
   });
   it('Should click dropdown', async () => {
        await brandonBishopUserPage.clickDropdown()
   });
   it('Should click dropdown option1', async () => {
        await brandonBishopUserPage.clickDropdownOption()
   });
   it('Should set value for the userID input', async () => {
      await brandonBishopUserPage.enterUserID('TDDADMIN')
   });
   it('Should set value for the userName input', async () => {
      await brandonBishopUserPage.enterUserName('TTDD USER')
   });
   it('Should set value for the userPassword input', async () => {
      await brandonBishopUserPage.enterUserPassword('PASSWORD')
   });
   it('Should set value for the userNumber input', async () => {
      await brandonBishopUserPage.enterUserNumber('0821234567')
   });
   it('Should set value for the userEmail input', async () => {
      await brandonBishopUserPage.enterUserEmail('tdd1@rapidtrade.biz')
   });
   it('Should set value for the userRole input', async () => {
      await brandonBishopUserPage.enterUserRole('CC,REPORTS,settings')
   });
   it('Should set value for the accountID input', async () => {
      await brandonBishopUserPage.enterUserAccountID('01')
   });
  it("Should click admin checkbox", async () => {
     await brandonBishopUserPage.clickAdminCheckbox()
  })
  it("Should click all customers checkbox", async () => {
     await brandonBishopUserPage.clickCustomersCheckbox()
  })
  it("Should click the save button", async () => {
   await brandonBishopUserPage.clickSaveBtn()
   })
   it("Should click the back button", async () => {
      await brandonBishopUserPage.clickBackBtn()
   })
   it('Should find user', async () => {
      await brandonBishopUserPage.searchUser('TDDADMIN')
  });
  it("Should click user", async () => {
   await brandonBishopUserPage.clickNewUser()
  })
  it("Should click delete", async () => {
   await brandonBishopUserPage.clickDelete()
  })
  it("Should click yes on pop up", async () => {
   await brandonBishopUserPage.clickYes()
  })
   
})