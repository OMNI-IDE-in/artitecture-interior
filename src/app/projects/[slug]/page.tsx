import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProjectGalleryLightbox } from "@/components/project/ProjectGalleryLightbox";
import { PROJECTS } from "@/data/catalog";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.intros[0] || `${project.title} — ${project.categoryLabel} interior project in ${project.location}`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS[slug];
  if (!project) notFound();

  return (
    <main id="main">
      <section className="proj-hero">
        <div className="proj-hero__media">
          <img
            src={project.heroImage.src}
            srcSet={project.heroImage.srcset || undefined}
            sizes="100vw"
            alt={project.heroImage.alt}
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="proj-hero__scrim" />
        <div className="container proj-hero__inner">
          <nav className="proj-crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/portfolio">Portfolio</Link>
            <span aria-hidden="true">/</span>
            <span>{project.categoryLabel}</span>
          </nav>
          <h1 className="proj-hero__title">{project.title}</h1>
          <p className="proj-hero__loc">{project.location}</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <dl className="proj-facts reveal">
            {project.facts.map((fact) => (
              <div key={fact.label} className="proj-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="proj-overview">
            <div className="reveal reveal--left">
              <span className="section-label">The brief</span>
              <h2 className="section-title">
                Project <em>overview</em>
              </h2>
              {project.intros.map((para, i) => (
                <p key={i} className="proj-intro">
                  {para}
                </p>
              ))}
              <div className="proj-actions">
                <Link href={`/contact?ref=project_${project.slug}`} className="btn btn--accent">
                  <span>Start a project like this</span>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1={5} y1={12} x2={19} y2={12} />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <a
                  href={project.whatsappHref}
                  className="btn btn--outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Ask about this project</span>
                </a>
              </div>
            </div>

            <div className="reveal reveal--right">
              <h3 className="proj-scope__title">Areas designed</h3>
              <ul className="proj-scope">
                {project.areas.map((area) => (
                  <li key={area}>
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream" id="gallery">
        <div className="container">
          <div className="proj-gallery__head reveal">
            <div>
              <span className="section-label">Gallery</span>
              <h2 className="section-title">
                Every <em>view</em>
              </h2>
            </div>
            <p className="proj-gallery__hint">Select any image to view it full screen.</p>
          </div>
          <Suspense fallback={<div className="proj-gallery" />}>
            <ProjectGalleryLightbox shots={project.shots} />
          </Suspense>
        </div>
      </section>

      {project.nextProject ? (
        <section className="section">
          <div className="container">
            <Link href={`/projects/${project.nextProject.slug}`} className="proj-next reveal">
              <div className="proj-next__link">
                <div className="proj-next__body">
                  <span className="proj-next__label">Next project</span>
                  <h3 className="proj-next__name">{project.nextProject.title}</h3>
                  <p className="proj-next__loc">{project.nextProject.meta}</p>
                </div>
                <div className="proj-next__media">
                  <img
                    src={project.nextProject.thumb}
                    alt={project.nextProject.alt}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <section className="section section--cream">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Planning a similar space?
            </span>
            <h2 className="section-title">
              Let&apos;s Talk About <em>Yours</em>
            </h2>
            <p className="section-subtitle mx-auto mb-3">
              Tell us about your home or commercial space and we&apos;ll prepare a tailored design proposal and quotation.
            </p>
            <Link href="/contact" className="btn btn--accent btn--lg">
              <span>Book Free Consultation</span>
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
