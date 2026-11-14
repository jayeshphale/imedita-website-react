import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  ChevronDown,
  PhoneCall,
  Sparkles,
  ArrowRight,
  Layers,
  BookOpen,
  Clock,
  ShieldCheck,
  Briefcase,
  CreditCard,
  Award,
  Headphones,
  Compass
} from 'lucide-react';
import styles from './CCNAFaqSection.module.css';

export const faqCategories = [
  { id: 'all', label: 'All Questions', icon: Layers },
  { id: 'training', label: 'Training Specific', icon: BookOpen },
  { id: 'time-mode', label: 'Time & Mode', icon: Clock },
  { id: 'prerequisites', label: 'Prerequisites', icon: ShieldCheck },
  { id: 'placement', label: 'Placement', icon: Briefcase },
  { id: 'payment', label: 'Payment & Fees', icon: CreditCard },
  { id: 'certificate', label: 'Certification', icon: Award },
  { id: 'assistance', label: 'Need Assistance', icon: Headphones }
];

export const faqsData = [
  // --- 1. Training Specific ---
  {
    id: 'faq-training-1',
    category: 'training',
    categoryLabel: 'Training Specific',
    q: 'What does the CCNA training program cover?',
    a: 'Our CCNA training covers the complete Cisco CCNA 200-301 syllabus — networking fundamentals, routing & switching, IP services (NAT/DHCP/DNS), security, wireless, automation, and SDN. Every concept is paired with hands-on labs on real Cisco devices.'
  },
  {
    id: 'faq-training-2',
    category: 'training',
    categoryLabel: 'Training Specific',
    q: 'Will I get to practise on real Cisco hardware?',
    a: 'Yes. You get 24×7 access to real Cisco routers (2611XM, 1841, 2811, 1905) and switches (2950, 2960, 3560, 3750), plus tools like GNS3, Cisco Packet Tracer and EVE-NG.'
  },
  {
    id: 'faq-training-3',
    category: 'training',
    categoryLabel: 'Training Specific',
    q: 'Is the course suitable for absolute beginners?',
    a: 'Yes — beginners with basic computer literacy can complete the course successfully. The curriculum starts from networking fundamentals and progresses to advanced topics with full mentor support.'
  },
  {
    id: 'faq-training-4',
    category: 'training',
    categoryLabel: 'Training Specific',
    q: 'Are interview questions and exam practice included?',
    a: 'Yes. The course includes interview questions, mock interviews and exam practice questions that mirror the official Cisco CCNA 200-301 pattern.'
  },
  {
    id: 'faq-training-5',
    category: 'training',
    categoryLabel: 'Training Specific',
    q: 'Will I be ready for the CCNA 200-301 exam after this course?',
    a: 'Yes. The training is fully aligned with the latest CCNA 200-301 syllabus and includes simulation-based practice tests so you walk into Pearson VUE confident.'
  },

  // --- 2. Time & Mode ---
  {
    id: 'faq-time-1',
    category: 'time-mode',
    categoryLabel: 'Time & Mode',
    q: 'How long is the CCNA training?',
    a: 'Total duration is 80 hours, typically completed in 2–3 months depending on your batch (weekday, weekend or fast-track).'
  },
  {
    id: 'faq-time-2',
    category: 'time-mode',
    categoryLabel: 'Time & Mode',
    q: 'What batch options are available?',
    a: 'Multiple weekday, weekend and fast-track options — both online and offline available.'
  },
  {
    id: 'faq-time-3',
    category: 'time-mode',
    categoryLabel: 'Time & Mode',
    q: 'Is the course available online or only classroom?',
    a: 'Both. You can attend live in our Baner, Pune classroom or join the same live session online from anywhere. The lab access works the same way for both modes.'
  },
  {
    id: 'faq-time-4',
    category: 'time-mode',
    categoryLabel: 'Time & Mode',
    q: 'Is the class taught in English or Hindi?',
    a: 'Both. Concepts are explained bilingually (English + Hindi) so every student understands clearly. Materials are in English.'
  },
  {
    id: 'faq-time-5',
    category: 'time-mode',
    categoryLabel: 'Time & Mode',
    q: 'Can I switch batches if I miss a session?',
    a: 'Yes. Missed sessions can be attended in a parallel batch, plus all sessions are recorded for revision.'
  },

  // --- 3. Prerequisites ---
  {
    id: 'faq-prereq-1',
    category: 'prerequisites',
    categoryLabel: 'Prerequisites',
    q: 'Do I need a technical background to enroll?',
    a: "No mandatory prerequisites. Basic computer literacy is enough. We've trained students from non-technical backgrounds (BPO, sales, BCom, BA) who are now working network engineers."
  },
  {
    id: 'faq-prereq-2',
    category: 'prerequisites',
    categoryLabel: 'Prerequisites',
    q: 'Should I learn anything before joining?',
    a: "It's helpful but optional to know basics of operating systems, internet usage and IP addressing. We cover everything from scratch."
  },
  {
    id: 'faq-prereq-3',
    category: 'prerequisites',
    categoryLabel: 'Prerequisites',
    q: 'Is CCNA suitable for working professionals from non-IT?',
    a: 'Absolutely. Career switchers form a sizable share of our students. With weekend batches and structured placement support, the transition is very doable.'
  },

  // --- 4. Placement ---
  {
    id: 'faq-place-1',
    category: 'placement',
    categoryLabel: 'Placement',
    q: 'Is placement assistance really included?',
    a: 'Yes. Resume building, technical mock interviews, HR mock interviews, weekly job alerts and direct introductions to our hiring partner network are all included.'
  },
  {
    id: 'faq-place-2',
    category: 'placement',
    categoryLabel: 'Placement',
    q: 'What companies hire from I-Medita?',
    a: 'Our students work at TCS, Infosys, Wipro, HCL, Tech Mahindra, Accenture, Capgemini, Reliance Jio, Tata Communications, Airtel and many more.'
  },
  {
    id: 'faq-place-3',
    category: 'placement',
    categoryLabel: 'Placement',
    q: 'What salary can I expect after CCNA?',
    a: 'Freshers with CCNA typically earn ₹2.5 – 4.5 LPA. With 1–3 years of experience and CCNP, this scales to ₹4.5 – 8 LPA. Senior roles touch ₹15 LPA+.'
  },
  {
    id: 'faq-place-4',
    category: 'placement',
    categoryLabel: 'Placement',
    q: 'Is placement guaranteed?',
    a: 'We offer placement assistance. Final placement depends on your performance, technical knowledge and interview skills but our process is built to maximize your chances.'
  },

  // --- 5. Payment & Fees ---
  {
    id: 'faq-pay-1',
    category: 'payment',
    categoryLabel: 'Payment & Fees',
    q: 'What is the course fee?',
    a: 'Please reach out to our team at +91 87500 04411 for information about the course fee, current discounts, and ongoing promotional offers.'
  },
  {
    id: 'faq-pay-2',
    category: 'payment',
    categoryLabel: 'Payment & Fees',
    q: 'Are EMI options available?',
    a: 'Yes. Easy 3 / 6 / 9-month no-cost EMI options are available via partner finance providers. Talk to our counsellor for details.'
  },
  {
    id: 'faq-pay-3',
    category: 'payment',
    categoryLabel: 'Payment & Fees',
    q: 'Do you offer a free demo class?',
    a: "Yes. Book a free demo using the form on this page. You'll get a free 1-hour live session with a CCIE-certified trainer before paying anything."
  },
  {
    id: 'faq-pay-4',
    category: 'payment',
    categoryLabel: 'Payment & Fees',
    q: 'Is the fee refundable?',
    a: 'Please refer to our Refund Policy and Terms & Conditions available on the website for complete details. We strongly recommend attending a free demo session before enrollment to ensure the course meets your expectations. If you have any questions regarding refunds, our admissions team will be happy to assist you before enrollment.'
  },
  {
    id: 'faq-pay-5',
    category: 'payment',
    categoryLabel: 'Payment & Fees',
    q: 'What payment options do you accept?',
    a: 'We accept multiple payment options, including cash, UPI, debit cards, credit cards, EMI, net banking, digital wallets, cheques, demand drafts (DD), and PayPal. For assistance with payments or EMI options, please contact our admissions team.'
  },

  // --- 6. Certificate ---
  {
    id: 'faq-cert-1',
    category: 'certificate',
    categoryLabel: 'Certification',
    q: 'Will I get a certificate after the course?',
    a: 'Yes. You receive an I-Medita Training Completion Certificate plus full preparation for the official Cisco CCNA 200-301 certification (booked separately at Pearson VUE).'
  },
  {
    id: 'faq-cert-2',
    category: 'certificate',
    categoryLabel: 'Certification',
    q: 'Is the I-Medita certificate recognized in the industry?',
    a: 'Yes. I-Medita has been training network engineers since 2014 and our certificate is recognized across our 100+ hiring partner network.'
  },
  {
    id: 'faq-cert-3',
    category: 'certificate',
    categoryLabel: 'Certification',
    q: 'How do I take the official Cisco CCNA exam?',
    a: 'Schedule via Pearson VUE — at a test center or online via OnVUE proctored mode. We help you book the exam at a discounted voucher rate.'
  },
  {
    id: 'faq-cert-4',
    category: 'certificate',
    categoryLabel: 'Certification',
    q: 'How long is the Cisco CCNA certification valid?',
    a: '3 years. You can renew by passing another Cisco exam, an Expert-level exam, or by earning 30 Continuing Education credits.'
  },

  // --- 7. Need Assistance ---
  {
    id: 'faq-assist-1',
    category: 'assistance',
    categoryLabel: 'Need Assistance',
    q: 'Whom do I contact for course queries?',
    a: 'Call us at +91-8750004411 (Mon–Sat, 9 AM – 8 PM) or email info@imedita.com. You can also use the assistance form below — we respond within 24 hours.'
  },
  {
    id: 'faq-assist-2',
    category: 'assistance',
    categoryLabel: 'Need Assistance',
    q: 'Can I visit the institute before enrolling?',
    a: 'Yes — walk into our Baner, Pune campus any working day between 10 AM – 7 PM. Address: 3rd Floor, Aditi Samruddhi Building, Baner Road, Baner, Pune 411045.'
  },
  {
    id: 'faq-assist-3',
    category: 'assistance',
    categoryLabel: 'Need Assistance',
    q: "I'm stuck choosing the right course — can I talk to someone?",
    a: 'Yes. Submit the assistance form below or book a free demo. Our career counsellor will give you 1-to-1 free guidance on the right Cisco track for your goals.'
  }
];

export function CCNAFaqSection({ onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState('training');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIds, setOpenFaqIds] = useState(new Set(['faq-training-1']));

  // Filter FAQs based on search or category
  const filteredFaqs = useMemo(() => {
    let result = faqsData;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (f) =>
          f.q.toLowerCase().includes(q) ||
          f.a.toLowerCase().includes(q) ||
          f.categoryLabel.toLowerCase().includes(q)
      );
    } else if (selectedCategory !== 'all') {
      result = result.filter((f) => f.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory]);

  // Toggle individual question
  const toggleFaq = (id) => {
    setOpenFaqIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    setSearchQuery('');
    // Open first question of chosen category
    const first = faqsData.find((f) => catId === 'all' || f.category === catId);
    if (first) {
      setOpenFaqIds(new Set([first.id]));
    }
  };

  const handleDemoClick = (topic) => {
    if (onOpenDemo) {
      onOpenDemo(topic || 'CCNA FAQ Section Assistance');
    } else {
      const demoEl = document.getElementById('demo-request');
      if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Format answers with high-tech badge highlights and interactive elements
  const renderFormattedAnswer = (text) => {
    // 1. Phone number parsing
    if (text.includes('+91 87500 04411') || text.includes('+91-8750004411')) {
      const parts = text.split(/(\+91[- ]?87500[- ]?04411)/g);
      return (
        <p itemProp="text" className={styles.answerParagraph}>
          {parts.map((part, idx) => {
            if (part.includes('87500')) {
              return (
                <a
                  key={idx}
                  href="tel:+918750004411"
                  className={styles.magneticPhoneBadge}
                >
                  <span className={styles.livePulseDot} />
                  <PhoneCall size={12} className={styles.phoneSvg} />
                  <span>{part}</span>
                </a>
              );
            }
            return part;
          })}
        </p>
      );
    }

    // 2. Free demo parsing
    if (text.includes('free demo') || text.includes('free 1-hour live session')) {
      return (
        <div itemProp="text">
          <p className={styles.answerParagraph}>{text}</p>
          <div className={styles.inAnswerCta}>
            <button
              type="button"
              className={styles.demoPillBtn}
              onClick={() => handleDemoClick('CCNA Free Demo Inquiry from FAQ')}
            >
              <Sparkles size={13} className={styles.sparkleIcon} />
              <span>Book 1-Hour Live Architecture Demo</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      );
    }

    // 3. Hardware models highlighting (2611XM, 1841, 2811, 1905, 2950, 2960, 3560, 3750)
    if (text.includes('2611XM') || text.includes('2960')) {
      return (
        <p itemProp="text" className={styles.answerParagraph}>
          Yes. You get 24×7 access to real Cisco routers (
          <code className={styles.hwCode}>2611XM</code>,{' '}
          <code className={styles.hwCode}>1841</code>,{' '}
          <code className={styles.hwCode}>2811</code>,{' '}
          <code className={styles.hwCode}>1905</code>) and switches (
          <code className={styles.hwCode}>2950</code>,{' '}
          <code className={styles.hwCode}>2960</code>,{' '}
          <code className={styles.hwCode}>3560</code>,{' '}
          <code className={styles.hwCode}>3750</code>), plus industry simulation
          suites like GNS3, Cisco Packet Tracer and EVE-NG.
        </p>
      );
    }

    return <p itemProp="text" className={styles.answerParagraph}>{text}</p>;
  };

  return (
    <section
      className={styles.faqSection}
      id="faq"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Ambient Lighting Glow Orb */}
      <div className={styles.ambientGlowOrb} aria-hidden="true" />

      <div className={styles.container}>
        {/* Executive Header Block */}
        <header className={styles.header}>
          <div className={styles.eyebrowPill}>
            <Sparkles size={12} className={styles.eyebrowIcon} />
            <span>KNOWLEDGE BASE & ARCHITECTURE FAQS</span>
          </div>
          <h2 className={styles.heading} id="faq-heading">
            Got Questions? Everything You Need to Know.
          </h2>
          <p className={styles.subheading}>
            Transparent, in-depth architectural details covering physical Cisco rack equipment, training schedules, career transition, and guaranteed placement frameworks.
          </p>

          {/* High-End Command Palette Style Search Input */}
          <div className={styles.searchConsoleWrap}>
            <div className={styles.searchInnerBox}>
              <Search size={16} className={styles.searchConsoleIcon} />
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search across all 29 FAQs (e.g. fee, EMI, routers, switch, placement)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search FAQs"
              />
              {searchQuery ? (
                <button
                  type="button"
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  <X size={14} />
                </button>
              ) : (
                <span className={styles.quickSearchBadge}>Quick Find</span>
              )}
            </div>
          </div>

          {/* Glassmorphic Segmented Navigation Ribbon */}
          <nav className={styles.segmentedDockWrapper} aria-label="FAQ Topics">
            <div className={styles.segmentedDock} role="tablist">
              {faqCategories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id && !searchQuery;
                const count =
                  cat.id === 'all'
                    ? faqsData.length
                    : faqsData.filter((f) => f.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`${styles.dockTab} ${
                      isSelected ? styles.dockTabActive : ''
                    }`}
                    onClick={() => handleCategorySelect(cat.id)}
                  >
                    <Icon size={14} className={styles.dockIcon} />
                    <span className={styles.dockLabel}>{cat.label}</span>
                    <span className={styles.dockCountBadge}>{count}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </header>

        {/* Live Filter Result Feedback */}
        {searchQuery && (
          <div className={styles.searchFeedbackBar}>
            <span>
              Showing <strong>{filteredFaqs.length}</strong> matching questions for "
              {searchQuery}"
            </span>
            <button
              type="button"
              className={styles.resetFilterBtn}
              onClick={() => setSearchQuery('')}
            >
              Clear search & view topics
            </button>
          </div>
        )}

        {/* Executive 2-Column Bento Grid */}
        {filteredFaqs.length > 0 ? (
          <div className={styles.bentoCardsGrid}>
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIds.has(faq.id);
              const formattedIndex = String(index + 1).padStart(2, '0');

              return (
                <article
                  key={faq.id}
                  className={`${styles.bentoCard} ${
                    isOpen ? styles.bentoCardOpen : ''
                  }`}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
                    className={styles.cardInteractiveHeader}
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    {/* Top Micro-Meta Row */}
                    <div className={styles.cardMetaRow}>
                      <span className={styles.microCategoryTag}>
                        {faq.categoryLabel}
                      </span>
                      <span className={styles.microIndex}>#{formattedIndex}</span>
                    </div>

                    {/* Question Row with Spring Action Orb */}
                    <div className={styles.questionActionRow}>
                      <h3 className={styles.questionHeading} itemProp="name">
                        {faq.q}
                      </h3>
                      <div
                        className={`${styles.actionOrb} ${
                          isOpen ? styles.actionOrbOpen : ''
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown size={15} className={styles.actionChevron} />
                      </div>
                    </div>
                  </button>

                  {/* Smooth Fluid Drawer Body */}
                  {isOpen && (
                    <div
                      className={styles.cardAnswerDrawer}
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div className={styles.drawerDivider} />
                      <div className={styles.drawerInner}>
                        {renderFormattedAnswer(faq.a)}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyStateCard}>
            <div className={styles.emptyIconCircle}>
              <Search size={22} />
            </div>
            <h4>No matching answers found</h4>
            <p>
              We couldn’t find any questions matching "{searchQuery}". Try searching for keywords like "fee", "EMI", "routers", or "switch".
            </p>
            <button
              type="button"
              className={styles.emptyResetBtn}
              onClick={() => setSearchQuery('')}
            >
              Reset Search & Explore Topics
            </button>
          </div>
        )}

        {/* Minimalist Floating Help Ribbon */}
        <footer className={styles.floatingHelpRibbon}>
          <div className={styles.helpLeftCluster}>
            <div className={styles.helpAvatarOrb}>
              <Headphones size={16} />
            </div>
            <div>
              <p className={styles.helpTitle}>Still have an architecture or career query?</p>
              <p className={styles.helpSubtitle}>Our CCIE Senior Faculty advisors are available Mon–Sat (9 AM – 8 PM)</p>
            </div>
          </div>
          <div className={styles.helpActionsCluster}>
            <a href="tel:+918750004411" className={styles.helpCallPill}>
              <PhoneCall size={12} />
              <span>+91 87500 04411</span>
            </a>
            <button
              type="button"
              className={styles.helpDemoPill}
              onClick={() => handleDemoClick('CCNA FAQ Bottom Help Ribbon')}
            >
              <Sparkles size={12} />
              <span>Request 1-on-1 Guidance</span>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default CCNAFaqSection;
