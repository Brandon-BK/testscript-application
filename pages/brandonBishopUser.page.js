class NewUser  {

    // getting the elements from the site

    get email()                   { return $("#exampleInputEmail1") }
    get password()                { return $("#exampleInputPassword1") }
    get submitBtn()               { return $('input[type="submit"]') }
    get loading()                 { return $('.loading') }
    get profile()                 { return $('=My Profile') }
    get admin()                   { return $('.fa-wrench') }
    get users()                   { return $('span.fa-users') }
    get dropdown()                { return $('.dropdown-toggle') }
    get dropdownOption()          { return $('a[href="#/users/form/new"]')  }
    get userID()                  { return $('#UserID') }
    get userName()                { return $('#Name') }             
    get userPassword()            { return $('#Password') }
    get userNumber()              { return $('form div:nth-child(4) input') }
    get userEmail()               { return $('#Email') }
    get userRole()                { return $('#Role') }
    get accountID()               { return $('#RepID') }
    get adminCheckbox()           { return $('form div:nth-child(14) label input') }
    get CustomersCheckbox()       { return $('form div:nth-child(17) label input') }
    get saveBtn()                 { return $('.navbuttonright') }
    get backBtn()                 { return $('.navbuttonleft') }
    get search()                  { return $('div:nth-child(6) input') }
    get expectUser()              { return $('=TDDADMIN') }
    get clickUser()               { return $('a[href="#/users/form/TDDADMIN"]') }
    get delete()                  { return $('.glyphicon-floppy-remove') }
    get yes()                     { return $('.btn-success') }
       



    async clickYes() {
      await this.yes.waitForDisplayed();
      await this.yes.click();
    }

    async clickDelete() {
      await this.delete.waitForDisplayed();
      await this.delete.click();
    }
  
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

  async clickUsersCard() {
    await this.users.waitForDisplayed()
    await this.users.click()
  }

  async clickDropdown() {
    await this.dropdown.waitForDisplayed()
    await this.dropdown.click()
  }

  async clickDropdownOption() {
    await this.dropdownOption.waitForDisplayed()
    await this.dropdownOption.click()
  }

  async enterUserID(text) {
    await this.userID.waitForDisplayed();
    await this.userID.setValue(text);
  }

  async enterUserName(text) {
    await this.userName.waitForDisplayed();
    await this.userName.setValue(text);
  }

  async enterUserPassword(text) {
    await this.userPassword.waitForDisplayed();
    await this.userPassword.setValue(text);
  }

  async enterUserNumber(text) {
    await this.userNumber.waitForDisplayed();
    await this.userNumber.setValue(text);
  }

  async enterUserEmail(text) {
    await this.userEmail.waitForDisplayed();
    await this.userEmail.setValue(text);
  }

  async enterUserRole(text) {
    await this.userRole.waitForDisplayed();
    await this.userRole.setValue(text);
  }

  async enterUserAccountID(text) {
    await this.accountID.waitForDisplayed();
    await this.accountID.setValue(text);
  }


  async clickAdminCheckbox() {
    await this.adminCheckbox.waitForDisplayed()
    await this.adminCheckbox.click()
  }


  async clickCustomersCheckbox() {
    await this.CustomersCheckbox.waitForDisplayed()
    await this.CustomersCheckbox.click()
  }


  async clickSaveBtn() {
    await this.saveBtn.waitForDisplayed()
    await this.saveBtn.click()
  }

  async clickBackBtn() {
    await this.backBtn.waitForDisplayed()
    await this.backBtn.click()
  }


  async searchUser(text) {
    await this.search.waitForDisplayed();
    await this.search.setValue(text);
   //  await this.search.waitForDisplayed(3000000, true);
  }


  async clickNewUser() {
    await this.clickUser.waitForDisplayed();
    await this.clickUser.click();
  }
   
  

}

module.exports = new NewUser()