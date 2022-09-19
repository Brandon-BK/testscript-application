// ENV=activeChurch npm test -- --spec ./test/table/table.test.js

const { assert } = require("chai");

describe("table data", ()=>{
    it("get table data", async ()=>{
        await browser.url('http://127.0.0.1:5501/testscript-application/test-pro/index.html');
        const elem = await $('body > div:nth-child(1) > table').$('tbody').$$('tr')[1].$$('td')[0]
        const text = await elem.getText()
        assert.equal('$37.63', text)
    })
})