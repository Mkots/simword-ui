import { IReviser } from "../types";

export default async function getRevise(
  id: string,
  tag?: number
): Promise<IReviser> {
  const result = await fetch(
    `/api/revise/exercise?id=${id}${tag ? `&tag=${tag}` : ""}`
  );
  return result.json() as Promise<IReviser>;
}
