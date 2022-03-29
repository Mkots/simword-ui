import { compare } from "../helpers/compareArrays";
import { expect, test } from "../fixtures/word.fixture";
import wordsTestData from "../../api/mirage/wordsTestData";

test("Example", async ({ word }) => {
  let variants: Array<string>;
  let title: string | null;
  const exercise = wordsTestData.exercises[0];

  await test.step("Arrange test", async () => {
    title = await word.title.textContent();
    variants = await word.variants.allInnerTexts();
  });

  await test.step("All variants should be rendered", async () => {
    expect(compare(variants, exercise.variants)).toBe(true);
  });

  await test.step("Title should be correct", async () => {
    expect(title).toBe(exercise.en);
  });

  await test.step("Next button exist and clickable", async () => {
    await expect(word.nextBtn).toBeVisible();
    const isButtonEnabled = await word.nextBtn.isEnabled();
    expect(isButtonEnabled).toBe(true);
  });

  await test.step("Click on correct should works", async () => {
    await word.variants.locator(`text=${exercise.correct}`).click();
    await expect(word.variants.locator(`text=${exercise.correct}`)).toHaveClass(
      /btn-success/
    );

    const scoreValue = await word.scoreValue.innerHTML();
    expect(scoreValue).toBe("1");

    const progressBarValue = await word.scoreBar
      .locator("progress")
      .getAttribute("value");
    expect(progressBarValue).toBe("1");
  });
});
