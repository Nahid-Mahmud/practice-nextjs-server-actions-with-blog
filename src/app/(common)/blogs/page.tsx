import envVariables from "@/config/envVariables";

export default async function BlobsPage() {
  const res = await fetch(`${envVariables.NEXT_PUBLIC_API_URL}/post`);
  return (
    <div>
      <h1 className="text-lg">This is page component</h1>
    </div>
  );
}
