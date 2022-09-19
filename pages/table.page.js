const { default: $ } = require("webdriverio/build/commands/browser/$")

class Table extends Page {

    get homeLink() { return $('.total-panel') }
    get servicesLink() { return $('a.#services') }
    get aboutLink() { return $('') }

    async clickHomeLinkBtn() {
        await this.homeLink.waitForDisplayed()
        await this.homeLink.click()
    }

}

module.exports = new Table()