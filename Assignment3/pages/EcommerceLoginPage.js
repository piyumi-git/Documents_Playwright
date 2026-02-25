import { BasePage } from './BasePage.js';

export class EcommerceLoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.ecommerceMenu = 'text=E-Commerce Site';
    this.viewDemoBtn = 'text=View Demo site';
    this.username = '#user-name';
    this.password = '#password';
    this.loginBtn = '#login-button';
  }

  async openEcommerceDemo() {
    await this.click(this.ecommerceMenu);
    await this.click(this.viewDemoBtn);
  }

  async login(username, password) {
    await this.fill(this.username, username);
    await this.fill(this.password, password);
    await this.click(this.loginBtn);
  }
}
