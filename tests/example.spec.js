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
const experienceURL = 'https://njit-wis.github.io/midterm-portfolio-gabrielt01/skills.html#project-results'
const educationURL = 'https://njit-wis.github.io/midterm-portfolio-gabrielt01/education.html'


test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});


test('Check Footer', async ({ page }) => {
  const footerLinkCount = await page.locator('.footer__inner-links a').count();
  expect(footerLinkCount).toBe(4);
});

// Test #2: Check if the logo in the header navigates to the homepage
test('Check Header Logo Navigation', async ({ page }) => {
  await page.goto(websiteURL);
  await page.click('.header__inner-logo');
  await expect(page).toHaveURL(websiteURL);
});

// Test #1: Check that the main navigation links are present
test('Check Main Navigation Links', async ({ page }) => {
  await page.goto(websiteURL);
  const navigationLinks = page.locator('.nav__inner a');
  await expect(navigationLinks).toHaveCount(4);
});

// Test #3: Check if the Experience link navigates correctly
test('Check Experience Link Navigation', async ({ page }) => {
  await page.goto(websiteURL);
  await page.click('a[href="skills.html#project-results"]');
  await expect(page).toHaveURL(experienceURL);
});

test('Check Education Link Navigation', async ({ page }) => {
  await page.goto(websiteURL);
  await page.click('a[href="education.html"]');
  await expect(page).toHaveURL(educationURL);
});
