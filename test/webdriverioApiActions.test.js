internetPage = require("../pages/internet.page");
const { assert } = require("chai");

describe("WebdriverIO API Actions", function () {
  it("Should hover on a figure 1", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    internetPage.hoverOnFigure(3);
    assert("name: user1", internetPage.getHoverDetailsText(3));
  });
  it("Should hover on a figure 2", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    internetPage.hoverOnFigure(4);
    assert("name: user2", internetPage.getHoverDetailsText(4));
  });
  it("Should hover on a figure 3", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    internetPage.hoverOnFigure(5);
    assert("name: user3", internetPage.getHoverDetailsText(5));
  });
  it("Should send keyboard value", () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    internetPage.clickTarget();
    internetPage.sendKeysToTarget("Backspace");
    assert("You entered: BACK_SPACE", internetPage.getResultText());
    browser.pause(3000);
  });
  it("Should send keyboard value", () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    internetPage.clickTarget();
    internetPage.sendKeysToTarget("Tab");
    assert("You entered: TAB", internetPage.getResultText());
    browser.pause(3000);
  });
  it("Should send keyboard value", () => {
    browser.url(`${browser.options.baseUrl}/key_presses?`);
    internetPage.clickTarget();
    internetPage.sendKeysToTarget("Shift");
    assert("You entered: SHIFT", internetPage.getResultText());
    browser.pause(3000);
  });
});