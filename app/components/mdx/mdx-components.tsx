import CodeSnippetWithCopyIcon from "./code-snippet-with-copy-icon";
import Image from "next/image";
import Link from "next/link";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export const MdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => <h1 className="text-3xl" {...props} />,
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => {
    if (props.id) {
      return (
        <Link className="no-underline" href={`#${props.id}`}>
          <h2 {...props} />
        </Link>
      );
    }
    return <h2 {...props} />;
  },
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => {
    if (props.id) {
      return (
        <Link className="no-underline" href={`#${props.id}`}>
          <h3 {...props} />
        </Link>
      );
    }
    return <h3 {...props} />;
  },
  h4: (props: React.HTMLProps<HTMLHeadingElement>) => {
    if (props.id) {
      return (
        <Link className="no-underline" href={`#${props.id}`}>
          <h4 {...props} />
        </Link>
      );
    }
    return <h4 {...props} />;
  },
  h5: (props: React.HTMLProps<HTMLHeadingElement>) => {
    if (props.id) {
      return (
        <Link className="no-underline" href={`#${props.id}`}>
          <h5 {...props} />
        </Link>
      );
    }
    return <h5 {...props} />;
  },
  h6: (props: React.HTMLProps<HTMLHeadingElement>) => {
    if (props.id) {
      return (
        <Link className="no-underline" href={`#${props.id}`}>
          <h6 className="text-3xl" {...props} />
        </Link>
      );
    }
    return <h6 className="text-3xl" {...props} />;
  },
  pre: (props: React.HTMLProps<HTMLPreElement>) => <CodeSnippetWithCopyIcon {...props} />,
  code: (props: React.HTMLProps<HTMLPreElement>) => <code {...props} className="before:hidden after:hidden text-neutral-300 p-[2px] font-thin " />,
  /* eslint-disable @typescript-eslint/no-explicit-any */
  Image: (props: any) => <Image {...props} />,
};

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: "vitesse-dark",
};
export const MdxOptions = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions], rehypeSlug],
  },
};
