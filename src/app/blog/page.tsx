import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/catalog";
import { BLOG_ARTICLE_CONTENT } from "@/data/blogArticles";
import { assetUrl } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Journal & Design Guides",
  description:
    "Architectural planning guides from Babell Group on modular kitchens, custom wardrobes, false ceilings, independent residences, and turnkey delivery.",
};

export default function BlogPage() {
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
          <span className="page-hero__label">Editorial Journal</span>
          <h1 className="page-hero__title">
            Babell Group <em>Journal</em>
          </h1>
          <p className="page-hero__desc">
            Practical architectural planning guides on luxury home interiors, modular kitchens, joinery, lighting, and
            turnkey execution.
          </p>
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Atelier Publications
            </span>
            <h2 className="section-title">
              Practical Planning <em>Guides</em>
            </h2>
            <p className="section-subtitle mx-auto">
              Authored by Babell Group&apos;s architectural and execution leads for discerning homeowners and businesses.
            </p>
          </div>

          <div className="pf-projects" style={{ marginTop: "2.5rem" }}>
            {BLOG_POSTS.map((post) => {
              const article = BLOG_ARTICLE_CONTENT[post.slug];
              return (
                <article key={post.slug} className="pf-card reveal">
                  <Link href={`/blog/${post.slug}`} className="pf-card__link">
                    <div className="pf-card__media">
                      <img
                        src={post.localImage || post.image}
                        alt={post.title}
                        width={600}
                        height={600}
                        loading="lazy"
                      />
                      <span className="pf-card__count">
                        {article ? `${article.readTime} · ${post.date}` : post.date}
                      </span>
                    </div>
                    <div className="pf-card__body">
                      <span className="pf-card__type">{article?.category || "Design Guide"}</span>
                      <h3 className="pf-card__name">{post.title}</h3>
                      <span className="pf-card__cta">
                        Read guide{" "}
                        <svg
                          aria-hidden="true"
                          fill="none"
                          height={15}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                          width={15}
                        >
                          <line x1={5} x2={19} y1={12} y2={12} />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
