const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');

Given(/^User is located on the main page of saucedemo website$/, async () => {
    await loginPage.open();
});

When(/^User click “Login” button$/, async () => {
    await loginPage.login();
});

Then(/^User should see “Epic sadface: Username is required” error message$/, async () => {
    const isErrorMessageDisplayedInViewport = await loginPage.isErrorMessageVisible();
    expect(isErrorMessageDisplayedInViewport).toBe(true);

    const errorMessageText = await loginPage.getErrorMessageText();
    expect(errorMessageText).toBe('Epic sadface: Username is required');
});
