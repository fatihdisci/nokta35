import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { POSTS, getPostBySlug, getRelatedPosts } from "@/content/blog"
import { breadcrumbJsonLd, faqJsonLd, JsonLdScript } from "@/lib/jsonLd"
import { FaqSection } from "@/components/widgets/FaqSection"

export const dynamicParams = false

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: "Yazı bulunamadı" }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  }
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch {
    return iso
  }
}

function articleJsonLd(post: { title: string; description: string; date: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "nokta35" },
    publisher: { "@type": "Organization", name: "nokta35" },
    mainEntityOfPage: `https://nokta35.com/blog/${post.slug}`,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, 3)
  const Body = post.Body

  const breadcrumb = breadcrumbJsonLd([
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ])

  const jsonLdData: Record<string, unknown>[] = [
    breadcrumb as Record<string, unknown>,
    articleJsonLd(post) as Record<string, unknown>,
  ]
  if (post.faq && post.faq.length > 0) {
    jsonLdData.push(faqJsonLd(post.faq) as Record<string, unknown>)
  }

  return (
    <>
      <JsonLdScript data={jsonLdData} />

      <article className="container py-8 md:py-12">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray mb-3">
          <Link href="/blog" className="hover:text-orange transition-colors">
            Blog
          </Link>
          {" · "}
          {post.category}
        </div>

        <header className="border-b-2 border-ink pb-5 mb-8">
          <h1 className="font-serif-display text-4xl md:text-5xl leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.2em] text-gray font-mono">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} dk okuma</span>
            <span>·</span>
            <span>{post.category}</span>
          </div>
        </header>

        <div className="blog-prose">
          <Body />
        </div>

        <footer className="mt-12 pt-6 border-t-2 border-ink">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray leading-relaxed max-w-2xl">
            Bu yazı genel bilgi amaçlıdır; tıbbi, hukuki veya teknik tavsiye
            niteliği taşımaz. Sağlık ve afet durumlarında resmi kurum
            duyurularını esas alınız.
          </p>
        </footer>
      </article>

      {post.faq && post.faq.length > 0 && (
        <FaqSection items={post.faq} />
      )}

      {related.length > 0 && (
        <section className="container pb-16 pt-8">
          <h2 className="font-serif-display text-2xl mb-4 border-b border-ink pb-1">
            İlgili yazılar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="border-2 border-light-gray hover:border-ink bg-cream p-4 transition-colors"
              >
                <span className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 bg-ink text-cream inline-block mb-2">
                  {p.category}
                </span>
                <h3 className="font-serif-display text-lg leading-snug">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
