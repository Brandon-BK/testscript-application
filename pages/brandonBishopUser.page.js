class NewUser  {

    // getting the elements from the site

    get profile()           { return $('=My Profile') }
    get email()             { return $("#exampleInputEmail1") }
    get password()          { return $("#exampleInputPassword1") }
    get submitBtn()         { return $('input[type="submit"]') }
    get loading()           { return $('.loading') }
    get admin()             { return $('.fa-wrench') }
    get users()             { return $('span.fa-users') }
    get dropdown()          { return $('.dropdown-toggle') }
    get dropdownOption()    { return $('a[href="#/users/form/new"]')  }

    
    /**
   * Enter the username into the field
   * @param {String} text user name to be entered
   */
  async enterEmail(text) {
   await this.email.waitForDisplayed();
   await this.email.setValue(text);
  }

  /**
   * Enter the username into the field
   * @param {String} text unser name to be entered
   */
  async enterPassword(text) {
   await this.password.waitForDisplayed();
   await this.password.setValue(text);
  }

    
  async clickSubmitBtn() {
    await this.submitBtn.waitForDisplayed()
    await this.submitBtn.click()
  }


  async loadingProcess() {
    await this.loading.waitForDisplayed()
    await this.loading.waitForDisplayed(3000000, true);
  }


  async clickMyAdmin() {
    await this.admin.waitForDisplayed()
    await this.admin.click()
  }

  // async clickUsersCard() {
  //   await this.users.waitForDisplayed()
  //   await this.users.click()
  // }

  // async clickDropdown() {
  //   await this.dropdown.waitForDisplayed()
  //   await this.dropdown.click()
  // }

  // async clickDropdownOption() {
  //   await this.dropdownOption.waitForDisplayed()
  //   await this.dropdownOption.click()
  // }


}

module.exports = new NewUser()