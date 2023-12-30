import { client } from "./contentful-client";

export const getBlogEntries = async () => {
  const entries = await client.getEntries({ content_type: "post" });
  return entries;
};

