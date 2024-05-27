class LoginPage {
    get username() {
        return $('#user-name');
    }

    get password() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get errorMessageContainer() {
        return $('div.error-message-container.error');
    }

    get errorMessageText() {
        return this.errorMessageContainer.$('h3[data-test="error"]');
    }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login(username, password) {
        if (username) {
            await this.username.setValue(username);
        }
        if (password) {
            await this.password.setValue(password);
        }
        await this.loginButton.click();
    }

    async isErrorMessageVisible() {
        return await this.errorMessageContainer.isDisplayedInViewport();
    }

    async getErrorMessageText() {
        return this.errorMessageText.getText();
    }
}

module.exports = new LoginPage();
