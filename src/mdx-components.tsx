import type { MDXComponents } from "mdx/types";
import { Heading } from "./blogcomp/heading";
import { HeadingTwo } from "./blogcomp/headingtwo";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading,
    h2: HeadingTwo,
    ...components,
  };
}
