import Navbar from "@/components/modules/navbar";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
}
