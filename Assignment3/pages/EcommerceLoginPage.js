import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

export class EcommerceLoginPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Step 1: Button on the homepage
    this.ecommerceMenuItem = page.getByRole('menuitem', { name: 'E-commercesite' });

    // Step 2: Modal button inside the homepage
    this.visitDemoSiteBtn = page.getByRole('link', { name: 'Visit DemoSite' });

    // Step 3: Login page fields (after navigation)
    this.emailInput = page.getByRole('textbox', { name: 'Email*' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password*' });
    this.loginButton = page.getByRole('button', { name: 'Login' });

    // Step 4: Cart page validation
    this.cartHeader = page.locator('#ecommerce-header');
  }

  async openEcommerceModal() {
    await this.click(this.ecommerceMenuItem);
  }

  async goToDemoSite() {
    await this.click(this.visitDemoSiteBtn);
  }

  async loginToEcommerce(email, password) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async validateCartPageLoaded() {
    await this.cartHeader.waitFor({ state: 'visible' });
    await expect(this.cartHeader).toBeVisible();
  }
}