const smarterPage = require("../../pages/smarter.page");


describe("Interacting with navbar links and Banner buttons", () => {
    it("clicking the home link button", () => {
        browser.url(`${browser.options.baseUrl}/`);
        smarterPage.clickHomeLinkBtn()
    })
    it("clicking the services link button", () => {
        smarterPage.clickServicesLinkBtn()
    })
    it("clicking the about link button", () => {
        smarterPage.clickAboutLinkBtn()
    })
    it("clicking the products link button", () => {
        smarterPage.clickProductsLinkBtn()
    })
    it("clicking the contact us link button", () => {
        smarterPage.clickContactUsLinkBtn()
    })
})