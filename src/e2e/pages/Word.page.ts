import { Locator, Page } from "@playwright/test";

export class Word {
  readonly page: Page;

  readonly title: Locator;
  readonly variants: Locator;
  readonly nextBtn: Locator;
  readonly scoreValue: Locator;
  readonly scoreBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-testid="title"]');
    this.variants = page.locator('[data-testid="QuizVariant"]');
    this.nextBtn = page.locator('[aria-label="Next"]');
    this.scoreValue = page.locator('[data-testid="score-value"]');
    this.scoreBar = page.locator('[data-testid="score-bar"]');
  }

  async navigate(): Promise<void> {
    await this.page.goto("/");
  }
}
