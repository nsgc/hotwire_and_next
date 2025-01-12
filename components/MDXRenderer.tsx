import React from "react";
import {a, h2, h3, h4, ol, p, ul} from "@/components/MDXComponents";
import {MDXProvider} from "@mdx-js/react";

const components = {
  h2: h2,
  h3: h3,
  h4: h4,
  p: p,
  a: a,
  ul: ul,
  ol: ol,
}

export default function MDXRenderer({children}: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      <div className="mdx">
        {children}
      </div>
    </MDXProvider>
  )
}
