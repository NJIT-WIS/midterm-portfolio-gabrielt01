// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


const websiteURL = 'https://njit-wis.github.io/midterm-portfolio-gabrielt01/index.html';
const expectedTitle = 'Home';
const expectedMenuItemCount = 4;


test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

test('Check Navigation Menu in Header', async ({ page }) => {
  const menuItemCount = await page.locator('.menu .menu-item').count();
  expect(menuItemCount).toBe(expectedMenuItemCount);
});

test('Check Footer', async ({ page }) => {
  const footerLinkCount = await page.locator('.footer__inner-links a').count();
  expect(footerLinkCount).toBe(4);
});

