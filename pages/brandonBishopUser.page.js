class NewUser  {

    // getting the elements from the site

    get email() { return $("#exampleInputEmail1") }

    get password() { return $("#exampleInputPassword1") }

    get submitBtn() {  return $('input[type="submit"]'); }

    get loading() {  return $(".loading") }





    
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


}

module.exports = new NewUser()