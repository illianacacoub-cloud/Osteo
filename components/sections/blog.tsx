import { ArrowUpRight, BookOpen, MapPin } from 'lucide-react'

import {
  BLOG_AUTHOR,
  BLOG_DISCLAIMER_BODY,
  BLOG_DISCLAIMER_LABEL,
  blogArticles,
} from '@/lib/content'

export function Blog() {
  return (
    <section className="blog-section" id="blog" aria-labelledby="blog-title">
      <div className="container">
        <div className="blog-intro">
          <div>
            <p className="section-kicker"><BookOpen size={14} aria-hidden="true" /> Le blog</p>
            <h2 id="blog-title">Comprendre son corps,<br />prendre soin de sa mobilité.</h2>
          </div>
          <p className="blog-intro-copy">Des repères simples et concrets pour mieux comprendre l’ostéopathie et prendre soin de votre équilibre au quotidien.</p>
        </div>

        <div className="blog-list">
          {blogArticles.map((article) => (
            <article className="blog-card" key={article.slug}>
              <div className="blog-card-image">
                <img src={article.image} alt={article.alt} />
                <span className="blog-card-label">{article.label}</span>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span>{article.date}</span>
                  <span className="blog-meta-dot" aria-hidden="true" />
                  <span><MapPin size={13} aria-hidden="true" /> {article.place}</span>
                </div>
                <h3>{article.title}</h3>
                <p className="blog-excerpt">{article.excerpt}</p>
                <p className="blog-author">{BLOG_AUTHOR}</p>

                <details className="blog-details">
                  <summary>Lire l’article <ArrowUpRight size={16} aria-hidden="true" /></summary>
                  <div className="blog-full-article">
                    {article.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {article.sections.map((section, index) => (
                      <section key={section.title ?? `section-${index}`}>
                        {section.title && <h4>{section.title}</h4>}
                        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        {section.items && (
                          <ul>
                            {section.items.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        )}
                      </section>
                    ))}
                    <p className="blog-disclaimer">
                      <strong>{BLOG_DISCLAIMER_LABEL} :</strong> {BLOG_DISCLAIMER_BODY}
                    </p>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
