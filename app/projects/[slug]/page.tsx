import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ProjectVisualizer } from '@/components/features/ProjectVisualizer';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div 
      className="project-page" 
      style={{ 
        minHeight: '100vh', 
        paddingTop: '8rem', 
        paddingBottom: '8rem',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        <Link 
          href="/#artifacts" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            marginBottom: '4rem',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
        >
          <ArrowLeft size={16} />
          Back to Artifacts
        </Link>

        <header style={{ marginBottom: '4rem' }}>
          <h1 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem'
            }}
          >
            {project.title}
          </h1>
          <p 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.25rem',
              color: 'var(--accent-primary)',
              maxWidth: '800px',
              lineHeight: 1.6
            }}
          >
            {project.summary}
          </p>
        </header>

        <div style={{ marginBottom: '6rem' }}>
          <ProjectVisualizer slug={project.slug} />
        </div>

        {project.caseStudy && (
          <div style={{ display: 'grid', gap: '6rem' }}>
            {project.caseStudy.overview && (
              <section>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>Overview</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--text-primary)' }}>
                  {project.caseStudy.overview}
                </p>
              </section>
            )}

            {project.caseStudy.architecture && (
              <section>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>Architecture</h2>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>
                  {project.caseStudy.architecture}
                </div>
              </section>
            )}

            {project.caseStudy.outcomes && project.caseStudy.outcomes.length > 0 && (
              <section>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>Outcomes</h2>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                  {project.caseStudy.outcomes.map((outcome, i) => (
                    <li key={i} style={{ 
                      fontFamily: 'var(--font-body)', 
                      fontSize: '1.15rem', 
                      lineHeight: 1.8, 
                      color: 'var(--text-primary)',
                      padding: '1.5rem',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
