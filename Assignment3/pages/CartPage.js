import {BasePage} from './BasePage.js';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);

   // Specific cart item selected (jacket)
    this.item3 = page.locator('a[href="ecommerce/product-details?id=3"]');

    // Cart page header to confirm navigation
    this.cartHeader = page.locator('#ecommerce-header');
  }

  async validateCartPageLoaded() {
    await this.cartHeader.waitFor({ state: 'visible' });
    await expect(this.cartHeader).toBeVisible();
  }

  async selectItem3() {
    await this.item3.waitFor({ state: 'visible' });
    await this.click(this.item3);
  }
}
