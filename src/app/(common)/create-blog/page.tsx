"use client";
import { createBlogPost } from "@/actions/create";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Form from "next/form";
import { useState } from "react";

export default function CreateBlogPage() {
  const [isFeatured, setIsFeatured] = useState("false");
  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
          <CardDescription>Fill in the details to create a new blog post.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form action={createBlogPost} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter blog title"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />

              <p className="mt-1 text-sm text-gray-500">The title of your blog post.</p>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                placeholder="Write your blog content here..."
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                rows={5}
                required
              />

              <p className="mt-1 text-sm text-gray-500">The main content of your blog post.</p>
            </div>

            <div>
              <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
                Thumbnail URL
              </label>
              <input
                type="url"
                id="thumbnail"
                name="thumbnail"
                placeholder="https://example.com/image.jpg"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />

              <p className="mt-1 text-sm text-gray-500">URL of the thumbnail image for your blog post.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Featured Post</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="isFeaturedFalse"
                    name="isFeatured"
                    value="false"
                    checked={isFeatured === "false"}
                    onChange={(e) => setIsFeatured(e.target.value)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="isFeaturedFalse" className="ml-2 block text-sm text-gray-900">
                    Not Featured
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="isFeaturedTrue"
                    name="isFeatured"
                    value="true"
                    checked={isFeatured === "true"}
                    onChange={(e) => setIsFeatured(e.target.value)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <label htmlFor="isFeaturedTrue" className="ml-2 block text-sm text-gray-900">
                    Featured
                  </label>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500">Mark this post as featured.</p>
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Next.js, React, Web Development"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />

              <p className="mt-1 text-sm text-gray-500">Comma-separated list of tags for your blog post.</p>
            </div>

            <Button type="submit" className="w-full">
              Create Blog Post
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
