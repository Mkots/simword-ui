import { StrapiGrammar } from "../types";

export default async function getGrammar(
  id: number,
  token: string | null
): Promise<StrapiGrammar> {
  const result = await fetch(
    `http://localhost:1337/api/grammar-exercises/${id}?populate=Option`,
    {
      headers: new Headers({
        Authorization: `Bearer ${token || ""}`,
      }),
    }
  );
  return result.json() as Promise<StrapiGrammar>;
}
