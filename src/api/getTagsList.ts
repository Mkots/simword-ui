import { TagList } from "types";

export default async function getTagsList(): Promise<TagList> {
  const result = await fetch(`/api/taglist`);
  return result.json() as Promise<TagList>;
}
