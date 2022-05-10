const micheeNewBishopUserPage = require("../../pages/micheeNewBishopUser.page");


describe('My Login application', () => {
    it('should login with valid bishop credentials', async () => {
        browser.url(`${browser.options.baseUrl}`)
       await micheeNewBishopUserPage.login('TDD', 'PASSWORD');
        
    });
});