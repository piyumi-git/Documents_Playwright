import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';


export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    

    this.emailInput = page.getByRole('textbox',{ name:'Email*' });
    this.passwordInput = page.getByRole('textbox',{ name:'Password*' });
    this.loginButton = page.getByRole('button',{ name:'Login' });
    this.successToast = page.locator('#success-msg');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  
  }

  async validateLoginSuccess() {
   await this.successToast.waitFor({ state: 'visible' });
   await expect(this.successToast).toBeVisible();
  }

}
