/**
* @file This file is created automatically at build time.
* more info: https://docs.orgasmo.dev/
*/
import dynamic from "next/dynamic";
import Area from "@orgasmo/orgasmo/Area";
import ーorgasmoーadminーComponents from "@orgasmo/admin/Components"

const Components = {
  Area,
  ...ーorgasmoーadminーComponents,

  ArticleBody: dynamic(() => import("./components/ArticleBody.dynamic.jsx"), { suspense: true, loading: undefined }),
  ArticleLayout: dynamic(() => import("./components/ArticleLayout.dynamic.jsx"), { suspense: true, loading: undefined }),
  ArticleTitle: dynamic(() => import("./components/ArticleTitle.dynamic.jsx"), { suspense: true, loading: undefined }),
  Footer: dynamic(() => import("./components/Footer.dynamic.jsx"), { suspense: true, loading: undefined }),
  Header: dynamic(() => import("./components/Header.dynamic.jsx"), { suspense: true, loading: undefined }),
  Hero: dynamic(() => import("./components/Hero.dynamic.jsx"), { suspense: true, loading: undefined }),
  Image: dynamic(() => import("./components/Image.dynamic.jsx"), { suspense: true, loading: undefined }),
  Markdown: dynamic(() => import("./components/Markdown.dynamic.jsx"), { suspense: true, loading: undefined }),
  Parragraph: dynamic(() => import("./components/Parragraph.dynamic.jsx"), { suspense: true, loading: undefined }),
}

export default Components;
