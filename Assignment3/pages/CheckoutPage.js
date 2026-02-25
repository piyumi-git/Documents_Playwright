import { BasePage } from './BasePage.js';

export class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueBtn = '#continue';
    this.totalLabel = '.summary_total_label';
    this.finishBtn = '#finish';
    this.completeMsg = '.complete-header';
  }

  async fillCheckoutInfo() {
    await this.fill(this.firstName, 'QA');
    await this.fill(this.lastName, 'Tester');
    await this.fill(this.postalCode, '12345');
    await this.click(this.continueBtn);
  }

  async validateItemTotal() {
    await this.page.waitForSelector(this.totalLabel);
  }

  async finishCheckout() {
    await this.click(this.finishBtn);
  }

  async validateOrderComplete() {
    await this.page.waitForSelector(this.completeMsg);
  }
}
