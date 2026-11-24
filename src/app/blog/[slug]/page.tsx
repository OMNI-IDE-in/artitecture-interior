import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/catalog";
import { BLOG_ARTICLE_CONTENT } from "@/data/blogArticles";
import { assetUrl } from "@/lib/asset";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = BLOG_ARTICLE_CONTENT[slug];
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: content?.excerpt || post.title,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = BLOG_ARTICLE_CONTENT[slug];
  if (!post || !content) notFound();

  return (
    <main id="main">
      <section className="page-hero page-hero--image">
        <div aria-hidden="true" className="page-hero__media">
          <img
            alt=""
            decoding="async"
            fetchPriority="high"
            height={900}
            sizes="100vw"
            src={assetUrl("/assets/images/hero-living-room.webp")}
            width={1600}
          />
        </div>
        <div className="container">
          <span className="page-hero__label">
            {content.category} · {content.readTime}
          </span>
          <h1 className="page-hero__title">{post.title}</h1>
          <p className="page-hero__desc">{content.excerpt}</p>
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <Link href="/blog">Journal</Link>
            <span className="separator">/</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div
            className="reveal"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "2.5rem",
              padding: "24px",
              borderRadius: "16px",
              background: "var(--hp-cream)",
            }}
          >
            <img
              src={post.localImage || post.image}
              alt={post.title}
              width={112}
              height={112}
              style={{ borderRadius: "12px", objectFit: "cover", flexShrink: 0 }}
            />
            <div>
              <div className="hp-kick" style={{ marginBottom: 6 }}>
                Babell Group Editorial Atelier
              </div>
              <p style={{ color: "var(--hp-mut)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Published {post.date} · {content.readTime} · Architectural Planning Series
              </p>
            </div>
          </div>

          <div className="reveal" style={{ display: "grid", gap: "2rem" }}>
            {content.sections.map((sec) => (
              <div key={sec.heading}>
                <h2
                  style={{
                    fontFamily: "var(--ff-heading)",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 500,
                    color: "var(--hp-ink)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    style={{
                      color: "var(--clr-gray-700)",
                      lineHeight: 1.8,
                      fontSize: "1.02rem",
                      marginBottom: "0.85rem",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <div
              style={{
                padding: "28px",
                borderRadius: "16px",
                background: "var(--hp-cream)",
                border: "1px solid var(--hp-line)",
                marginTop: "0.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--ff-heading)",
                  fontSize: "1.45rem",
                  color: "var(--hp-teal)",
                  marginBottom: "1rem",
                }}
              >
                Key Atelier Takeaways
              </h3>
              <ul style={{ display: "grid", gap: "0.65rem", listStyle: "none", padding: 0 }}>
                {content.takeaways.map((t) => (
                  <li
                    key={t}
                    style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--hp-ink)" }}
                  >
                    <span style={{ color: "var(--hp-terra)", fontWeight: 700 }}>✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "1rem" }}>
              <Link href="/contact" className="btn btn--accent">
                <span>Book a Private Consultation</span>
              </Link>
              <Link href="/blog" className="btn btn--outline">
                <span>← Back to All Guides</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
