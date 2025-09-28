import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/blog";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card key={post.id}>
      <CardHeader>
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-2">{post.content}</CardDescription>
        <p className="text-sm text-muted-foreground">By {post.author.name}</p>
        <p className="text-sm text-muted-foreground">Tags: {post.tags.join(", ")}</p>
      </CardContent>
    </Card>
  );
}
