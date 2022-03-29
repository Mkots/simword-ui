import { test as base } from "@playwright/test";
import { Word } from "../pages/Word.page";
import wordsTestData from "../../api/mirage/wordsTestData";

type WordFixture = {
  word: Word;
};

export const test = base.extend<WordFixture>({
  word: async ({ page }, use) => {
    const word = new Word(page);
    await word.navigate();

    await use(word);
  },
  page: async ({ page }, use) => {
    await page.route("/api/exercise*", (route) => {
      void route.fulfill({
        body: JSON.stringify({ exercise: wordsTestData.exercises[0] }),
      });
    });

    await page.route("/api/taglist", (route) => {
      void route.fulfill({
        body: JSON.stringify({ tags: [10, 20, 30, 40, 50] }),
      });
    });

    await use(page);
  },
});
export { expect } from "@playwright/test";
