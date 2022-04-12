const { assert } = require('chai')
internetPage = require('../pages/internet.page')

describe('Scroll to element', function() {
    it.skip('Should scroll to the footer', () => {
        browser.url('/')
        internetPage.pageHeader.waitforDisplayed()
        internetPage.scrollToPaigeFooter()
        assert(true, internetPage.pageFooter.isDisplayedInViewport())
    })
    it('Should scroll into view', () => {
        browser.url('/')
        internetPage.pageFooter.scrollIntoView()
        assert(true, internetPage.pageFooter.isDisplayedInViewport())
        browser.pause(5000)
    })
})