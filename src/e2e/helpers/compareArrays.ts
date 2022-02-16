export const compare = (
  firstArray: string[],
  secondArray: string[]
): boolean => {
  const sorted2 = secondArray.sort().map((element) => element.toLowerCase());
  const sorted1 = firstArray.sort().map((element) => element.toLowerCase());

  // eslint-disable-next-line no-restricted-syntax
  for (const [index, element] of sorted1.entries()) {
    if (sorted2[index] !== element) return false;
  }
  return true;
};
