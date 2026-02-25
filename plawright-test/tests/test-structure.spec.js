import { test, expect } from "@playwright/test";

test.describe("category", () => {

  test.beforeAll(() => {
    console.log("Before All");
  });

  test.beforeEach(() => {
    console.log("Before Each");
  });

  test.only("test name 1", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(
      "Fast and reliable end-to-end testing for modern web apps | Playwright"
    );
    await expect(page.getByText("Get Started")).toBeVisible();
  });

  test("test name 2", async () => {
    console.log("This is the test body 2");
  });

  test("test name 3", async ({ page }) => {
    console.log("This is the test body 3");
  });

  test.afterAll(() => {
    console.log("After All");
  });

  test.afterEach(() => {
    console.log("After Each");
  });
});
