import envVariables from "@/config/envVariables";
import { Post } from "@/types/blog";
import BlogCard from "@/components/modules/BlogCard";

export default async function Home() {
  const res = await fetch(`${envVariables.NEXT_PUBLIC_API_URL}/post`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: posts }: { data: Post[] } = await res.json();
  return (
    <div>
      <h1 className="text-lg mb-4">This is page component</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
