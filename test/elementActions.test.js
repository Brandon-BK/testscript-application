const { assert } = require("chai");
internetPage = require("../pages/internet.page");

describe(" Test element actions", function () {
  it("Should click element", () => {
    browser.url("/");
    internetPage.clickOnLink();
    expect(browser).toHaveUrl("http://the-internet.herokuapp.com/abtest");
  });
  it("Should get Text", () => {
    browser.url("/");
    expect(internetPage.getSpecificElementText(1)).toHaveText("A/B Testing");
  });
  it("should click checkbox", () => {
    internetPage.clickLink(6);
    internetPage.clickCheckbox(1);
    expect(internetPage.checkboxes(1)).toBeSelected(true);
  });
  it("should uncheck checkbox", () => {
    internetPage.clickCheckbox(1);
    expect(internetPage.checkboxes(1)).toBeSelected(false);
  });
  it("should enter username", () => {
    browser.url(`${browser.options.baseUrl}/login`);
    internetPage.enterUserName("Brandon");
    assert("Brandon", internetPage.username.getValue());
    // expect(browser).toHaveUrl('/login')
  });
  it("should enter password", () => {
    browser.url(`${browser.options.baseUrl}/login`);
    browser.url("http://the-internet.herokuapp.com/login");
    internetPage.enterPassword("Password");
    assert("Password", internetPage.password.getValue());
  });
  it("Should clear value", () => {
    internetPage.username.click();
    internetPage.username.clearValue();
  });
});
