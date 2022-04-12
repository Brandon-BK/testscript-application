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


    get username() {return $('#username')}
    get password() {return $('#password')}


    figures(index) { return $(`.example .figure:nth-child(${index}) img`)}
    figureDetails(index) {return $(`.example .figure:nth-child(${index}) .figcaption h5`)}



    get target() { return $('.example #target') }
    get result() { return $('#result') }

    get hereLink() { return $('.example a') }


    clickHereLink() {
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }

    /**
     * scrolls to paige footer
    */
    scrollToPaigeFooter() {
        this.pageFooter.moveTo()
    }


    /**
     * clicks the target input field
     */
    clickTarget() {
        this.target.waitForDisplayed()
        this.target.click()
    }

    /**
     * send keyboard keys to target
     * @param {String} text the keyboard key to enter
     */

    sendKeysToTarget(text) {
        this.target.waitForDisplayed()
        this.target.keys(text)
    }

    /**
     * return the text of the return element
     */
    getResultText() {
        this.result.waitForDisplayed()
        return this.result.getText()
    }


    /**
     * Returns the text of the figure details
     * @param {Number} index the specific index of the image
     */
    getHoverDetailsText(index) {
        this.figureDetails(index).waitForDisplayed()
        return this.figureDetails(index).getText()
    }

    /**
     * Hover over the specified image
     * @param {Number} index the specific index of the image
     */
    hoverOnFigure(index) {
        this.figures(index).waitForDisplayed()
        this.figures(index).moveTo(1,1)
    }

    /**
     * Enter the username into the field
     * @param {String} text unser name to be entered
     */
    enterUserName(text) {
        this.username.waitForDisplayed()
        this.username.setValue(text)
    }


    /**
     * Enter the username into the field
     * @param {String} text unser name to be entered
     */
     enterPassword(text) {
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }

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