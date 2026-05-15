import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ol: (props) => <ol className="list-decimal pl-6 my-6 space-y-3 marker:text-fd-muted-foreground" {...props} />,
    ul: (props) => <ul className="list-disc pl-6 my-6 space-y-2 marker:text-fd-muted-foreground" {...props} />,
    li: (props) => <li className="pl-1" {...props} />,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
