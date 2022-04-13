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

    get iframeBody() { return $('#tinymce') }
    get iframe() { return $('mceu_27 #mce_0_ifr') }


    get columnA() { return $('#column-a') }
    get columnB() { return $('#column-b') }




    get columnAHeader() { return $('#column-a header') }
    get columnBHeader() { return $('#column-b header') }


    get draggable() { return $('#draggable') }
    get droppable() { return $('#drappable') }
    get droppableParagraph() { return $('#droppable p') }


    get dropdownMenu() { return $('#dropdown') }
    get dropdownMenuOption1() { return $('#dropdown option:nth-child(2)') }
    get dropdownMenuOption2() { return $('#dropdown option:nth-child(3)') }

    javascriptAlertButton(index) {return $(`.example li:nth-child(${index}) button`)}


    /**
     * click the specified javascript alert button
     * @param {String} index the index of the element
     */
    clickJavascriptAlertButton(index) {
        this.javascriptAlertButton(index).waitForDisplayed()
        this.javascriptAlertButton(index).click()
    }


    clickDropdownMenu() {
        this.dropdownMenu.waitForDisplayed()
        this.dropdownMenu.click()
    }

    clickDropdownMenuOption1() {
        this.dropdownMenuOption1.waitForDisplayed()
        this.dropdownMenuOption1.click()
    }

    clickDropdownMenuOption2() {
        this.dropdownMenuOption2.waitForDisplayed()
        this.dropdownMenuOption2.click()
    }


    dragDraggableToDroppable() {
        this.draggable.waitForDisplayed()
        this.draggable.dragAndDrop(this.droppable)
    }

    /**
    * drag column A to column B
    */

    dragColumnAToColumnB() {
        this.columnA.waitForDisplayed()
        this.columnA.dragAndDrop(this.columnB)
    }



    /**
    * @param {String} text the text to be entered
    */
    sendTextToBody(text) {
        this.iframeBody.waitForDisplayed()
        this.iframeBody.clearValue()
        this.iframeBody.click()
        this.iframeBody.keys(text)
    }



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