class NewUser {

    // getting the elements from the site

    get email() { return $("#exampleInputEmail1") }
    get password() { return $("#exampleInputPassword1") }
    get submitBtn() { return $('input[type="submit"]') }
    get loading() { return $('.loading') }
    get myProfile() { return $('a=My Profile') }
    get myAdmin() { return $('.fa-wrench') }
    get userTab() { return $('span.fa-users') }
    get dropdown(){return $('.dropdown-toggle')}
    // get dropdownMenu(){return $('a=dropdown-menu')}
    get dropdownUser(){return $('a[href="#/users/form/new')}
    get userID(){ return $('#UserID') }
    get userName(){ return $('#Name') }             
    get userPassword(){ return $('#Password') }
    get userNumber(){ return $('form div:nth-child(4) input') }
    get userEmail(){ return $('#Email') }
    get userRole(){ return $('#Role') }
    get accountID(){ return $('#RepID') }
    get adminCheckbox(){ return $('form div:nth-child(14) label input') }
    get CustomersCheckbox() { return $('form div:nth-child(17) label input') }
    get saveBtn(){ return $('.navbuttonright') }
    get backBtn(){ return $('.navbuttonleft') }
    get search()        { return $('div:nth-child(6) input') }
    get expectUser()    { return $('=TDDADMIN') }
    get clickUser()     { return $('a[href="#/users/form/TDDADMIN"]') }
    get delete()        { return $('.glyphicon-floppy-remove') }
    get yes()           { return $('.btn-success') }
    get sucessAlert()  { return $('span=User Saved Ok') }
    get deletedMessage() { return $('span=User Deleted Ok') }
    get warning()       { return $('#page-content-wrapper > div > div > div > div > div > div.alert.alert-warning.ng-binding.ng-scope') }







    async enterEmail(text){
        await this.email.waitForDisplayed()
        await this.email.setValue(text)
    }

    async enterPassword(text){
        await this.password.waitForDisplayed()
        await this.password.setValue(text)
    }

    async clickSubmitBtn(){
        await this.submitBtn.waitForDisplayed()
        await this.submitBtn.click()
    }

    async loadingState() {
        await this.loading.waitForDisplayed()
        await this.loading.waitForDisplayed(3000000, true);
      }

      async adminClick() {
        await this.myProfile.waitForDisplayed()
        await this.myAdmin.click()

      }

      async userClick() {
        await this.userTab.waitForDisplayed()
        await this.userTab.click()

      }

      async dropdownClick() {
        await this.dropdown.waitForDisplayed()
        await this.dropdown.click()
        // await this.dropdownMenu.waitForDisplayed()
        await this.dropdownUser.click()
      }

      async fillNewUserForm(id,name,password,number,email,role,accountid,){
         await this.userID.waitForDisplayed()
         await this.userID.setValue(id);
         await this.userName.waitForDisplayed();
         await this.userName.setValue(name);
         await this.userPassword.waitForDisplayed();
         await this.userPassword.setValue(password);
         await this.userNumber.waitForDisplayed();
         await this.userNumber.setValue(number);
         await this.userEmail.waitForDisplayed();
         await this.userEmail.setValue(email);
         await this.userRole.waitForDisplayed();
         await this.userRole.setValue(role);
         await this.accountID.waitForDisplayed();
         await this.accountID.setValue(accountid);
         await this.adminCheckbox.waitForDisplayed()
         await this.adminCheckbox.click()
         await this.CustomersCheckbox.waitForDisplayed()
         await this.CustomersCheckbox.click()
         await this.saveBtn.waitForDisplayed()
         await this.saveBtn.click()
        
      }

      async searchForTheNewUser(value){
        await this.backBtn.waitForDisplayed()
        await this.backBtn.click()
        await this.search.waitForDisplayed()
        await this.search.setValue(value)
        await this.clickUser.waitForDisplayed();
        await this.clickUser.click();
        await this.delete.waitForDisplayed();
        await this.delete.click();
        await this.yes.waitForDisplayed();
        await this.yes.click();
      }





}

module.exports = new NewUser()