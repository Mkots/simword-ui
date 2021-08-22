import { IWord } from "../types";

export default async function getWord(id: string): Promise<IWord> {
  const result = await fetch(`/api/exercise?id=${id}`);
  return result.json() as Promise<IWord>;
}
