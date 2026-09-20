'use client';
import React from 'react';
import { Artifact } from '@/components/ui/Artifact';

export const Experience: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', borderTop: '1px solid var(--border-subtle)' }}>
      <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', marginBottom: '4rem' }}>Work & Evidence</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {/* M2P */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>M2P Fintech</h3>
            <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Product Engineering / QA & Automation &middot; 2025 - Present</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Production-grade fintech platform validation. Testing and verifying Transactions, Merchants, EMI, and Settlement flows. 
              Built E2E automation using Playwright and TypeScript with Page Object Models.
            </p>
          </div>
          <Artifact type="system" title="Authentication & Verification Flow" context="E2E Architecture">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
              <div>[POST] /auth/merchant -{'>'} 200 OK</div>
              <div style={{ paddingLeft: '1rem', borderLeft: '1px solid var(--border-medium)' }}>
                Verifying dynamic MUI DataGrid...<br/>
                Asserting settlement state...<br/>
                <span style={{ color: 'var(--accent-primary)' }}>PASS (1.2s)</span>
              </div>
            </div>
          </Artifact>
        </div>

        {/* Tech Mahindra */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }}>
          <Artifact type="evidence" title="Cost Optimization" context="Pixel Streaming Infra">
             <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
               <span style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', lineHeight: 1 }}>76%</span>
               <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginTop: '1rem' }}>Reduction in continuous hosting costs</span>
             </div>
          </Artifact>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Tech Mahindra Makers Lab</h3>
            <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Cloud / Game Development &middot; Jun 2023 - Sep 2023</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Architected cloud infrastructure across AWS and GCP for Unreal Engine Pixel Streaming applications. Also curated localized AI/LLM datasets (Indus LLM).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
