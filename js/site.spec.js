const { test, expect } = require('@playwright/test');

test.describe('Homepage tests', () => {

  // Navigate to the homepage before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080/'); // Replace with your actual URL
  });

  // 1. Test that the homepage loads with the correct title
  test('homepage has the correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Home');
  });

  // 2. Test the visibility of the main header
  test('main header is visible', async ({ page }) => {
    const header = await page.locator('header.header');
    await expect(header).toBeVisible();
  });

  // 3. Test the navigation links in the header
  test('navigation links are correct', async ({ page }) => {
    await expect(page.locator('a[href="skills.html#project-results"]')).toHaveText('Experience');
    await expect(page.locator('a[href="education.html"]')).toHaveText('Education');
    // Add tests for all navigation links
  });