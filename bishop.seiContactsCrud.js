// ENV=bishopAlpha npm test -- --spec ./rapidtrade/bishop.sei/bishop.seiContactsCrud.js


const SeiContactsCrud = require("../../pages/seiPages/seiContactsCrud.page")
const login = require("../../pages/login.page")
const data = require('../../data/login.data')
const customerData = require('../../data/customers.data')

describe("Login Page", () => {
    it("Should enter username and password", async () => {
        await browser.url(`${browser.options.baseUrl}#/sync`)
        await browser.refresh();
        await login.enterUsername(data.TDDUser)
        assert.equal(await login.username.getValue(), data.TDDUser)
        await login.enterPassword(data.TDDPassword)
        assert.equal(await login.password.getValue(), data.TDDPassword)
    })
    it("Should successfully log in user with correct name and password", async () => {
        await login.clickOnSubmitBtn()
        await login.loadingBarDisappear()
        assert.equal('My Profile', await login.mainMenu.getText())
    })
})

describe('Creating customer contacts for TDD Customer 1', () => {
    it('Should click on My customers tab', async () => {
        await SeiContactsCrud.myCustomers()
    })
    it('Should search for the customer', async () => {
        await SeiContactsCrud.searchCustomer(customerData.sei.bishop.tddCustomer1)
    })
    it('Should Create New Contact Details by clicking on the contact button', async () => {
        await SeiContactsCrud.creatingContacts()
    })
    it('Should Create contact 1 and check if it has been created', async () => {
        await SeiContactsCrud.creatingContactOne()
        await SeiContactsCrud.contactSavedOkay.waitForDisplayed({reverse: true});
    })
    it('Should Create contact 2 and check if it has been created', async () => {
        await SeiContactsCrud.creatingContactTwo()
        await SeiContactsCrud.contactSavedOkay.waitForDisplayed({reverse: true});
    })
    it('Should Create contact 3 and check if it has been created', async () => {
        await SeiContactsCrud.creatingContactThree()
        await SeiContactsCrud.contactSavedOkay.waitForDisplayed({reverse: true});
    })
    it('Should log out the user', async () => {
        await SeiContactsCrud.logOut()
    })
})

describe('Editing customer contacts for TDD Customer 1', () => {
    it("Should enter username and password", async () => {
        await login.enterUsername(data.TDDUser)
        assert.equal(await login.username.getValue(), data.TDDUser)
        await login.enterPassword(data.TDDPassword)
        assert.equal(await login.password.getValue(), data.TDDPassword)
    })
    it("Should successfully log in user with correct name and password", async () => {
        await login.clickOnSubmitBtn()
        await login.loadingBarDisappear()
        assert.equal('My Profile', await login.mainMenu.getText())
    })

    it('Should click on My customers tab', async () => {
        await SeiContactsCrud.myCustomers()
    })
    it('Should search for the customer', async () => {
        await SeiContactsCrud.searchCustomer(customerData.sei.bishop.tddCustomer1)
    })
    it('Should click on the contacts button', async () => {
        await SeiContactsCrud.creatingContacts()
    })
    it('Should edit contact one by adding the word EDIT then check if it has been edited', async () => {
        await SeiContactsCrud.editContactOne()
    })
    it('Should edit contact two by adding the word EDIT then check if it has been edited', async () => {
        await SeiContactsCrud.editContactTwo()
    })
    it('Should edit contact three by adding the word EDIT then check if it has been edited', async () => {
        await SeiContactsCrud.editContactThree()
    })
    it('Should log out the user', async () => {
        await SeiContactsCrud.logOut()
    })

})

describe.skip('Deleting customer contacts for TDD Customer 1', () => {
    it("Should enter username and password", async () => {
        await login.enterUsername(data.TDDUser)
        assert.equal(await login.username.getValue(), data.TDDUser)
        await login.enterPassword(data.TDDPassword)
        assert.equal(await login.password.getValue(), data.TDDPassword)
    })
    it("Should successfully log in user with correct name and password", async () => {
        await login.clickOnSubmitBtn()
        await login.loadingBarDisappear()
        assert.equal('My Profile', await login.mainMenu.getText())
    })
    it('Should click on My customers tab', async () => {
        await SeiContactsCrud.myCustomers()
    })
    it('Should search for the customer', async () => {
        await SeiContactsCrud.searchCustomer(customerData.sei.bishop.tddCustomer1)
    })
    it('Should click on the contacts button', async () => {
        await SeiContactsCrud.creatingContacts()
    })
    it('Should check that all three contacts have been edited', async () => {
        assert(true, SeiContactsCrud.contactOne.isDisplayed())
        assert(true, SeiContactsCrud.contactTwo.isDisplayed())
        assert(true, SeiContactsCrud.contactThree.isDisplayed())
    })
    it('Should delete contact one', async () => {
        await SeiContactsCrud.deleteContactOne()
        await SeiContactsCrud.contactDeletedMessage.waitForDisplayed({reverse: true})
    })
    it('Should delete contact three', async () => {
        await SeiContactsCrud.deleteContactThree()
        await SeiContactsCrud.contactDeletedMessage.waitForDisplayed({reverse: true})
    })
})