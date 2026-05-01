"use client";


import { BlogGrid } from "@/components/blog/blog-grid";
import { Container } from "@/components/ui/container";
import { BLOG_PROJECTS } from "@/components/blog/blog-data";
export function BlogShowcase() {
  return (
    <section className="py-10">
      <Container>
        <BlogGrid projects={BLOG_PROJECTS} />
      </Container>
    </section>
  );
}