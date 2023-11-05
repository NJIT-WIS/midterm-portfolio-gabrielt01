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

// This test checks if the main page title is correct
test('main page has correct title', async ({ page }) => {
  await page.goto('file:///path/to/your/index.html'); // Update with the correct path to your index.html
  await expect(page).toHaveTitle('Home');
});

// This test checks if the header loads correctly
test('header has correct text', async ({ page }) => {
  await page.goto('file:///path/to/your/index.html'); // Update with the correct path
  const headerText = await page.textContent('.header__inner-logo');
  expect(headerText).toBe('Gabriel Trojanowski');
});

// This test checks if navigation to the Experience section is possible
test('navigate to Experience section', async ({ page }) => {
  await page.goto('file:///path/to/your/index.html'); // Update with the correct path
  await page.click('text=Experience');
  // Assuming clicking 'Experience' navigates to a new URL, check if URL is correct
  await expect(page).toHaveURL(/.*skills.html#project-results/);
});

// This test checks if the profile image is loaded
test('profile image is loaded', async ({ page }) => {
  await page.goto('file:///path/to/your/index.html'); // Update with the correct path
  const avatar = await page.getAttribute('.introInfo__avatar img', 'src');
  expect(avatar).toBe('./images/avatar.png');
});

// This test checks if the footer contains the correct links
test('footer contains correct links', async ({ page }) => {
  await page.goto('file:///path/to/your/index.html'); // Update with the correct path
  const linksCount = await page.$$eval('.footer__inner-links a', links => links.length);
  expect(linksCount).toBe(4);
});