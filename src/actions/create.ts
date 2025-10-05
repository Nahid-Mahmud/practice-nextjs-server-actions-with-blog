"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const backendUrl = process.env.NEXT_PUBLIC_API_URL;

async function createBlogPost(data: FormData) {
  const blogInfo = Object.fromEntries(data.entries());

  // Here you would typically save the blog post to your database
  const title = blogInfo.title;
  const content = blogInfo.content;
  const thumbnail = blogInfo.thumbnail;
  const isFeatured = blogInfo.isFeatured === "true";
  const tags = blogInfo.tags ? (blogInfo.tags as string).split(",").map((tag) => tag.trim()) : [];
  const authorId = 1; // Replace with actual author ID logic

  const modifiedData = { title, content, thumbnail, isFeatured, tags, authorId };

  const response = await fetch(`${backendUrl}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  if (!response.ok) {
    throw new Error("Failed to create blog post");
  }

  const result = await response.json();
  console.log("Blog post created successfully:", result);

  // Revalidate the cache for the home page

  if (response.ok) {
    // revalidatePath("/");
    revalidateTag("posts");
    redirect("/");
  }
}

export { createBlogPost };
