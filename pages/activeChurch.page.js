const { default: $ } = require("webdriverio/build/commands/browser/$");


class  ActiveChurch extends Page {

    get inputUsername () {
      return $('#username')
    }

    get inputPassword () {
      return $('#password')
    }

    get giveYourLifeBtn() {
        return $(".open-button");
      }

    get submitBtn() {
      return $(".open-button");
    }

    
  // selecting the options of first time commit or recommit

  // first time commit
    get option1() {
      return $('')
      ('').isSelected()
    }

    // recommit
    get option2() {
      return $('')
    }




      clickGiveYourLifeBtn() {
        await this.giveYourLifeBtn.waitForDisplayed();
        await this.giveYourLifeBtn.click();
      }

      clickSubmitBtn() {
        await this.submitBtn.waitForDisplayed();
        await this.submitBtn.click();
      }

      async login (inputUsername, inputPassword) {
        await this.inputUsername.setValue(inputUsername).getText()
        await this.inputUsername.setValue(inputPassword).getText()
        await this.submitBtn().click()
      }
    
}

module.exports = new ActiveChurch();

