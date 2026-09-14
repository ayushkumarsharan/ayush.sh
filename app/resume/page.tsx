import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowLeft, Download, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '@/content/profile';

export const metadata = {
  title: 'Resume | Ayush Kumar Sharan',
  description: 'Professional Resume of Ayush Kumar Sharan',
};

export default function ResumePage() {
  return (
    <div className="animate-fade-in-up" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
          <Button href="/" variant="ghost" size="sm" icon={<ArrowLeft size={15} />}>
            Back to Universe
          </Button>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button 
              href="/AYUSH_RESUME(824)vApril26.pdf" 
              variant="primary" 
              size="sm" 
              icon={<Download size={15} />}
              target="_blank"
            >
              Download PDF
            </Button>
          </div>
        </div>

        {/* Resume Document */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(2rem, 5vw, 4rem)',
          boxShadow: 'var(--shadow-md)',
        }}>
          {/* Header */}
          <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '2rem', marginBottom: '2rem' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Ayush Kumar Sharan
            </h1>
            <div style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '1rem', marginBottom: '1.5rem' }}>
              SYSTEMS & AUTOMATION ENGINEER
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} /> ayuskumarsharan@gmail.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} /> +91 9667972192
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ExternalLink size={14} /> linkedin.com/in/ayush-kumar-sharan
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
              Systems and Automation Engineer working across software development, QA automation, cloud infrastructure, backend API validation, and production systems. I approach engineering problems end-to-end: understand the system, investigate failure modes, implement or automate a solution, and verify the result. Current work spans production sprint development and QA, including feature and bug-fix implementation, AI-assisted coding, Playwright automation, API validation, and release testing across fintech platforms.
            </p>
          </div>

          {/* Selected Impact */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Selected Impact
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
              <li style={{ listStyleType: 'disc' }}>4-5 feature and bug-fix tasks contributed per production sprint at M2P, alongside QA and release validation.</li>
              <li style={{ listStyleType: 'disc' }}>76% reduction in hosting costs through AWS/GCP infrastructure work for Pixel Streaming applications.</li>
              <li style={{ listStyleType: 'disc' }}>IEEE-published research in quantum-driven signal processing and ML.</li>
            </ul>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Professional Experience
            </h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>Quality Assurance Engineer</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>June 2024 – Present</span>
              </div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', marginBottom: '1rem' }}>M2P Fintech</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                <li style={{ listStyleType: 'disc' }}><strong>Hybrid Development & QA:</strong> Actively develop and commit 4-5 tasks (features & bug fixes) per sprint on production codebases, while concurrently executing QA validation, ensuring tight integration between implementation and testing.</li>
                <li style={{ listStyleType: 'disc' }}><strong>Test Automation:</strong> Designing and maintaining automated test suites using Playwright for core fintech application flows.</li>
                <li style={{ listStyleType: 'disc' }}><strong>API & Release Validation:</strong> Conducting rigorous manual API testing (Postman) and end-to-end regression testing to qualify staging releases for production deployment.</li>
                <li style={{ listStyleType: 'disc' }}><strong>AI-Assisted Workflows:</strong> Utilizing AI coding assistants to accelerate script generation, debug complex logic, and optimize QA automation architecture.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>System Engineering Intern</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>Jan 2024 – June 2024</span>
              </div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', marginBottom: '1rem' }}>Thales Group</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                <li style={{ listStyleType: 'disc' }}>Contributed to avionics software integration and systems validation workflows.</li>
                <li style={{ listStyleType: 'disc' }}>Authored system requirements and participated in technical specification reviews.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>Cloud Architecture Intern</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>May 2023 – Sep 2023</span>
              </div>
              <div style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', marginBottom: '1rem' }}>Tech Mahindra (Makers Lab)</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
                <li style={{ listStyleType: 'disc' }}><strong>Cloud Orchestration:</strong> Automated Unreal Engine pixel streaming deployments using WebRTC and Docker on AWS and GCP.</li>
                <li style={{ listStyleType: 'disc' }}><strong>Cost Optimization:</strong> Reduced continuous hosting costs by 76% by implementing dynamic spot-instance scaling and idle timeouts.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Education
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>Amity University, Noida</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>2020 – 2024</span>
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>Bachelor of Technology - Computer Science</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
              <li style={{ listStyleType: 'disc' }}><strong>Gold Medalist:</strong> 1st in Academic Standing (B.Tech CS, Evening Program).</li>
              <li style={{ listStyleType: 'disc' }}><strong>Shree Baljit Shastri Award:</strong> Recognized for exemplary human and traditional values.</li>
              <li style={{ listStyleType: 'disc' }}><strong>Research:</strong> Published "Quantum-Driven Signal Processing" in IEEE Xplore.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
