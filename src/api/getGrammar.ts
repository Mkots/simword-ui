import { IGrammar } from "../types";

export default async function getGrammar(
  id: string,
  tag?: number
): Promise<IGrammar> {
  const result = await fetch(
    `/api/grammar/exercise?id=${id}${tag ? `&tag=${tag}` : ""}`
  );
  return result.json() as Promise<IGrammar>;
}
