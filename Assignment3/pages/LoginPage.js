import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';


export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.userAuthLink = 'text=User Authentication';
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.loginButton = 'button:has-text("Login")';
    this.successToast = '.toast-success';
  }

  async openUserAuthentication() {
    await this.click(this.userAuthLink);
  }

  async login(email, password) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }


  async validateLoginSuccess() {
   await expect(page.getByText('Login Successful')).toBeVisible();
    // await this.page.waitForSelector(this.successToast, { state: 'visible' });
  }

// async validateLoginSuccess() {
//   const toast = this.page.locator(this.successToast);
//   await expect(toast).toContainText(/success/i);
// }


}
