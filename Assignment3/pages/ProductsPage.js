import { BasePage } from './BasePage.js';

export class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.addToCartBtns = 'button:has-text("Add to cart")';
    this.cartIcon = '.shopping_cart_link';
    this.successToast = '.toast-success';
  }

  async addTwoProducts() {
    const buttons = await this.page.$$(this.addToCartBtns);
    await buttons[0].click();
    await buttons[1].click();
  }

  async openCart() {
    await this.click(this.cartIcon);
  }
}
