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

// @ts-check
const { test, expect } = require('@playwright/test');

// Assuming your local server runs at http://localhost:3000
const LOCAL_SERVER_URL = 'http://localhost:3000/';

test('home page has correct title', async ({ page }) => {
  await page.goto(LOCAL_SERVER_URL);
  await expect(page).toHaveTitle(/Home/);
});

test('navigates to experience section', async ({ page }) => {
  await page.goto(LOCAL_SERVER_URL);
  await page.getByRole('link', { name: 'Experience' }).click();
  await expect(page.url()).toBe(`${LOCAL_SERVER_URL}skills.html#project-results`);
});

test('navigates to education page', async ({ page }) => {
  await page.goto(LOCAL_SERVER_URL);
  await page.getByRole('link', { name: 'Education' }).click();
  await expect(page.url()).toBe(`${LOCAL_SERVER_URL}education.html`);
});

test('navigates to skills page', async ({ page }) => {
  await page.goto(LOCAL_SERVER_URL);
  await page.getByRole('link', { name: 'Skills' }).click();
  await expect(page.url()).toBe(`${LOCAL_SERVER_URL}skills.html`);
});

test('navigates to projects section', async ({ page }) => {
  await page.goto(LOCAL_SERVER_URL);
  await page.getByRole('link', { name: 'Projects' }).click();
  await expect(page.url()).toBe(`${LOCAL_SERVER_URL}skills.html#project-results`);
});

test('header logo redirects to home', async ({ page }) => {
  await page.goto(`${LOCAL_SERVER_URL}education.html`);
  await page.getByRole('img', { name: 'Gabriel Trojanowski' }).click();
  await expect(page.url()).toBe(LOCAL_SERVER_URL);
});

test('footer logo redirects to home', async ({ page }) => {
  await page.goto(`${LOCAL_SERVER_URL}skills.html`);
  await page.getByRole('img', { name: 'Gabriel Trojanowski' }).click();
  await expect(page.url()).toBe(LOCAL_SERVER_URL);
});

test('main avatar image is visible', async ({ page }) => {
  await page.goto(LOCAL_SERVER_URL);
  const avatarImage = page.locator('img[alt="Gabriel Trojanowski"]');
  await expect(avatarImage).toBeVisible();
});

test('about section is present', async ({ page }) => {
  await page.goto(LOCAL_SERVER_URL);
  const aboutSection = page.locator('section.about');
  await expect(aboutSection).toBeVisible();
});

test('social links are present', async ({ page }) => {
  await page.goto(LOCAL_SERVER_URL);
  const socialLinks = page.locator('.social-links a');
  await expect(socialLinks).toHaveCount(3); // Assuming there are 3 social links
});
