const { assert } = require("chai");
internetPage = require("../pages/internet.page");

describe("Drag and Drop", function () {
  it.skip("Should drag columnA to columnB", () => {
    browser.url(`${browser.options.baseUrl}/drag_and_drop`);
    internetPage.dragColumnAToColumnB();
    assert("A", internetPage.columnBHeader.getText());
  });
  it("Should drag and drop", () => {
    browser.url("https://crossbrowsertesting.github.io/drag-and-drop.html");
    internetPage.dragDraggableToDroppable();
    assert("Dropped!", internetPage.droppableParagraph.getText());
  });
});
