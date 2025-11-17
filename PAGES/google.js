// PAGES/google.js
exports.Google = class Google {
  constructor(page) {
    this.page = page;
    this.logintop = "#login2";
    this.username = "#loginusername";
    this.password = "#loginpassword";
    this.loginbutton = "[onclick='logIn()']";
  }

  async login() {
    await this.page.goto("https://demoblaze.com/");
    await this.page.locator(this.logintop).click();
  }
};
