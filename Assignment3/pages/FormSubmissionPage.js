import { BasePage } from './BasePage.js';

export class FormSubmissionPage extends BasePage {
  constructor(page) {
    super(page);

    this.nameInput = page.getByRole('textbox', { name: 'Name*' });
    this.emailInput = page.getByRole('textbox', { name: 'Email*' });
    this.contactNumberInput = page.getByRole('textbox', { name: 'Contact number*' });
    this.dateInput = page.getByRole('textbox', { name: 'Date*' });

    this.greenRadio = page.getByRole('radio', { name: 'Green*' });
    this.pastaCheckbox = page.getByRole('checkbox', { name: 'pasta*' });

    this.uploadButton = page.getByRole('button', { name: 'uploadfile' });

    this.selectCountry = page.getByLabel('select Country*');

    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successToast = page.locator('#success-msg');
  }

  async validateSubmissionSuccess() {
    await this.successToast.waitFor({ state: 'visible' });
    await expect(this.successToast).toBeVisible();
  }
}