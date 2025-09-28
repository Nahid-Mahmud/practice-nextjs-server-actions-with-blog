import envVariables from "@/config/envVariables";
import { Post } from "@/types/blog";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Fetch posts safely for static generation
export async function generateStaticParams() {
  try {
    const res = await fetch(`${envVariables.NEXT_PUBLIC_API_URL}/post`);
    const data = await res.json();

    // Handle API returning array or object with posts key
    const posts: Post[] = Array.isArray(data) ? data : data.data || [];

    // Only pre-render first 2 posts (adjust as needed)
    return posts.slice(0, 2).map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch posts for static generation:", error);
    return []; // Fallback to no static pages if fetch fails
  }
}

// Blog details page
export default async function BlogDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const res = await fetch(`${envVariables.NEXT_PUBLIC_API_URL}/post/${id}`);
    const blog: Post = await res.json();

    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <Card>
          <CardHeader>
            <div className="mb-4">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <CardTitle className="text-3xl font-bold">{blog.title}</CardTitle>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>By {blog.author.name}</span>
              <span>•</span>
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              <span>•</span>
              <span>{blog.views} views</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none mb-6">
              <p className="text-lg leading-relaxed">{blog.content}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    console.error(`Failed to fetch blog with id ${id}:`, error);
    return <p className="text-center text-red-500 mt-8">Failed to load blog post.</p>;
  }
}
