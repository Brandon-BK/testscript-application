class  ActiveChurch{

   //selectors
   get giveYourLifeBtn()         { return $('//button[contains(text(), "Give your life")]') }
   get enterName()               { return $('input[placeholder="Enter Name"]') }
   get enterEmail()              { return $('input[placeholder="Enter Email"]') }


   //functions
   async clickGiveYourLifeButton() {
    await this.giveYourLifeBtn.waitForDisplayed()
    await this.giveYourLifeBtn.click()
   }


   async setNameValue(text) {
      await this.enterName.waitForDisplayed()
      await this.enterName.setInputValue(text)
   }


   async setEmailValue(text) {
      await this.enterName.waitForDisplayed()
      await this.enterName.setInputValue(text)
   }
    
}

module.exports = new ActiveChurch();

