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
const skillsURL = 'https://njit-wis.github.io/midterm-portfolio-gabrielt01/skills.html'


test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

// Test #1: Check Page Title
test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

// Test #2: Check Footer
test('Check Footer', async ({ page }) => {
  const footerLinkCount = await page.locator('.footer__inner-links a').count();
  expect(footerLinkCount).toBe(4);
});

// Test #3: Check if the logo in the header navigates to the homepage
test('Check Header Logo Navigation', async ({ page }) => {
  await page.goto(websiteURL);
  await page.click('.header__inner-logo');
  await expect(page).toHaveURL(websiteURL);
});

// Test #4: Check that the main navigation links are present
test('Check Main Navigation Links', async ({ page }) => {
  await page.goto(websiteURL);
  const navigationLinks = page.locator('.nav__inner a');
  await expect(navigationLinks).toHaveCount(4);
});

// Test #5: Check if the Experience link navigates correctly
test('Check Experience Link Navigation', async ({ page }) => {
  await page.goto(websiteURL);
  await page.click('a[href="skills.html#project-results"]');
  await expect(page).toHaveURL(experienceURL);
});

// Test #6: Check if the Education link navigates correctly
test('Check Education Link Navigation', async ({ page }) => {
  await page.goto(websiteURL);
  await page.click('a[href="education.html"]');
  await expect(page).toHaveURL(educationURL);
});

// Test #7: Check if the Skills link navigates correctly
test('Check Skills Link Navigation', async ({ page }) => {
  await page.goto(websiteURL);
  await page.click('a[href="skills.html"]');
  await expect(page).toHaveURL(skillsURL);
});

 // Test #8: Check if the social media links are present
test('Check Social Media Links', async ({ page }) => {
  await page.goto(websiteURL);
  const socialLinks = page.locator('.introInfo__social a');
  await expect(socialLinks).toHaveCount(2);
});

// Test #9: Check if the profile image loads correctly
test('Check Profile Image', async ({ page }) => {
  await page.goto(websiteURL);
  const profileImage = page.locator('.introInfo__avatar img');
  await expect(profileImage).toBeVisible();
  await expect(profileImage).toHaveAttribute('src', './images/avatar.png');
});

// Test #10: Check the main section titles are correct
test('Check Main Section Titles', async ({ page }) => {
  await page.goto(websiteURL);
  const titles = page.locator('.main h2, .main h3');
  await expect(titles).toHaveText([
    'Gabriel Trojanowski',
    'Proficiently exploring and solving procurement challenges with technology',
    'Analyze',
    'Identify',
    'Implement',
    'Optimize'
  ]);
});

// Test #11: Check introductory text is present
test('Check Introductory Text', async ({ page }) => {
  await page.goto(websiteURL);
  const introText = page.locator('.intro__inner-content h2');
  await expect(introText).toContainText('Proficiently exploring and solving procurement challenges with technology');
});

// Test #12: Check if all project images load correctly
test('Check Project Images Load', async ({ page }) => {
  await page.goto(websiteURL);
  const projectImages = page.locator('.main__bg-item img');
  await expect(projectImages).toHaveCount(5);
});

// Test #13: Check the text of the Explore More buttons
test('Check Explore More Buttons Text', async ({ page }) => {
  await page.goto(websiteURL);
  const exploreButtons = page.locator('.button');
  await expect(exploreButtons).toHaveText(['Explore to Learn More', 'Explore to Learn More', 'Explore to Learn More']);
});

// Test #14: Check that the "About Me" section is present
test('Check About Me Section', async ({ page }) => {
  await page.goto(websiteURL);
  const aboutMeSection = page.locator('.about');
  await expect(aboutMeSection).toBeVisible();
});

// Test #15: Check if social media links are correct
test('Check Social Media Links', async ({ page }) => {
  await page.goto(websiteURL);
  const githubLink = page.locator('a[href*="github"]');
  const linkedinLink = page.locator('a[href*="linkedin"]');
  await expect(githubLink).toHaveAttribute('href', 'https://www.github.com/gabrielt01/');
  await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/gabriel-trojanowski/');
});

// Test #16: Check if clicking on the logo in the header navigates to the home page
test('Check Logo Navigation', async ({ page }) => {
  await page.goto(websiteURL);
  await page.click('.header__inner-logo');
  await expect(page).toHaveURL(websiteURL); // Assuming clicking the logo reloads the home page
});

// Test #17: Check that the main background images are loaded
test('Check Main Background Images Load', async ({ page }) => {
  await page.goto(websiteURL);
  const backgroundImages = page.locator('.main__bg-item img');
  await expect(backgroundImages).toBeVisible();
  await expect(backgroundImages).toHaveCount(5); 
});