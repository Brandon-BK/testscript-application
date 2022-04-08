class Internet {
    get pageHeader() { return $("h1.headings") }
    get subHeading() { return $("h2") }
    get h3Header() {return $('h3')}
    get pageFooter() { return $("#page-footer") }
    get parent() { return $("ul") }
    get childElements () {return this.parent.$$('li') }
    specificChildElement(index) { return this.parent.$(`li:nth-chlid(${index})`)}

    get firstLink() { return $('ul li:nth-child(1) a')}
    link(index) {return $(`ul li:nth-child(${index}) a`)}

    checkboxes(index) {return $(`#checkboxes input:nth-child(${index})`)}


    /**
     * Clicks on the links based on the index provided
     * @param {Number} index the index of the element
     */
    clickLink(index) {
        this.link(index).waitForDisplayed()
        this.link(index).click()
    }

    clickCheckbox(index) {
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }

    getSpecificElementText(index) {
        this.specificChildElement(index).waitForDisplayed()
     return this.specificChildElement(index).getText()
    }

    clickOnLink() {
        if(this.firstLink.isDisplayed() === true) {
            this.firstLink.click()
        }
        this.h3Header.waitForDisplayed()
    }
}

module.exports = new Internet()