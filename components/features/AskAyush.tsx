'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Send, X, Bot, User, ArrowRight, CornerDownLeft } from 'lucide-react';
import { aiKnowledgeBase, findAIAnswer, QAItem } from '@/content/ai-knowledge';
import { Badge } from '@/components/ui/Badge';

interface Message {
  sender: 'user' | 'assistant';
  text: string;
  citations?: { label: string; url: string }[];
}

export const AskAyush: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: "Hello! I am Ayush's interactive digital assistant. Ask me anything about his work in fintech automation, IEEE quantum research, cloud infrastructure, or creative pursuits.",
    },
  ]);

  const presetQuestions = [
    "What is Ayush's current role at M2P?",
    "Tell me about his IEEE-awarded quantum research.",
    "What are his core technical skills?",
    "What are his creative interests outside code?"
  ];

  const handleSend = (textToSend?: string) => {
    const q = textToSend || query;
    if (!q.trim()) return;

    const userMessage: Message = { sender: 'user', text: q };
    setMessages((prev) => [...prev, userMessage]);
    setQuery('');

    // Answer retrieval
    setTimeout(() => {
      const match = findAIAnswer(q);
      if (match) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'assistant',
            text: match.answer,
            citations: match.citations,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'assistant',
            text: "I don't have a specific record for that query in Ayush's factual archive, but feel free to explore his Work, Research Blueprint, or email him directly at ayuskumarsharan@gmail.com!",
            citations: [
              { label: 'View Experience', url: '/#work' },
              { label: 'View Research', url: '/research' },
            ],
          },
        ]);
      }
    }, 250);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(10px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          height: '80vh',
          maxHeight: '620px',
          backgroundColor: 'var(--bg-surface-elevated)',
          border: '1px solid var(--accent-border)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeInUp 0.15s ease-out',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1rem 1.25rem',
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-medium)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-subtle)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Sparkles size={16} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                Explore Ayush — AI Assistant
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--accent-primary)' }}>
                Factual knowledge engine • Zero hallucinations
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '0.25rem',
              color: 'var(--text-tertiary)',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat message body */}
        <div
          style={{
            flex: 1,
            padding: '1.25rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
              }}
            >
              {msg.sender === 'assistant' && (
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-surface-subtle)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.1rem',
                  }}
                >
                  <Bot size={15} />
                </div>
              )}

              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: msg.sender === 'user' ? 'var(--accent-primary)' : 'var(--bg-surface)',
                  color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  border: msg.sender === 'assistant' ? '1px solid var(--border-medium)' : 'none',
                }}
              >
                <div>{msg.text}</div>

                {msg.citations && msg.citations.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.625rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                    {msg.citations.map((c, i) => (
                      <Link
                        key={i}
                        href={c.url}
                        onClick={onClose}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-primary)',
                          textDecoration: 'underline',
                        }}
                      >
                        <span>{c.label}</span>
                        <ArrowRight size={11} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Preset Prompt Pills */}
        <div
          style={{
            padding: '0.5rem 1.25rem',
            backgroundColor: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            gap: '0.4rem',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {presetQuestions.map((pq, i) => (
            <button
              key={i}
              onClick={() => handleSend(pq)}
              style={{
                padding: '0.35rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {pq}
            </button>
          ))}
        </div>

        {/* Input bar */}
        <div
          style={{
            padding: '0.75rem 1.25rem',
            backgroundColor: 'var(--bg-surface)',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            placeholder="Ask anything about Ayush..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            style={{
              flex: 1,
              padding: '0.625rem 1rem',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
          <button
            onClick={() => handleSend()}
            style={{
              padding: '0.625rem 1rem',
              backgroundColor: 'var(--accent-primary)',
              color: '#ffffff',
              borderRadius: 'var(--radius-md)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
