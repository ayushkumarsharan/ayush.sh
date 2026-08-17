'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Activity, Sliders, Play, Pause, RefreshCw } from 'lucide-react';

export const QuantumCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [noiseLevel, setNoiseLevel] = useState<number>(45);
  const [isFilterActive, setIsFilterActive] = useState<boolean>(true);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [fidelityScore, setFidelityScore] = useState<number>(96.4);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Background subtle grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const step = 30;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw baseline center line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Signal parameters
      const numPoints = width;
      const centerY = height / 2;
      const amplitude = 50;

      // 1. Raw / Noisy Signal
      ctx.beginPath();
      ctx.strokeStyle = isFilterActive ? 'rgba(245, 158, 11, 0.35)' : 'rgba(245, 158, 11, 0.85)';
      ctx.lineWidth = 1.5;

      for (let i = 0; i < numPoints; i++) {
        const x = i;
        const pureWave = Math.sin((i * 0.035) + time) * amplitude + Math.cos((i * 0.018) - time * 0.7) * (amplitude * 0.4);
        const noise = (Math.sin(i * 12.3 + time * 5) * Math.cos(i * 4.7)) * (noiseLevel * 0.7);
        const y = centerY + pureWave + noise;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 2. Filtered / Quantum-Estimated Signal
      if (isFilterActive) {
        ctx.beginPath();
        ctx.strokeStyle = '#14b8a6';
        ctx.lineWidth = 2.5;

        for (let i = 0; i < numPoints; i++) {
          const x = i;
          // Reconstructed clean waveform with adaptive smoothing
          const pureWave = Math.sin((i * 0.035) + time) * amplitude + Math.cos((i * 0.018) - time * 0.7) * (amplitude * 0.4);
          const residualNoise = (Math.sin(i * 12.3 + time * 5) * Math.cos(i * 4.7)) * (noiseLevel * 0.08);
          const y = centerY + pureWave + residualNoise;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      if (isRunning) {
        time += 0.04;
        animationId = requestAnimationFrame(render);
      }
    };

    render();

    // Update estimated fidelity based on noise & filter
    const computed = isFilterActive ? 98.5 - (noiseLevel * 0.05) : 75.0 - (noiseLevel * 0.4);
    setFidelityScore(Math.max(10, Math.min(99.8, parseFloat(computed.toFixed(1)))));

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [noiseLevel, isFilterActive, isRunning]);

  return (
    <Card variant="elevated" padding="lg" style={{ backgroundColor: 'var(--bg-surface-elevated)', border: '1px solid var(--accent-border)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: 'var(--space-4)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <Activity size={16} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              Interactive Signal Fidelity Simulator
            </h3>
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-tertiary)' }}>
            Real-time visualization of stochastic channel noise vs. quantum-assisted neural estimation.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Badge variant={isFilterActive ? 'accent' : 'warm'} size="md">
            Fidelity: {fidelityScore}%
          </Badge>
          <Badge variant="subtle" size="md">
            Status: {isFilterActive ? 'ML Filter ON' : 'Raw Channel'}
          </Badge>
        </div>
      </div>

      {/* Canvas viewport */}
      <div
        style={{
          width: '100%',
          height: '240px',
          backgroundColor: '#0a0d12',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          marginBottom: 'var(--space-6)',
          border: '1px solid var(--border-medium)',
          position: 'relative',
        }}
      >
        <canvas
          ref={canvasRef}
          width={760}
          height={240}
          style={{ width: '100%', height: '100%', display: 'block' }}
        />

        {/* Legend Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '0.75rem',
            display: 'flex',
            gap: '0.75rem',
            backgroundColor: 'rgba(10, 13, 18, 0.85)',
            padding: '0.35rem 0.65rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.725rem',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            ● Noisy Channel
          </span>
          {isFilterActive && (
            <span style={{ color: '#14b8a6', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              ● Quantum-Estimated Output
            </span>
          )}
        </div>
      </div>

      {/* Interactive Controls */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'var(--space-6)',
          alignItems: 'center',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 'var(--space-4)',
        }}
      >
        {/* Slider */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Electromagnetic Noise:</span>
            <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{noiseLevel}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={noiseLevel}
            onChange={(e) => setNoiseLevel(Number(e.target.value))}
            style={{
              width: '100%',
              accentColor: 'var(--accent-primary)',
              cursor: 'pointer',
            }}
          />
        </div>

        {/* Action Toggles */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'flex-end' }}>
          <Button
            variant={isFilterActive ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setIsFilterActive((prev) => !prev)}
          >
            {isFilterActive ? 'Disable ML Filter' : 'Enable ML Filter'}
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsRunning((prev) => !prev)}
            icon={isRunning ? <Pause size={14} /> : <Play size={14} />}
          >
            {isRunning ? 'Pause Wave' : 'Resume'}
          </Button>
        </div>
      </div>
    </Card>
  );
};
