const { assert } = require("chai");
internetPage = require("../pages/internet.page");

describe("Switch window", function () {
  it("Should switch to the next window", () => {
    browser.url(`${browser.options.baseUrl}/windows/new`);
    internetPage.clickHereLink();
    browser.switchWindow(`${browser.options.baseUrl}/windows/new`);
    assert(true, internetPage.h3Header.isExisting());
    assert(true, internetPage.h3Header.isDisplayed());
    assert("New Window", internetPage.h3Header.getText());
  });
});
