import Article from "@/modules/blog/components/article.componets";
import Layout from "@/modules/layouts/layout";
import Image from "next/image";
import React from "react";

export default function PageBlog() {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Article />
        <Article />
        <Article />
      </section>
    </Layout>
  );
}
