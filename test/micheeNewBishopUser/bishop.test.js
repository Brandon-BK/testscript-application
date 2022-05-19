// ENV=bishop npm test -- --spec ./test/micheeNewBishopUser/bishop.test.js

const micheeNewBishopUserPage = require("../../pages/micheeNewBishopUser.page");


describe('should enter the email', () => {
    it('should login with valid bishop credentials', async () => {
        browser.url(`${browser.options.baseUrl}`)
       await micheeNewBishopUserPage.enterEmail('TDD');
       await micheeNewBishopUserPage.enterPassword('PASSWORD');
       await micheeNewBishopUserPage.clickSubmitBtn();
       
        
    });

    it('Should wait for loading process to finish, and then create a new user', async () => {
        await micheeNewBishopUserPage.loadingState()
        await expect(micheeNewBishopUserPage.myProfile).toHaveTextContaining('My Profile')
        await micheeNewBishopUserPage.adminClick()
        await micheeNewBishopUserPage.userClick()
        await micheeNewBishopUserPage.dropdownClick()
     });

     it('Filling in the New User form', async ()=>{
        await micheeNewBishopUserPage.fillNewUserForm("TDDADMIN","TTDD USER","PASSWORD","0821234567","tdd1@rapidtrade.biz","CC,REPORTS,settings","01")
        await micheeNewBishopUserPage.sucessAlert.waitForDisplayed()
        await expect(micheeNewBishopUserPage.sucessAlert).toBeDisplayed();
     });

     it('search for the New User ', async ()=>{
      await micheeNewBishopUserPage.searchForTheNewUser("TDDADMIN")
      await expect(micheeNewBishopUserPage.deletedMessage).toBeDisplayed()
      await expect(micheeNewBishopUserPage.warning).toHaveTextContaining('There are no users that matching your search term.')
     })
});