'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Server, Database, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export const InteractiveLab: React.FC<{ type: 'network' | 'system' | 'qa' | 'quantum' }> = ({ type }) => {
  if (type === 'network') return <NetworkSim />;
  if (type === 'system') return <SystemDiag />;
  if (type === 'qa') return <QASim />;
  if (type === 'quantum') return <QuantumSim />;
  return null;
};

// --- Network Sim ---
const NetworkSim = () => {
  const [packets, setPackets] = useState<{ id: number; progress: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPackets(prev => prev
        .map(p => ({ ...p, progress: p.progress + 10 }))
        .filter(p => p.progress < 100)
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const sendPacket = () => {
    setPackets(prev => [...prev, { id: Date.now(), progress: 0 }]);
  };

  return (
    <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)' }}>Packet Routing Sim</span>
        <button 
          onClick={sendPacket}
          style={{ padding: '0.2rem 0.5rem', background: 'var(--accent-subtle)', color: 'var(--accent-primary)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.7rem', cursor: 'pointer' }}
        >
          Send Packet
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px', position: 'relative' }}>
        <div style={{ padding: '0.5rem', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: '50%' }}><Server size={16} /></div>
        
        {/* Track */}
        <div style={{ flex: 1, height: '2px', background: 'var(--border-subtle)', margin: '0 1rem', position: 'relative' }}>
          {packets.map(p => (
            <div key={p.id} style={{ 
              position: 'absolute', 
              top: '50%', 
              left: `${p.progress}%`, 
              transform: 'translate(-50%, -50%)',
              width: '6px', 
              height: '6px', 
              borderRadius: '50%', 
              background: 'var(--accent-primary)',
              boxShadow: '0 0 8px var(--accent-glow)'
            }} />
          ))}
        </div>

        <div style={{ padding: '0.5rem', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: '50%' }}><Database size={16} /></div>
      </div>
    </div>
  );
};

// --- System Architecture ---
const SystemDiag = () => {
  return (
    <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
       <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>System Architecture Map</div>
       <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
         {['Client Layer', 'API Gateway', 'Microservices', 'Message Queue', 'Data Store'].map((layer, i) => (
           <div key={i} style={{ 
             padding: '0.5rem', 
             background: 'var(--bg-surface-elevated)', 
             border: '1px solid var(--border-medium)', 
             borderRadius: 'var(--radius-sm)',
             fontSize: '0.8rem',
             color: 'var(--text-secondary)',
             textAlign: 'center',
             cursor: 'pointer'
           }} className="interactive-hover">
             {layer}
           </div>
         ))}
       </div>
    </div>
  )
};

// --- QA Sim ---
const QASim = () => {
  const [running, setRunning] = useState(false);
  const [tests, setTests] = useState([
    { name: 'Auth Flow', status: 'idle' },
    { name: 'Checkout API', status: 'idle' },
    { name: 'Data Sync', status: 'idle' }
  ]);

  const runTests = () => {
    if (running) return;
    setRunning(true);
    setTests(tests.map(t => ({ ...t, status: 'running' })));
    
    tests.forEach((t, i) => {
      setTimeout(() => {
        setTests(prev => prev.map((pt, idx) => idx === i ? { ...pt, status: Math.random() > 0.2 ? 'pass' : 'fail' } : pt));
        if (i === tests.length - 1) setRunning(false);
      }, (i + 1) * 800);
    });
  };

  return (
    <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)' }}>E2E Test Runner</span>
        <button 
          onClick={runTests}
          disabled={running}
          style={{ padding: '0.2rem 0.5rem', background: 'var(--accent-subtle)', color: 'var(--accent-primary)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.7rem', cursor: running ? 'not-allowed' : 'pointer' }}
        >
          {running ? 'Running...' : 'Run Suite'}
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {tests.map((t, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.name}</span>
            {t.status === 'idle' && <span style={{ width: 14, height: 14, borderRadius: '50%', border: '1px solid var(--border-medium)' }} />}
            {t.status === 'running' && <Loader2 size={14} style={{ color: 'var(--accent-primary)', animation: 'spin 1s linear infinite' }} />}
            {t.status === 'pass' && <CheckCircle2 size={14} style={{ color: '#10b981' }} />}
            {t.status === 'fail' && <XCircle size={14} style={{ color: '#ef4444' }} />}
          </div>
        ))}
      </div>
      <style jsx>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </div>
  )
};

// --- Quantum Sim ---
const QuantumSim = () => {
  return (
    <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Qubit Superposition (Mock)</div>
      <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '1px dashed var(--accent-primary)', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'spin 10s linear infinite' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-primary)', opacity: 0.5, filter: 'blur(10px)' }} />
      </div>
      <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginTop: '1rem' }}>Conceptual simulation only.</div>
      <style jsx>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </div>
  )
};
