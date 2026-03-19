import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { FormSubmissionPage } from '../pages/FormSubmissionPage.js';
import { EcommerceLoginPage } from '../pages/EcommerceLoginPage.js';
import { CartPage } from '../pages/CartPage.js';

// DATA FILES
import { loginData } from '../tests/loginpagedata.js';
import { formSubmissionData } from '../tests/formsubmissionData.js';
import { ecommerceLoginData } from '../tests/ecommercelogindata.js';
import { ecommerceCartData } from '../tests/ecommercecartdata.js';


// ------------------ LOGIN TEST ------------------
test('User can login to the main login page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate('/login');

  await loginPage.login(
    loginData.email,
    loginData.password
  );
  await loginPage.validateLoginSuccess();
});


// ------------------ FORM SUBMISSION TEST ------------------
test('User can successfully submit the form', async ({ page }) => {
  const formPage = new FormSubmissionPage(page);

  await formPage.navigate('/form-submission');

  await formPage.fill(formPage.nameInput, formSubmissionData.name);
  await formPage.fill(formPage.emailInput, formSubmissionData.email);
  await formPage.fill(formPage.contactNumberInput, formSubmissionData.contactNumber);
  await formPage.fill(formPage.dateInput, formSubmissionData.date);

  await formPage.click(formPage.greenRadio);
  await formPage.click(formPage.pastaCheckbox);

  await page.setInputFiles('input[type="file"]', formSubmissionData.filePath);

  await formPage.selectCountry.selectOption(formSubmissionData.country);

  await formPage.click(formPage.submitButton);

  await formPage.validateSubmissionSuccess();
});


// ------------------ ECOMMERCE LOGIN TEST ------------------
test('User can log in to the ecommerce site', async ({ page }) => {
  const ecommerce = new EcommerceLoginPage(page);

  await ecommerce.navigate('/');

  await ecommerce.openEcommerceModal();
  await ecommerce.goToDemoSite();

  await ecommerce.loginToEcommerce(
    ecommerceLoginData.email,
    ecommerceLoginData.password
  );
  await ecommerce.validateCartPageLoaded();
});


// ------------------ CART ITEM SELECTION TEST ------------------
test('User can add the jacket only to the cart', async ({ page }) => {
  const ecommerce = new EcommerceLoginPage(page);
  const cartPage = new CartPage(page);

  await ecommerce.navigate('/');

  await ecommerce.openEcommerceModal();
  await ecommerce.goToDemoSite();

  await ecommerce.loginToEcommerce(
    ecommerceCartData.login.email,
    ecommerceCartData.login.password
  );

  await cartPage.validateCartPageLoaded();

  await cartPage.selectItem3();
});