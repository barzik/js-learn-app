import { test, expect } from '@playwright/test';

test.describe('App sanity (against e2e fixture content)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads the page with the Hebrew title and renders the layout', async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/ג'אווהסקריפט/);

    await expect(page.locator('[data-cy="main-container"]')).toBeVisible();
    await expect(page.locator('[data-cy="nav-list"]')).toBeVisible();

    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  });

  test('sidebar lists every fixture section in order', async ({ page }) => {
    const items = page.locator('[data-cy="nav-list"] [data-cy="list-item"]');
    await expect(items).toHaveCount(2);

    await expect(items.nth(0)).toContainText('01 intro');
    await expect(items.nth(1)).toContainText('02 syntax');
  });

  test('clicking a section expands it and reveals its lessons', async ({
    page,
  }) => {
    const firstSection = page
      .locator('[data-cy="nav-list"] [data-cy="list-item"]')
      .first();

    await expect(page.locator('[data-cy="open-item-true"]')).toHaveCount(0);

    await firstSection.click();

    const opened = page.locator('[data-cy="open-item-true"]');
    await expect(opened).toBeVisible();

    const subItems = opened.locator('[data-cy="sub-item"]');
    await expect(subItems).toHaveCount(2);
    await expect(subItems.nth(0)).toContainText('1 welcome');
  });

  test('clicking a lesson loads its markdown into the main pane', async ({
    page,
  }) => {
    const main = page.locator('[data-cy="main-container"]');

    await expect(main.locator('h1')).toContainText('Welcome');

    await page
      .locator('[data-cy="nav-list"] [data-cy="list-item"]')
      .first()
      .click();
    await page
      .locator('[data-cy="open-item-true"] [data-cy="sub-item"]')
      .nth(1)
      .click();

    await expect(main.locator('h1')).toContainText('Getting Started');
  });

  test('code blocks render with syntax highlighting and LTR direction', async ({
    page,
  }) => {
    const main = page.locator('[data-cy="main-container"]');
    const pre = main.locator('pre').first();

    await expect(pre).toBeVisible();

    const direction = await pre.evaluate(
      (el) => window.getComputedStyle(el).direction,
    );
    expect(direction).toBe('ltr');

    await expect(pre.locator('code')).toContainText('greeting');
  });

  test('switches sections without losing state', async ({ page }) => {
    await page
      .locator('[data-cy="nav-list"] [data-cy="list-item"]')
      .nth(1)
      .click();
    await page
      .locator('[data-cy="open-item-true"] [data-cy="sub-item"]')
      .first()
      .click();

    await expect(page.locator('[data-cy="main-container"] h1')).toContainText(
      'Syntax basics',
    );
  });
});
