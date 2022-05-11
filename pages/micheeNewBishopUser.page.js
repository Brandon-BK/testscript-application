class NewUser  {

    // getting the elements from the site

    get email()                   { return $("#exampleInputEmail1")}
    get password()                { return $("#exampleInputPassword1")}
    get submitBtn()               { return $('input[type="submit"]')}
    
    async login (username, password) {
        await this.email.setValue(username);
        await this.password.setValue(password);
        await this.submitBtn.click();
    }

}

module.exports = new NewUser()