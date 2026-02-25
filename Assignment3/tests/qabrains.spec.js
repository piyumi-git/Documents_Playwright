import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { FormSubmissionPage } from '../pages/FormSubmissionPage.js';
import { EcommerceLoginPage } from '../pages/EcommerceLoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test('QABrains Complete Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const formPage = new FormSubmissionPage(page);
  const ecommerceLogin = new EcommerceLoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate('https://practice.qabrains.com/');
  await loginPage.openUserAuthentication();
  await loginPage.login('qa_testers@qabrains.com', 'Password123');
  // await loginPage.validateLoginSuccess();

  await formPage.openForm();
  await formPage.fillForm();
  await formPage.submitForm();
  await formPage.validateFormSubmission();

  await ecommerceLogin.openEcommerceDemo();
  await ecommerceLogin.login('standard_user', 'secret_sauce');

  await productsPage.addTwoProducts();
  await productsPage.openCart();

  await cartPage.validateItemsInCart(2);
  await cartPage.checkout();

  await checkoutPage.fillCheckoutInfo();
  await checkoutPage.validateItemTotal();
  await checkoutPage.finishCheckout();
  await checkoutPage.validateOrderComplete();
});
