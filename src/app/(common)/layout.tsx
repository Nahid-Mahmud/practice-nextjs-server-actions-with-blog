import Navbar from "@/components/modules/navbar";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
