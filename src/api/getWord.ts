import { IWord } from "types";

export default async function getWord(
  id: string,
  tag?: number
): Promise<IWord> {
  const result = await fetch(
    `/api/exercise?id=${id}${tag ? `&tag=${tag}` : ""}`
  );
  return result.json() as Promise<IWord>;
}
