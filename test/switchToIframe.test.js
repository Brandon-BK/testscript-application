const { assert } = require("chai");
internetPage = require("../pages/internet.page");

describe("Switch to iframe", function () {
  it("Should switch to iframe", () => {
    browser.url(`${browser.options.baseUrl}/iframe`);
    internetPage.h3Header.waitForDisplayed();
    internetPage.iframe.waitForDisplayed();
    browser.switchToFrame(internetPage.frame);
    internetPage.sendTextToBody("Ihis is the text in the iframe body");
    assert(
      "Ihis is the text in the iframe body",
      internetPage.iframeBody.getText()
    );
    browser.pause(3000);
  });
});
