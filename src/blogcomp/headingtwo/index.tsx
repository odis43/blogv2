import { type ComponentPropsWithoutRef } from "react";

export function HeadingTwo(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h2 className="font-poppins max-w-full text-5xl font-bold" {...props} />
  );
}
