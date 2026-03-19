export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async click(locator) {
    const element = this._resolve(locator);
    await element.waitFor({ state: 'visible' });
    await element.click();
  }

  async fill(locator, value) {
    const element = this._resolve(locator);
    await element.waitFor({ state: 'visible' });
    await element.fill(value);
    
  }

  async type(locator, value) {
    const element = this._resolve(locator);
    await element.waitFor({ state: 'visible' });
    await element.type(value);
    }

  async getText(locator) {
    const element = this._resolve(locator);
    await element.waitFor({ state: 'visible' });
    return await element.textContent();
  }

  async isVisible(locator) {
    const element = this._resolve(locator);
    return await element.isVisible();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async waitFor(locator, state = 'visible') {
    const element = this._resolve(locator);
    await element.waitFor({ state });
  }

  _resolve(locator) {
    // If it's already a Playwright locator, return it
    if (typeof locator !== 'string') {
      return locator;
    }

    // If it's a string, convert it into a locator
    return this.page.locator(locator);
  }
}
