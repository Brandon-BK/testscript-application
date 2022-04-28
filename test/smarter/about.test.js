const smarterPage = require("../../pages/smarter.page");
const { assert } = require("chai");

decriibe("Scroll to the about section", () => {
    it("Should scroll to the about heading", () => {
        browser.url(`${browser.options.baseUrl}/`);
        smarterPage.aboutSection.waitforDisplayed();
        smarterPage.scrollToAboutSection();
        assert(true, smarterPage.aboutSection.isDisplayedInViewport());
      });
      it("Should scroll into view", () => {
        // browser.url("/");
        smarterPage.aboutSection.scrollIntoView();
        assert(true, smarterPage.aboutSection.isDisplayedInViewport());
      });
})