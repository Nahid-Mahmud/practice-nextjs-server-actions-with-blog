import envVariables from "@/config/envVariables";
import { Post } from "@/types/blog";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
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
}
