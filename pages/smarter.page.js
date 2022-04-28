const { default: $ } = require("webdriverio/build/commands/browser/$")

class Smarter extends Page {


    // getting the elements from the site


    // testing the navbar
    get homeLink() { return $('') }
    get servicesLink() { return $('') }
    get aboutLink() { return $('') }
    get productsLink() { return $('') }
    get contactUsLink() { return $('') }
    get bannerViewCatalogueBtn() { return $('') }
    get smoothScrollBtn() { return $('') }
    // navbar testing completed

    // services section
    get servicesSection() { return $('h3') }  //use the contains to get the text in the h3 tag



    // about section
    get aboutSection() { return $('') }  //use the contains to get the text in the h3 tag


    // products setion 
    get itemCard() { return $('') } // get the item card id or class
    get filterBtn() { return $('') } // get filter button id or class

    // testing the footer
    get pageFooter() {return $('footer') }



    

    // functions

    // navbar functions 
    clickHomeLinkBtn() {
        await this.homeLink.waitForDisplayed()
        await this.homeLink.click()
    }

    clickServicesLinkBtn() {
        await this.serviceLink.waitForDisplayed()
        await this.serviceLink.click()
    }

    clickAboutLinkBtn() {
        await this.aboutLink.waitForDisplayed()
        await this.aboutLink.click()
    }

    clickProductsLinkBtn() {
        await this.productsLink.waitForDisplayed()
        await this.productsLink.click()
    }

    clickContactUsLinkBtn() {
        await this.contactUsLink.waitForDisplayed()
        await this.contactUsLink.click()
    }



    //services section
    scrollToServicesSection() {
        await this.servicesSection.moveTo();
    }


    //about section
    scrollToAboutSection() {
        await this.aboutSection.moveTo();
    }


    // products section 
    clickitemCard() {
        await this.itemCard.waitForDisplayed()
        await this.itemCard().click()
    }


    clickFilterButton() {
        await this.filterBtn().waitForDisplayed()
        await this.filterBtn().click()
    }

    //footer functions
    scrollToPageFooter() {
        await this.pageFooter.moveTo();
    }





}

module.exports = new Smarter()