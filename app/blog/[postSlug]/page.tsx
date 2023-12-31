
import BlogMarkdown from "@/components/markdown";
import TableOfContents from "@/components/table-content";
import { client } from "@/lib/contentful/contentful-client";

import React from "react";

const PostDetailPage = async ({ params }: { params: { postSlug: string } }) => {

  const post = await client.getEntries({ content_type: "post", "fields.slug": params.postSlug });
  console.log(post.items[0].fields.extradata);

  if (!post.items[0]) return null
  return <div className="min-h-[300px] max-w-4xl mx-auto py-6 ">
    <div className="">
      <p className="text-sm font-secondary text-gray-500">#CODE</p>
      <h2 className="text-5xl font-[500] font-secondary  block pb-2">{post.items[0].fields?.title as String}</h2>
      <p className="text-4xl font-secondary pb-4 text-gray-500">{post.items[0].fields?.title as String}</p>
      <div className="flex text-gray-400 font-primary text-xs gap-x-10">
        <p>{post.items[0].sys.createdAt}</p>
        <p>. 2 Likes</p>
        <p>~ 4mn Read</p>
      </div>
    </div>

    <div className="">
      <article className="post postFull">
        <TableOfContents markdown={post.items[0].fields.extradata as string} />
        <BlogMarkdown markdown={post.items[0].fields.extradata as string} />

      </article>
    </div>


  </div>;
};

export default PostDetailPage;
