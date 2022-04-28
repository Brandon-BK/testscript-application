const smarterPage = require("../../pages/smarter.page");
// const { smarter } = require("../../urls")

describe("Open the products page", () => {
 it(" Should click the products link button on the navbar", () =>{
    browser.url(`${browser.options.baseUrl}/`);
    smarterPage.clickProductsLinkBtn()
 })
 it("Should click on filter button", () => {
     smarterPage.clickFilterButton()
 })
})