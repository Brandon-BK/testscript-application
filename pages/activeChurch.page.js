class  ActiveChurch{

   get giveYourLifeBtn() { return $('.open-button') }

   async clickGiveYourLifeButton() {
    await this.giveYourLifeBtn.waitForDisplayed()
    await this.giveYourLifeBtn.click()
   }
    
}

module.exports = new ActiveChurch();

