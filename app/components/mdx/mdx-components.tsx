import CodeSnippetWithCopyIcon from "./code-snippet-with-copy-icon";
import Image from "next/image";

export const MdxComponents = {
  /** h1 colored in yellow */
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => <h1 className="text-3xl" {...props} />,
  pre: (props: React.HTMLProps<HTMLPreElement>) => <CodeSnippetWithCopyIcon {...props} />,
  Image: (props: any) => <Image {...props} />,
};
