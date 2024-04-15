import { type ComponentPropsWithoutRef } from "react";

export function Heading(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className="sm:flex sm:max-w-full font-poppins text-6xl sm:text-7xl font-bold sm:text-8xl"
      {...props}
    />
  );
}
