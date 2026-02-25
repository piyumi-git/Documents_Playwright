export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async click(selector) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.click(selector);
  }

  async fill(selector, value) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.fill(selector, value);
  }
}
