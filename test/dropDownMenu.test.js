const { assert } = require("chai");
internetPage = require("../pages/internet.page");

describe("Dropdown Menu", function () {
  it("Should select option 1", () => {
    browser.url(`${browser.options.baseUrl}/dropdown`);
    internetPage.clickDropdownMenu();
    internetPage.clickDropdownMenuOption1();
    assert(true, internetPage.dropdownMenuOption1.isSelected());
  });
  it("Should select option 2", () => {
    internetPage.clickDropdownMenu();
    internetPage.clickDropdownMenuOption2();
    assert(true, internetPage.dropdownMenuOption2.isSelected());
  });
});
