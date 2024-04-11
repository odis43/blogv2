import { type ComponentPropsWithoutRef } from "react";

export function Heading(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className="flex max-w-full font-poppins text-7xl font-bold sm:text-8xl"
      {...props}
    />
  );
}
