const smarterPage = require("../../pages/smarter.page");
const { assert } = require("chai");

decriibe("scroll to the footer", () => {
    it("Should scroll to the footer", () => {
        browser.url(`${browser.options.baseUrl}/`);
        smarterPage.pageFooter.waitforDisplayed();
        smarterPage.scrollToPageFooter();
        assert(true, smarterPage.pageFooter.isDisplayedInViewport());
      });
      it("Should scroll into view", () => {
        // browser.url("/");
        smarterPage.pageFooter.scrollIntoView();
        assert(true, smarterPage.pageFooter.isDisplayedInViewport());
      });
})