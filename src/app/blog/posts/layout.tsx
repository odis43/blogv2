import Nav from "@/reusable_components/Nav";
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-[30%] mt-16 max-w-[45rem]">
      <Nav />
      <br />
      {children}
    </div>
  );
}
