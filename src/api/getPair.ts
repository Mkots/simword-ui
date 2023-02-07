import { IPair } from "../types";

export default async function getPair(
  id: string,
  tag?: string
): Promise<IPair> {
  const result = await fetch(
    `/api/pair/exercise?id=${id}${tag ? `&tag=${tag}` : ""}`
  );
  return result.json() as Promise<IPair>;
}
