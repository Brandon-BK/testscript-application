// ENV=bishop npm test -- --spec ./test/micheeNewBishopUser/bishop.test.js
const { assert } = require("chai");
const newlogindata = require("../../data/newlogindata");
const micheeNewBishopUserPage = require("../../pages/micheeNewBishopUser.page");
const formData = require("../../data/formData");

describe('should enter the email', () => {
    it('should login with valid bishop credentials', async () => {
        browser.url(`${browser.options.baseUrl}`)
       await micheeNewBishopUserPage.enterEmail(newlogindata.email);
       await micheeNewBishopUserPage.enterPassword(newlogindata.password);
       assert(newlogindata.email, micheeNewBishopUserPage.email.getValue());
       assert(newlogindata.password, micheeNewBishopUserPage.password.getValue());
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
        await micheeNewBishopUserPage.fillNewUserForm(formData.id,formData.name,formData.password,formData.number,formData.email,formData.role,formData.accountid)
        assert(formData.id, micheeNewBishopUserPage.userID.getValue());
        assert(formData.name, micheeNewBishopUserPage.userName.getValue());
        assert(formData.password, micheeNewBishopUserPage.userPassword.getValue());
        assert(formData.number, micheeNewBishopUserPage.userNumber.getValue());
        assert(formData.email, micheeNewBishopUserPage.userEmail.getValue());
        assert(formData.role, micheeNewBishopUserPage.userRole.getValue());
        assert(formData.accountid, micheeNewBishopUserPage.accountID.getValue());
        await expect(micheeNewBishopUserPage.sucessAlert).toBeDisplayed();
     });

     it('search for the New User ', async ()=>{
      await micheeNewBishopUserPage.searchForTheNewUser(formData.id)
      assert(formData.id, micheeNewBishopUserPage.search.getValue());
      await expect(micheeNewBishopUserPage.deleteAlert).toBeDisplayed()
      await expect(micheeNewBishopUserPage.warning).toHaveTextContaining('There are no users that matching your search term.')
     })
});