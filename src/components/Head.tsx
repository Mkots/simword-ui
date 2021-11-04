import { FC, useEffect } from "react";

interface Properties {
  title: string;
}
const Head: FC<Properties> = (properties: Properties) => {
  const { title } = properties;
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default Head;
