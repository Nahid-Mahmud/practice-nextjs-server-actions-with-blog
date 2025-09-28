import envVariables from "@/config/envVariables";
import { Post } from "@/types/blog";
import BlogCard from "@/components/modules/BlogCard";

export default async function BlobsPage() {
  const res = await fetch(`${envVariables.NEXT_PUBLIC_API_URL}/post`, {
    cache: "no-store",
  });
  const { data: posts }: { data: Post[] } = await res.json();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
