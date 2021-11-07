import { IGap } from "types";

export default async function getGap(id: string, tag?: number): Promise<IGap> {
  const result = await fetch(
    `/api/gaps/exercise?id=${id}${tag ? `&tag=${tag}` : ""}`
  );
  return result.json() as Promise<IGap>;
}
