import Nav from "@/reusable_components/Nav";
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:ml-[30%] sm:mt-16 sm:max-w-[45rem]">
      <Nav />
      <br />
      <div className="ml-[2%] ">
        {children}
      </div>
    </div>
  );
}
