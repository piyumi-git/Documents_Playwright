import { BasePage } from './BasePage.js';

export class FormSubmissionPage extends BasePage {
  constructor(page) {
    super(page);
    this.formMenu = 'text=Form Submission';
    this.name = '#name';
    this.email = '#email';
    this.phone = '#phone';
    this.submitBtn = 'button:has-text("Submit")';
    this.successMsg = '.alert-success';
  }

  async openForm() {
    await this.click(this.formMenu);
  }

  async fillForm() {
    await this.fill(this.name, 'QA Tester');
    await this.fill(this.email, 'qa@test.com');
    await this.fill(this.phone, '1234567890');
  }

  async submitForm() {
    await this.click(this.submitBtn);
  }

  async validateFormSubmission() {
    await this.page.waitForSelector(this.successMsg);
  }
}
