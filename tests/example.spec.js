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


test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});


test('Check Main Header Presence', async ({ page }) => {
  await expect(page.locator('header.header')).toBeVisible();
});

test('Check GitHub Link', async ({ page }) => {
  await expect(page.locator('a[href="https://www.github.com/gabrielt01/"]')).toHaveAttribute('href', 'https://www.github.com/gabrielt01/');
});

test('Check LinkedIn Link', async ({ page }) => {
  await expect(page.locator('a[href="https://www.linkedin.com/in/gabriel-trojanowski/"]')).toHaveAttribute('href', 'https://www.linkedin.com/in/gabriel-trojanowski/');
});

test('Check Profile Picture', async ({ page }) => {
  await expect(page.locator('img[alt=""]')).toHaveAttribute('src', './images/avatar.png');
});

test('Check First Project Link', async ({ page }) => {
  await expect(page.locator('a[href="skills.html#project-results"]:has-text("Explore to Learn More")')).toHaveAttribute('href', 'skills.html#project-results');
});

test('Check Footer Logo Link', async ({ page }) => {
  await page.click('a.footer__inner-logo');
  await expect(page).toHaveURL(websiteURL);
});

test('Check All Sections Exist', async ({ page }) => {
  await expect(page.locator('section')).toHaveCount(3);
});

test('Check Analyze Icon', async ({ page }) => {
  await expect(page.locator('img[alt=""][src="./images/icons/analyze.png"]')).toBeVisible();
});

test('Check Optimize Icon', async ({ page }) => {
  await expect(page.locator('img[alt=""][src="./images/icons/optimize.png"]')).toBeVisible();
});

test('Check Intro Section Text', async ({ page }) => {
  await expect(page.locator('div.intro__inner-title h2')).toContainText('Proficiently exploring and solving procurement challenges with technology');
});

