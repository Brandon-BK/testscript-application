const smarterPage = require("../../pages/smarter.page");
const { assert } = require("chai");

decriibe("Scroll to the services section", () => {
    it("Should scroll to the services heading", () => {
        browser.url(`${browser.options.baseUrl}/`);
        smarterPage.servicesSection.waitforDisplayed();
        smarterPage.scrollToServicesSection();
        assert(true, smarterPage.servicesSection.isDisplayedInViewport());
      });
      it("Should scroll into view", () => {
        // browser.url("/");
        smarterPage.servicesSection.scrollIntoView();
        assert(true, smarterPage.servicesSection.isDisplayedInViewport());
      });
})