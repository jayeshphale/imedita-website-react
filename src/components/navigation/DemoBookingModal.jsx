import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, ShieldCheck } from 'lucide-react';

const coursesList = [
  'Cisco CCNA (200-301) & Enterprise Security',
  'CCNP Security & Network Engineering',
  'Job Guarantee Network Security Track',
  'Palo Alto Networks Firewall (PCNSE)',
  'Fortinet FortiGate Firewall (NSE 4-7)',
  'Check Point Quantum Security (CCSA)',
  'EC-Council CEH v13 (Certified Ethical Hacker)',
  'AWS Advanced Cloud Networking'
];

export const DemoBookingModal = ({ isOpen, onClose, preselectedCourse = '' }) => {
  const [course, setCourse] = useState(preselectedCourse || coursesList[0]);
  const [mode, setMode] = useState('classroom');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '16px'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        width: '100%',
        maxWidth: '520px',
        maxHeight: 'calc(100vh - 32px)',
        overflowY: 'auto',
        position: 'relative'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #F1F5F9',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: '#F8FAFC'
        }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', margin: 0 }}>
              {submitted ? 'Demo Slot Reserved!' : 'Book Free 2-Hour Practical Demo'}
            </h3>
            <p style={{ fontSize: '13px', color: '#64748B', margin: '4px 0 0' }}>
              {submitted ? 'Your instructor orientation details have been dispatched.' : 'Experience real Cisco rack hardware before paying any fees.'}
            </p>
          </div>
          <button
            type="button"
            onClick={submitted ? handleReset : onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '6px',
              display: 'flex'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '12px 0' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#ECFDF5',
                border: '2px solid #10B981',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ color: '#0F172A', fontSize: '19px', fontWeight: 700, marginBottom: '6px' }}>
                Congratulations, {name}!
              </h4>
              <p style={{ color: '#64748B', fontSize: '13.5px', marginBottom: '20px', lineHeight: 1.5 }}>
                Our Senior CCIE Career Counselor has reserved your seat for the upcoming demo batch. You will receive an SMS and WhatsApp invitation with rack access credentials.
              </p>
              <div style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                padding: '14px',
                marginBottom: '20px',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0B63E5', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                  <Calendar size={15} /> Next Session: Tomorrow at 11:00 AM IST
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '12.5px' }}>
                  <MapPin size={15} /> {mode === 'classroom' ? '2nd Floor, Aditi Samruddhi, Baner Road, Pune' : 'Live Interactive Zoom + 24/7 VPN Lab'}
                </div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                style={{
                  width: '100%',
                  background: '#0B63E5',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Got It, Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Select Course Track
                </label>
                <select 
                  value={course} 
                  onChange={(e) => setCourse(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13.5px',
                    color: '#0F172A',
                    background: '#FFFFFF',
                    outline: 'none'
                  }}
                >
                  {coursesList.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Training Delivery Preference
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setMode('classroom')}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      border: `1.5px solid ${mode === 'classroom' ? '#0B63E5' : '#E2E8F0'}`,
                      background: mode === 'classroom' ? '#EFF6FF' : '#F8FAFC',
                      color: mode === 'classroom' ? '#0B63E5' : '#64748B',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    🏢 Classroom (Pune)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('online')}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      border: `1.5px solid ${mode === 'online' ? '#0B63E5' : '#E2E8F0'}`,
                      background: mode === 'online' ? '#EFF6FF' : '#F8FAFC',
                      color: mode === 'online' ? '#0B63E5' : '#64748B',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    🌐 Online Live + Lab
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Rahul Sharma" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13.5px',
                    color: '#0F172A',
                    boxSizing: 'border-box',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Mobile Number / WhatsApp
                </label>
                <input 
                  type="tel" 
                  placeholder="e.g. +91 98765 43210" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13.5px',
                    color: '#0F172A',
                    boxSizing: 'border-box',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '12px', marginTop: '2px' }}>
                <ShieldCheck size={16} /> 100% Free Demo Session • No credit card • Zero spam
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#0B63E5',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '6px',
                  boxShadow: '0 4px 12px rgba(11, 99, 229, 0.25)'
                }}
              >
                Confirm & Reserve My Free Demo Slot
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
