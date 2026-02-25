import { BasePage } from './BasePage.js';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItems = '.cart_item';
    this.checkoutBtn = '#checkout';
  }

  async validateItemsInCart(count) {
    const items = await this.page.$$(this.cartItems);
    if (items.length !== count) {
      throw new Error(`Expected ${count} items, found ${items.length}`);
    }
  }

  async checkout() {
    await this.click(this.checkoutBtn);
  }
}
