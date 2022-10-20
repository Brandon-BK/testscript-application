class SeiContactsCrud {

  get MyCustomersTab()                        { return $('=My Customers')}
  get searchInput()                           { return $("#searchBox")}
  get searchBtn()                             { return $("button#searchBtn")}
  get customerName()                          { return $("//div[contains(text(), 'TDD Customer 1')]")}
  get contactsButton()                        { return $("//a[contains(text(), 'Contacts')]") }
  get createContactButton()                   { return $("span#righttext")}
  get nameInput()                             { return $('input[ng-required="fields[2].Mandatory"]')}
  get positionInput()                         { return $('input[ng-required="fields[3].Mandatory"]')}
  get telInput()                              { return $('input[ng-required="fields[4].Mandatory"]')}
  get mobileInput()                           { return $('input[ng-required="fields[5].Mandatory"]')}
  get emailInput()                            { return $('input[ng-required="fields[6].Mandatory"]')}
  get saveButton()                            { return $('//span[contains(text(), "Save")]')}
  get contactSavedOkay()                      { return $("//span[contains(text(), 'Contact has been saved OK')]")}
  get contactOne()                            { return $('document.querySelector("#page-content-wrapper > div > div > div > div > div.infScrollContainer > ul > a:nth-child(226) > div > div.col-xs-5.col-sm-4.col-md-2.truncateText.ng-binding")')}
  get contactTwo()                            { return $('a[href="#/company/contact/TDD1/177"]')}
  get contactThree()                          { return $('a[href="#/company/contact/TDD1/178"]')}
  get MyProfileTab()                           { return $('=My Profile')}
  get logoutButton()                          { return $("//a[contains(text(), 'Logout')]")}
  get yesLogMeOutButton()                     { return $("//button[contains(text(), 'Yes, log me out')]")}
  get contactDeletedMessage()                 { return $("//span[contains(text(), 'Contact has been deleted')]")}
  get deleteButton()                          { return $('//button[contains(text(), "Delete")]')}





  async myCustomers() {
      await this.MyCustomersTab.waitForDisplayed()
      await this.MyCustomersTab.click()
  }
  
  async searchCustomer(text) {
      await this.searchInput.waitForDisplayed()
      await this.searchInput.setValue(text)
      await this.searchBtn.waitForDisplayed()
      await this.searchBtn.click()
      await this.customerName.waitForDisplayed()
      await this.customerName.click()
  }


  async creatingContacts() {
      await this.contactsButton.waitForDisplayed()
      await this.contactsButton.click()
  }
  
  async creatingContactOne() {
      await this.createContactButton.waitForDisplayed()
      await this.createContactButton.click()

      await this.nameInput.waitForDisplayed()
      await this.nameInput.setValue('NAME 1 &/"')

      await this.positionInput.waitForDisplayed()
      await this.positionInput.setValue('POSITION 1 &/"')

      await this.telInput.waitForDisplayed()
      await this.telInput.setValue('TELL 1 &/"')

      await this.mobileInput.waitForDisplayed()
      await this.mobileInput.setValue('MOBILE 1 &/"')

      await this.emailInput.waitForDisplayed()
      await this.emailInput.setValue('EMAIL 1 &/"')

      await this.saveButton.waitForDisplayed()
      await this.saveButton.click()
  }


  async creatingContactTwo() {
      await this.createContactButton.waitForDisplayed()
      await this.createContactButton.click()

      await this.nameInput.waitForDisplayed()
      await this.nameInput.setValue('NAME 2 &/"')

      await this.positionInput.waitForDisplayed()
      await this.positionInput.setValue('POSITION 2 &/"')

      await this.telInput.waitForDisplayed()
      await this.telInput.setValue('TELL 2 &/"')

      await this.mobileInput.waitForDisplayed()
      await this.mobileInput.setValue('MOBILE 1 &/"')

      await this.emailInput.waitForDisplayed()
      await this.emailInput.setValue('EMAIL 1 &/"')

      await this.saveButton.waitForDisplayed()
      await this.saveButton.click()
  }



  async creatingContactThree() {
      await this.createContactButton.waitForDisplayed()
      await this.createContactButton.click()

      await this.nameInput.waitForDisplayed()
      await this.nameInput.setValue('NAME 3 &/"')

      await this.positionInput.waitForDisplayed()
      await this.positionInput.setValue('POSITION 3 &/"')

      await this.telInput.waitForDisplayed()
      await this.telInput.setValue('TELL 3 &/"')

      await this.mobileInput.waitForDisplayed()
      await this.mobileInput.setValue('MOBILE 1 &/"')

      await this.emailInput.waitForDisplayed()
      await this.emailInput.setValue('EMAIL 1 &/"')

      await this.saveButton.waitForDisplayed()
      await this.saveButton.click()
  }

  async logOut() {
      await this.MyProfileTab.waitForDisplayed()
      await this.MyProfileTab.click()
      await this.logoutButton.waitForDisplayed()
      await this.logoutButton.click()
      await browser.pause(2000)
      await this.yesLogMeOutButton.waitForDisplayed()
      await this.yesLogMeOutButton.click()
  }
  

  async editContactOne() {
      await this.contactOne.waitForDisplayed()
      await this.contactOne.click()

      await this.nameInput.waitForDisplayed()
      await this.nameInput.setValue('NAME 1 &/" EDIT 1')

      await this.positionInput.waitForDisplayed()
      await this.positionInput.setValue('POSITION 1 &/ EDIT 1"')

      await this.telInput.waitForDisplayed()
      await this.telInput.setValue('TELL 1 &/" EDIT 1')

      await this.mobileInput.waitForDisplayed()
      await this.mobileInput.setValue('MOBILE 1 &/" EDIT 1')

      await this.emailInput.waitForDisplayed()
      await this.emailInput.setValue('EMAIL 1 &/" EDIT 1')

      await this.saveButton.waitForDisplayed()
      await this.saveButton.click()
  }

  
  async editContactTwo() {
      await this.contactTwo.waitForDisplayed()
      await this.contactTwo.click()

      await this.nameInput.waitForDisplayed()
      await this.nameInput.setValue('NAME 2 &/" EDIT 2')

      await this.positionInput.waitForDisplayed()
      await this.positionInput.setValue('POSITION 2 &/" EDIT 2')

      await this.telInput.waitForDisplayed()
      await this.telInput.setValue('TELL 2 &/" EDIT 2')

      await this.mobileInput.waitForDisplayed()
      await this.mobileInput.setValue('MOBILE 2 &/" EDIT 2')

      await this.emailInput.waitForDisplayed()
      await this.emailInput.setValue('EMAIL 2 &/" EDIT 2')

      await this.saveButton.waitForDisplayed()
      await this.saveButton.click()
  }
  
  async editContactThree() {
      await this.contactThree.waitForDisplayed()
      await this.contactThree.click()

      await this.nameInput.waitForDisplayed()
      await this.nameInput.setValue('NAME 3 &/" EDIT 3')

      await this.positionInput.waitForDisplayed()
      await this.positionInput.setValue('POSITION 3 &/" EDIT 3')

      await this.telInput.waitForDisplayed()
      await this.telInput.setValue('TELL 3 &/" EDIT 3')

      await this.mobileInput.waitForDisplayed()
      await this.mobileInput.setValue('MOBILE 3 &/" EDIT 3')

      await this.emailInput.waitForDisplayed()
      await this.emailInput.setValue('EMAIL 3 &/" EDIT 3')

      await this.saveButton.waitForDisplayed()
      await this.saveButton.click()
  }

  async deleteContactOne() {
      await this.contactOne.waitForDisplayed()
      await this.contactOne.click()

      await this.deleteButton.waitForDisplayed()
      await this.deleteButton.click()

      await browser.keys('Enter')
  }

  async deleteContactThree() {
      
      await this.contactThree.waitForDisplayed()
      await this.contactThree.click()

      await browser.keys('Enter')
      await this.deleteButton.waitForDisplayed()
      await this.deleteButton.click()

  }    

}
module.exports = new SeiContactsCrud();