import type { MDXComponents } from 'mdx/types';

import { Bold, ChangelogEntry, CustomLink, H1, H2, H3, Ul } from '@/components/mdx';

import { ChangelogImage } from '@/components/mdx';

let customComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: (props: any) => {
    return <p className="mt-4 mb-8 text-gray-600" {...props} />;
  },
  Bold: Bold,
  ul: Ul,
  a: CustomLink,
  ChangelogEntry: ChangelogEntry,
  ChangelogImage: ChangelogImage,
};

export function useMDXComponents(components: MDXComponents) {
  return {
    ...customComponents,
    ...components,
  };
}
