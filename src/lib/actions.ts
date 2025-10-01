"use server";

import { z } from "zod";
import envVariables from "@/config/envVariables";

const formSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title must be less than 200 characters"),
  content: z.string().min(1, "Content is required"),
  thumbnail: z.string().url("Thumbnail must be a valid URL"),
  isFeatured: z.boolean(),
  tags: z.string().min(1, "At least one tag is required"),
  authorId: z.number().int().positive("Author ID must be a positive integer"),
});

export async function createBlog(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    thumbnail: formData.get("thumbnail") as string,
    isFeatured: formData.get("isFeatured") === "on",
    tags: (formData.get("tags") as string).split(",").map((tag) => tag.trim()),
    authorId: parseInt(formData.get("authorId") as string),
  };

  // Validate the data
  const validatedData = formSchema.parse(data);

  // Call the API
  const res = await fetch(`${envVariables.NEXT_PUBLIC_API_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validatedData),
  });

  if (!res.ok) {
    throw new Error("Failed to create blog post");
  }

  return { success: true };
}
