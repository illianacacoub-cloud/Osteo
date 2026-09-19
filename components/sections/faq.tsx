'use client'

import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

import { faq } from '@/lib/content'

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section" id="questions">
      <div className="container container-narrow">
        <p className="eyebrow">Questions</p>
        <h2>Questions fréquentes</h2>

        <ul className="faq-list">
          {faq.map(({ question, answer }, index) => {
            const isOpen = open === index
            return (
              <li key={question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span>{question}</span>
                  {isOpen ? (
                    <Minus size={17} strokeWidth={1.6} aria-hidden="true" />
                  ) : (
                    <Plus size={17} strokeWidth={1.6} aria-hidden="true" />
                  )}
                </button>
                <div
                  className="faq-panel"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  hidden={!isOpen}
                >
                  <p>{answer}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
