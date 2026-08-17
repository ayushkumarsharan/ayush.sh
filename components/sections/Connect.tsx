'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { profile } from '@/content/profile';
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react';

const LinkedinIcon = ({ size = 22, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Connect: React.FC = () => {
  return (
    <section id="connect" className="section-wrapper">
      <div className="container">
        <SectionHeading
          number="10"
          label="The Connect"
          title="Let's Start a Conversation"
          subtitle="Whether you want to talk about fintech automation, cloud reliability, quantum research, or creative tools—my inbox is always open."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-12)',
          }}
        >
          {/* Email Direct Card */}
          <Card variant="elevated" padding="lg" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-flex', padding: '0.625rem', backgroundColor: 'var(--accent-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--accent-primary)', marginBottom: 'var(--space-4)' }}>
                <Mail size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Email
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>
                Direct and responsive for engineering inquiries.
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-primary)', wordBreak: 'break-all', marginBottom: 'var(--space-6)' }}>
                {profile.email}
              </div>
            </div>

            <Button href={`mailto:${profile.email}`} variant="primary" size="sm" icon={<Send size={14} />}>
              Send an Email
            </Button>
          </Card>

          {/* LinkedIn Direct Card */}
          <Card variant="elevated" padding="lg" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-flex', padding: '0.625rem', backgroundColor: 'var(--accent-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--accent-primary)', marginBottom: 'var(--space-4)' }}>
                <LinkedinIcon size={22} color="var(--accent-primary)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                LinkedIn
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>
                Professional network and updates.
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-primary)', wordBreak: 'break-all', marginBottom: 'var(--space-6)' }}>
                linkedin.com/in/ayush-kumar-sharan
              </div>
            </div>

            <Button href={profile.linkedin} external variant="secondary" size="sm" icon={<ArrowUpRight size={14} />} iconPosition="right">
              View Profile
            </Button>
          </Card>

          {/* Phone / WhatsApp Card */}
          <Card variant="elevated" padding="lg" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-flex', padding: '0.625rem', backgroundColor: 'var(--accent-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--accent-primary)', marginBottom: 'var(--space-4)' }}>
                <Phone size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Phone
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>
                Available during standard Indian working hours.
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: 'var(--space-6)' }}>
                {profile.phone}
              </div>
            </div>

            <Button href={`tel:${profile.phone}`} variant="outline" size="sm">
              Call Direct
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
