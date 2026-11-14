import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Search,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  Sparkles,
  Layers,
  Server,
  Clock,
  ShieldCheck,
  Briefcase,
  CreditCard,
  Award,
  Headphones,
  CheckCircle2,
  Terminal,
  Cpu,
  Building2,
  TrendingUp,
  Calendar,
  Sparkle,
  BadgeCheck,
  CornerDownRight,
  HelpCircle,
  BookmarkCheck
} from 'lucide-react';
import styles from './CCNAFaqSection.module.css';

export const faqCategories = [
  { id: 'all', label: 'All Questions', icon: Layers },
  { id: 'training', label: 'Training & Labs', icon: Server },
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
    categoryLabel: 'Training & Labs',
    q: 'What does the CCNA training program cover?',
    a: 'Our CCNA training covers the complete Cisco CCNA 200-301 syllabus — networking fundamentals, routing & switching, IP services (NAT/DHCP/DNS), security, wireless, automation, and SDN. Every concept is paired with hands-on labs on real Cisco devices.',
    chips: [
      { label: 'Cisco 200-301 Syllabus Aligned', icon: CheckCircle2 },
      { label: 'Real Hardware Labs', icon: Server },
      { label: 'Automation & SDN', icon: Terminal }
    ]
  },
  {
    id: 'faq-training-2',
    category: 'training',
    categoryLabel: 'Training & Labs',
    q: 'Will I get to practise on real Cisco hardware?',
    a: 'Yes. You get 24×7 access to real Cisco routers (2611XM, 1841, 2811, 1905) and switches (2950, 2960, 3560, 3750), plus tools like GNS3, Cisco Packet Tracer and EVE-NG.',
    chips: [
      { label: 'Routers: 2611XM, 1841, 2811, 1905', icon: Cpu },
      { label: 'Switches: 2950, 2960, 3560, 3750', icon: Server },
      { label: 'EVE-NG & GNS3 Virtual Labs', icon: Terminal },
      { label: '24×7 Physical Rack Access', icon: Clock }
    ]
  },
  {
    id: 'faq-training-3',
    category: 'training',
    categoryLabel: 'Training & Labs',
    q: 'Is the course suitable for absolute beginners?',
    a: 'Yes — beginners with basic computer literacy can complete the course successfully. The curriculum starts from networking fundamentals and progresses to advanced topics with full mentor support.',
    chips: [
      { label: 'Zero Prior Coding Needed', icon: CheckCircle2 },
      { label: 'From Scratch to Advanced', icon: TrendingUp },
      { label: '1-on-1 Mentor Guidance', icon: Headphones }
    ]
  },
  {
    id: 'faq-training-4',
    category: 'training',
    categoryLabel: 'Training & Labs',
    q: 'Are interview questions and exam practice included?',
    a: 'Yes. The course includes interview questions, mock interviews and exam practice questions that mirror the official Cisco CCNA 200-301 pattern.',
    chips: [
      { label: 'Cisco Exam Simulation Tests', icon: Award },
      { label: 'Technical Mock Interviews', icon: CheckCircle2 },
      { label: 'HR Screening Prep', icon: Briefcase }
    ]
  },
  {
    id: 'faq-training-5',
    category: 'training',
    categoryLabel: 'Training & Labs',
    q: 'Will I be ready for the CCNA 200-301 exam after this course?',
    a: 'Yes. The training is fully aligned with the latest CCNA 200-301 syllabus and includes simulation-based practice tests so you walk into Pearson VUE confident.',
    chips: [
      { label: 'Pearson VUE Pattern Ready', icon: Award },
      { label: 'Target: 825+/1000 Score', icon: CheckCircle2 }
    ]
  },

  // --- 2. Time & Mode ---
  {
    id: 'faq-time-1',
    category: 'time-mode',
    categoryLabel: 'Time & Mode',
    q: 'How long is the CCNA training?',
    a: 'Total duration is 80 hours, typically completed in 2–3 months depending on your batch (weekday, weekend or fast-track).',
    chips: [
      { label: '80 Hours Live Labs', icon: Clock },
      { label: '2–3 Months Timeline', icon: Calendar },
      { label: 'Flexible Fast-Track', icon: TrendingUp }
    ]
  },
  {
    id: 'faq-time-2',
    category: 'time-mode',
    categoryLabel: 'Time & Mode',
    q: 'What batch options are available?',
    a: 'Multiple weekday, weekend and fast-track options — both online and offline available.',
    chips: [
      { label: 'Weekday Morning & Evening', icon: Clock },
      { label: 'Weekend Batches (Sat & Sun)', icon: Calendar },
      { label: 'Intensive Fast-Track', icon: TrendingUp }
    ]
  },
  {
    id: 'faq-time-3',
    category: 'time-mode',
    categoryLabel: 'Time & Mode',
    q: 'Is the course available online or only classroom?',
    a: 'Both. You can attend live in our Baner, Pune classroom or join the same live session online from anywhere. The lab access works the same way for both modes.',
    chips: [
      { label: 'Baner, Pune Classroom Labs', icon: Building2 },
      { label: 'Live Interactive Online', icon: Server },
      { label: 'Identical 24×7 Cloud Lab Access', icon: CheckCircle2 }
    ]
  },
  {
    id: 'faq-time-4',
    category: 'time-mode',
    categoryLabel: 'Time & Mode',
    q: 'Is the class taught in English or Hindi?',
    a: 'Both. Concepts are explained bilingually (English + Hindi) so every student understands clearly. Materials are in English.',
    chips: [
      { label: 'Bilingual: English + Hindi', icon: CheckCircle2 },
      { label: 'English Study Notes & Workbook', icon: Terminal }
    ]
  },
  {
    id: 'faq-time-5',
    category: 'time-mode',
    categoryLabel: 'Time & Mode',
    q: 'Can I switch batches if I miss a session?',
    a: 'Yes. Missed sessions can be attended in a parallel batch, plus all sessions are recorded for revision.',
    chips: [
      { label: 'Zero Session Loss Guarantee', icon: ShieldCheck },
      { label: 'HD Portal Video Recordings', icon: Clock },
      { label: 'Parallel Batch Flexibility', icon: Layers }
    ]
  },

  // --- 3. Prerequisites ---
  {
    id: 'faq-prereq-1',
    category: 'prerequisites',
    categoryLabel: 'Prerequisites',
    q: 'Do I need a technical background to enroll?',
    a: 'No mandatory prerequisites. Basic computer literacy is enough. We’ve trained students from non-technical backgrounds (BPO, sales, BCom, BA) who are now working network engineers.',
    chips: [
      { label: 'Open to All Graduates & Freshers', icon: CheckCircle2 },
      { label: 'Non-IT Switchers Success Stories', icon: TrendingUp }
    ]
  },
  {
    id: 'faq-prereq-2',
    category: 'prerequisites',
    categoryLabel: 'Prerequisites',
    q: 'Should I learn anything before joining?',
    a: 'It’s helpful but optional to know basics of operating systems, internet usage and IP addressing. We cover everything from scratch.',
    chips: [
      { label: 'Covers OSI & IP from Scratch', icon: Server },
      { label: 'Pre-Batch Foundation Included', icon: CheckCircle2 }
    ]
  },
  {
    id: 'faq-prereq-3',
    category: 'prerequisites',
    categoryLabel: 'Prerequisites',
    q: 'Is CCNA suitable for working professionals from non-IT?',
    a: 'Absolutely. Career switchers form a sizable share of our students. With weekend batches and structured placement support, the transition is very doable.',
    chips: [
      { label: 'Designed for Career Transition', icon: Briefcase },
      { label: 'Dedicated Weekend Schedules', icon: Calendar }
    ]
  },

  // --- 4. Placement ---
  {
    id: 'faq-place-1',
    category: 'placement',
    categoryLabel: 'Placement',
    q: 'Is placement assistance really included?',
    a: 'Yes. Resume building, technical mock interviews, HR mock interviews, weekly job alerts and direct introductions to our hiring partner network are all included.',
    chips: [
      { label: 'Cisco-Specific Resume Polish', icon: CheckCircle2 },
      { label: '1-on-1 CCIE Mock Rounds', icon: Headphones },
      { label: 'Weekly Placement Drives', icon: Briefcase }
    ]
  },
  {
    id: 'faq-place-2',
    category: 'placement',
    categoryLabel: 'Placement',
    q: 'What companies hire from I-Medita?',
    a: 'Our students work at TCS, Infosys, Wipro, HCL, Tech Mahindra, Accenture, Capgemini, Reliance Jio, Tata Communications, Airtel and many more.',
    chips: [
      { label: 'MNCs: TCS, Wipro, Infosys, HCL', icon: Building2 },
      { label: 'Telcos: Reliance Jio, Airtel, Tata Comm', icon: Server },
      { label: '100+ Hiring Partners', icon: Briefcase }
    ]
  },
  {
    id: 'faq-place-3',
    category: 'placement',
    categoryLabel: 'Placement',
    q: 'What salary can I expect after CCNA?',
    a: 'Freshers with CCNA typically earn ₹2.5 – 4.5 LPA. With 1–3 years of experience and CCNP, this scales to ₹4.5 – 8 LPA. Senior roles touch ₹15 LPA+.',
    chips: [
      { label: 'Fresher: ₹2.5 – 4.5 LPA', icon: TrendingUp },
      { label: '1–3 Yrs Experience: ₹4.5 – 8 LPA', icon: TrendingUp },
      { label: 'Senior Specialist: ₹15 LPA+', icon: Award }
    ]
  },
  {
    id: 'faq-place-4',
    category: 'placement',
    categoryLabel: 'Placement',
    q: 'Is placement guaranteed?',
    a: 'We offer placement assistance. Final placement depends on your performance, technical knowledge and interview skills but our process is built to maximize your chances.',
    chips: [
      { label: 'Structured Preparation Pipeline', icon: ShieldCheck },
      { label: 'Unlimited Interview Calls Support', icon: Briefcase }
    ]
  },

  // --- 5. Payment & Fees ---
  {
    id: 'faq-pay-1',
    category: 'payment',
    categoryLabel: 'Payment & Fees',
    q: 'What is the course fee?',
    a: 'Please reach out to our team at +91 87500 04411 for information about the course fee, current discounts, and ongoing promotional offers.',
    chips: [
      { label: 'Admissions Helpline: +91 87500 04411', icon: PhoneCall },
      { label: 'Early-Bird Discount Offers', icon: Award }
    ]
  },
  {
    id: 'faq-pay-2',
    category: 'payment',
    categoryLabel: 'Payment & Fees',
    q: 'Are EMI options available?',
    a: 'Yes. Easy 3 / 6 / 9-month no-cost EMI options are available via partner finance providers. Talk to our counsellor for details.',
    chips: [
      { label: '3 / 6 / 9 Months No-Cost EMI', icon: CreditCard },
      { label: 'Quick Digital Approval', icon: CheckCircle2 }
    ]
  },
  {
    id: 'faq-pay-3',
    category: 'payment',
    categoryLabel: 'Payment & Fees',
    q: 'Do you offer a free demo class?',
    a: 'Yes. Book a free demo using the form on this page. You’ll get a free 1-hour live session with a CCIE-certified trainer before paying anything.',
    chips: [
      { label: 'Free 1-Hour Live Class', icon: Sparkle },
      { label: 'Taught by CCIE Certified Trainer', icon: Award },
      { label: 'Zero Obligation Trial', icon: ShieldCheck }
    ]
  },
  {
    id: 'faq-pay-4',
    category: 'payment',
    categoryLabel: 'Payment & Fees',
    q: 'Is the fee refundable?',
    a: 'Please refer to our Refund Policy and Terms & Conditions available on the website for complete details. We strongly recommend attending a free demo session before enrollment to ensure the course meets your expectations. If you have any questions regarding refunds, our admissions team will be happy to assist you before enrollment.',
    chips: [
      { label: 'Transparent Enrollment Policies', icon: ShieldCheck },
      { label: 'Demo Before You Pay Recommended', icon: CheckCircle2 }
    ]
  },
  {
    id: 'faq-pay-5',
    category: 'payment',
    categoryLabel: 'Payment & Fees',
    q: 'What payment options do you accept?',
    a: 'We accept multiple payment options, including cash, UPI, debit cards, credit cards, EMI, net banking, digital wallets, cheques, demand drafts (DD), and PayPal. For assistance with payments or EMI options, please contact our admissions team.',
    chips: [
      { label: 'UPI, Cards, Net Banking & Wallets', icon: CreditCard },
      { label: 'PayPal, Cheques & Demand Drafts', icon: CheckCircle2 }
    ]
  },

  // --- 6. Certificate ---
  {
    id: 'faq-cert-1',
    category: 'certificate',
    categoryLabel: 'Certification',
    q: 'Will I get a certificate after the course?',
    a: 'Yes. You receive an I-Medita Training Completion Certificate plus full preparation for the official Cisco CCNA 200-301 certification (booked separately at Pearson VUE).',
    chips: [
      { label: 'I-Medita Course Certificate', icon: Award },
      { label: 'Official Cisco 200-301 Ready', icon: CheckCircle2 }
    ]
  },
  {
    id: 'faq-cert-2',
    category: 'certificate',
    categoryLabel: 'Certification',
    q: 'Is the I-Medita certificate recognized in the industry?',
    a: 'Yes. I-Medita has been training network engineers since 2014 and our certificate is recognized across our 100+ hiring partner network.',
    chips: [
      { label: 'Trusted Training Since 2014', icon: Award },
      { label: 'Recognized by 100+ MNCs', icon: Building2 }
    ]
  },
  {
    id: 'faq-cert-3',
    category: 'certificate',
    categoryLabel: 'Certification',
    q: 'How do I take the official Cisco CCNA exam?',
    a: 'Schedule via Pearson VUE — at a test center or online via OnVUE proctored mode. We help you book the exam at a discounted voucher rate.',
    chips: [
      { label: 'Pearson VUE Test Center or OnVUE', icon: Server },
      { label: 'Discounted Voucher Booking Help', icon: Award }
    ]
  },
  {
    id: 'faq-cert-4',
    category: 'certificate',
    categoryLabel: 'Certification',
    q: 'How long is the Cisco CCNA certification valid?',
    a: '3 years. You can renew by passing another Cisco exam, an Expert-level exam, or by earning 30 Continuing Education credits.',
    chips: [
      { label: 'Valid for 3 Years Worldwide', icon: Clock },
      { label: 'Renew via 30 CE Credits / CCNP', icon: Award }
    ]
  },

  // --- 7. Need Assistance ---
  {
    id: 'faq-assist-1',
    category: 'assistance',
    categoryLabel: 'Need Assistance',
    q: 'Whom do I contact for course queries?',
    a: 'Call us at +91-8750004411 (Mon–Sat, 9 AM – 8 PM) or email info@imedita.com. You can also use the assistance form below — we respond within 24 hours.',
    chips: [
      { label: 'Hotline: +91 87500 04411', icon: PhoneCall },
      { label: 'Email: info@imedita.com', icon: Headphones },
      { label: 'Mon–Sat (9 AM – 8 PM)', icon: Clock }
    ]
  },
  {
    id: 'faq-assist-2',
    category: 'assistance',
    categoryLabel: 'Need Assistance',
    q: 'Can I visit the institute before enrolling?',
    a: 'Yes — walk into our Baner, Pune campus any working day between 10 AM – 7 PM. Address: 3rd Floor, Aditi Samruddhi Building, Baner Road, Baner, Pune 411045.',
    chips: [
      { label: 'Campus: Baner Road, Baner, Pune', icon: Building2 },
      { label: 'Walk-ins: 10 AM – 7 PM', icon: Clock },
      { label: 'Inspect Real Hardware Lab Racks', icon: Server }
    ]
  },
  {
    id: 'faq-assist-3',
    category: 'assistance',
    categoryLabel: 'Need Assistance',
    q: 'I\'m stuck choosing the right course — can I talk to someone?',
    a: 'Yes. Submit the assistance form below or book a free demo. Our career counsellor will give you 1-to-1 free guidance on the right Cisco track for your goals.',
    chips: [
      { label: 'Free 1-on-1 Career Roadmap', icon: TrendingUp },
      { label: 'Direct CCIE Guidance', icon: Headphones }
    ]
  }
];

export function CCNAFaqSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFaqId, setActiveFaqId] = useState('faq-training-1');
  const directoryListRef = useRef(null);
  const stageCanvasRef = useRef(null);

  const handleSelectFaq = (id) => {
    setActiveFaqId(id);
    if (typeof window !== 'undefined' && window.innerWidth <= 960 && stageCanvasRef.current) {
      stageCanvasRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Ensure smooth mouse wheel scrolling inside the directory list (Lenis coordination)
  useEffect(() => {
    const listEl = directoryListRef.current;
    if (!listEl) return;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = listEl;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 1) return;

      const delta = e.deltaY;
      const isDown = delta > 0;
      const isUp = delta < 0;
      const canDown = scrollTop < maxScroll - 1;
      const canUp = scrollTop > 1;

      if ((isDown && canDown) || (isUp && canUp)) {
        e.preventDefault();
        e.stopPropagation();
        listEl.scrollTop += delta;
      }
    };

    listEl.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      listEl.removeEventListener('wheel', handleWheel);
    };
  }, [filteredFaqs]);

  // Ensure smooth mouse wheel scrolling inside the answer canvas if it overflows
  useEffect(() => {
    const stageEl = stageCanvasRef.current;
    if (!stageEl) return;

    const handleStageWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = stageEl;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 1) return;

      const delta = e.deltaY;
      const isDown = delta > 0;
      const isUp = delta < 0;
      const canDown = scrollTop < maxScroll - 1;
      const canUp = scrollTop > 1;

      if ((isDown && canDown) || (isUp && canUp)) {
        e.preventDefault();
        e.stopPropagation();
        stageEl.scrollTop += delta;
      }
    };

    stageEl.addEventListener('wheel', handleStageWheel, { passive: false });
    return () => {
      stageEl.removeEventListener('wheel', handleStageWheel);
    };
  }, [activeFaq]);

  // Filter questions based on Category and Search
  const filteredFaqs = useMemo(() => {
    return faqsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.chips &&
          item.chips.some((chip) =>
            chip.label.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Ensure active question stays valid when filters change
  useEffect(() => {
    if (filteredFaqs.length > 0) {
      const exists = filteredFaqs.some((f) => f.id === activeFaqId);
      if (!exists) {
        setActiveFaqId(filteredFaqs[0].id);
      }
    }
  }, [filteredFaqs, activeFaqId]);

  // Active FAQ object
  const activeFaq = useMemo(() => {
    return (
      filteredFaqs.find((f) => f.id === activeFaqId) ||
      filteredFaqs[0] ||
      faqsData[0]
    );
  }, [filteredFaqs, activeFaqId]);

  // Current Index in filtered list
  const activeIndex = useMemo(() => {
    return filteredFaqs.findIndex((f) => f.id === activeFaq?.id);
  }, [filteredFaqs, activeFaq]);

  // Navigation handlers
  const handlePrev = () => {
    if (activeIndex > 0) {
      const prevId = filteredFaqs[activeIndex - 1].id;
      setActiveFaqId(prevId);
      scrollItemIntoView(prevId);
    }
  };

  const handleNext = () => {
    if (activeIndex < filteredFaqs.length - 1) {
      const nextId = filteredFaqs[activeIndex + 1].id;
      setActiveFaqId(nextId);
      scrollItemIntoView(nextId);
    }
  };

  const scrollItemIntoView = (id) => {
    if (directoryListRef.current) {
      const itemEl = directoryListRef.current.querySelector(`[data-id="${id}"]`);
      if (itemEl) {
        itemEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleDemoClick = (source) => {
    window.dispatchEvent(
      new CustomEvent('open-ccna-demo-modal', {
        detail: { source: source || 'CCNA FAQ Split-Screen Reader' }
      })
    );
  };

  // Format text to make phone numbers clickable
  const renderFormattedAnswer = (text) => {
    const phoneRegex = /(\+91[\s-]?[0-9]{5}[\s-]?[0-9]{5}|\+91[\s-]?[0-9]{10})/g;
    const parts = text.split(phoneRegex);

    return (
      <p className={styles.stageAnswerText}>
        {parts.map((part, i) => {
          if (part.match(phoneRegex)) {
            const cleanPhone = part.replace(/[\s-]/g, '');
            return (
              <a
                key={i}
                href={`tel:${cleanPhone}`}
                className={styles.readerPhoneLink}
              >
                {part}
              </a>
            );
          }
          return part;
        })}
      </p>
    );
  };

  return (
    <section
      id="faq"
      className={styles.faqSection}
      aria-label="Frequently Asked Questions Knowledge Reader"
    >
      <div className={styles.ambientAura} aria-hidden="true" />

      <div className={styles.container}>
        {/* ================= SECTION HEADER ================= */}
        <header className={styles.headerBlock}>
          <div className={styles.eyebrowPill}>
            <Sparkle size={13} className={styles.sparkleIcon} />
            <span>INTERACTIVE KNOWLEDGE READER • CCNA 200-301</span>
          </div>

          <h2 className={styles.sectionHeading}>
            Everything You Need to Know.
          </h2>

          <p className={styles.sectionSubtext}>
            Explore our comprehensive knowledge directory below. Click any question on the left to inspect real Cisco lab gear, batch options, career placement frameworks, and fees.
          </p>

          {/* Quick Command Search */}
          <div className={styles.searchConsoleWrap}>
            <div className={styles.searchInnerBox}>
              <Search size={18} className={styles.searchConsoleIcon} />
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search all 29 questions (e.g. fee, routers, EMI, salary, syllabus)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search frequently asked questions"
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Track */}
          <nav className={styles.categoryRibbonNav} aria-label="FAQ Topics">
            <div className={styles.categoryRibbonTrack} role="tablist">
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
                    className={`${styles.ribbonTab} ${
                      isSelected ? styles.ribbonTabActive : ''
                    }`}
                    onClick={() => handleCategorySelect(cat.id)}
                  >
                    <Icon size={14} className={styles.ribbonIcon} />
                    <span>{cat.label}</span>
                    <span className={styles.ribbonCountBadge}>{count}</span>
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
              Found <strong>{filteredFaqs.length}</strong> matching questions for "{searchQuery}"
            </span>
            <button
              type="button"
              className={styles.resetFilterBtn}
              onClick={() => setSearchQuery('')}
            >
              Reset search & view all
            </button>
          </div>
        )}

        {/* ================= SPLIT-SCREEN KNOWLEDGE READER (LINEAR / RAYCAST STYLE) ================= */}
        {filteredFaqs.length > 0 ? (
          <div className={styles.splitScreenContainer}>
            {/* 1. LEFT COLUMN: INTERACTIVE QUESTION DIRECTORY */}
            <aside className={styles.questionDirectoryPane} aria-label="Questions List">
              <div className={styles.directoryHeader}>
                <div className={styles.directoryHeaderLeft}>
                  <span className={styles.livePulseDot} />
                  <span className={styles.directoryTitle}>Questions Directory</span>
                </div>
                <span className={styles.directoryBadge}>
                  {filteredFaqs.length} Available
                </span>
              </div>

              <div
                ref={directoryListRef}
                className={styles.directoryScrollList}
                data-lenis-prevent="true"
                role="listbox"
                aria-label="Select a question to read"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    handleNext();
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    handlePrev();
                  }
                }}
              >
                {filteredFaqs.map((faq, index) => {
                  const isActive = faq.id === activeFaq?.id;
                  const itemIndex = String(index + 1).padStart(2, '0');

                  return (
                    <button
                      key={faq.id}
                      data-id={faq.id}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      className={`${styles.directoryItem} ${
                        isActive ? styles.directoryItemActive : ''
                      }`}
                      onClick={() => handleSelectFaq(faq.id)}
                    >
                      <div className={styles.itemIndexCol}>
                        <span className={styles.itemIndexNum}>{itemIndex}</span>
                      </div>

                      <div className={styles.itemContentCol}>
                        <div className={styles.itemMetaRow}>
                          <span className={styles.itemCategoryTag}>
                            {faq.categoryLabel}
                          </span>
                        </div>
                        <h4 className={styles.itemQuestionTitle}>{faq.q}</h4>
                      </div>

                      <div className={styles.itemActionCol}>
                        <ChevronRight
                          size={16}
                          className={`${styles.itemChevron} ${
                            isActive ? styles.itemChevronActive : ''
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className={styles.directoryFooter}>
                <span className={styles.keyboardTip}>
                  Tip: Use <strong>↑</strong> and <strong>↓</strong> arrow keys or click to navigate questions
                </span>
              </div>
            </aside>

            {/* 2. RIGHT COLUMN: DEDICATED EXPANSIVE ANSWER STAGE */}
            <main
              ref={stageCanvasRef}
              key={activeFaq?.id}
              className={styles.answerStageCanvas}
              data-lenis-prevent="true"
              aria-live="polite"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              {/* Stage Top Meta Ribbon */}
              <div className={styles.stageTopMeta}>
                <div className={styles.stageTagGroup}>
                  <span className={styles.stageCategoryPill}>
                    {activeFaq?.categoryLabel}
                  </span>
                  <span className={styles.stageIndexPill}>
                    Question {String(activeIndex + 1).padStart(2, '0')} of{' '}
                    {String(filteredFaqs.length).padStart(2, '0')}
                  </span>
                </div>

                <div className={styles.stageVerifiedSeal}>
                  <BadgeCheck size={14} className={styles.verifiedIcon} />
                  <span>Verified by CCIE Faculty</span>
                </div>
              </div>

              {/* Main Question Title */}
              <h3 className={styles.stageQuestionHeading} itemProp="name">
                {activeFaq?.q}
              </h3>

              <div className={styles.stageDivider} />

              {/* Verified Answer Narrative */}
              <div
                className={styles.stageAnswerContainer}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className={styles.answerHeaderLabel}>
                  <BookmarkCheck size={14} className={styles.answerIcon} />
                  <span>OFFICIAL ANSWER</span>
                </div>

                <div itemProp="text">
                  {renderFormattedAnswer(activeFaq?.a)}
                </div>

                {/* Visual Architecture & Lab Fact Chips */}
                {activeFaq?.chips && activeFaq.chips.length > 0 && (
                  <div className={styles.stageDossierBox}>
                    <p className={styles.dossierTitle}>
                      KEY LAB & CURRICULUM HIGHLIGHTS
                    </p>
                    <div className={styles.dossierChipsGrid}>
                      {activeFaq.chips.map((chip, cIdx) => {
                        const ChipIcon = chip.icon || CheckCircle2;
                        return (
                          <div key={cIdx} className={styles.stageIntelChip}>
                            <ChipIcon size={13} className={styles.chipSvg} />
                            <span>{chip.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* In-Stage Interactive Action & Fast-Nav Row */}
              <div className={styles.stageBottomRow}>
                {/* Fast Question Stepper */}
                <div className={styles.stepperGroup}>
                  <button
                    type="button"
                    className={styles.stepperBtn}
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    aria-label="Previous question"
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>

                  <button
                    type="button"
                    className={styles.stepperBtn}
                    onClick={handleNext}
                    disabled={activeIndex === filteredFaqs.length - 1}
                    aria-label="Next question"
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Primary Action Button */}
                <div className={styles.stageActionGroup}>
                  {(activeFaq?.a.includes('free demo') ||
                    activeFaq?.a.includes('free 1-hour live session') ||
                    activeFaq?.id === 'faq-assist-3') ? (
                    <button
                      type="button"
                      className={styles.stageDemoBtn}
                      onClick={() =>
                        handleDemoClick(`Split-Screen Reader: ${activeFaq?.q}`)
                      }
                    >
                      <Sparkles size={14} />
                      <span>Book Free 1-Hour Demo</span>
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <a
                      href="tel:+918750004411"
                      className={styles.stageCallBtn}
                    >
                      <PhoneCall size={13} />
                      <span>Ask Senior Advisor (+91 87500 04411)</span>
                    </a>
                  )}
                </div>
              </div>
            </main>
          </div>
        ) : (
          <div className={styles.emptyStateContainer}>
            <div className={styles.emptyIconCircle}>
              <Search size={22} />
            </div>
            <h4>No matching questions found</h4>
            <p>
              We couldn’t find any questions matching "{searchQuery}". Try searching for keywords like "fee", "EMI", "routers", "switches", or "placement".
            </p>
            <button
              type="button"
              className={styles.emptyResetBtn}
              onClick={() => setSearchQuery('')}
            >
              Reset search & view all questions
            </button>
          </div>
        )}

        {/* Hidden Semantic Microdata for Googlebot full indexing of all 29 items */}
        <div style={{ display: 'none' }} aria-hidden="true">
          {faqsData.map((faq) => (
            <div
              key={`seo-${faq.id}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h4 itemProp="name">{faq.q}</h4>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Executive Floating Advisor Bar */}
        <footer className={styles.floatingAdvisorBar}>
          <div className={styles.advisorLeftCol}>
            <div className={styles.advisorIconOrb}>
              <Headphones size={20} />
            </div>
            <div>
              <p className={styles.advisorHeading}>
                Have a specific topology or curriculum question?
              </p>
              <p className={styles.advisorSubheading}>
                Talk directly with our CCIE Senior Faculty advisors (Mon–Sat, 9 AM – 8 PM)
              </p>
            </div>
          </div>
          <div className={styles.advisorActionsCol}>
            <a href="tel:+918750004411" className={styles.advisorCallBtn}>
              <PhoneCall size={14} />
              <span>+91 87500 04411</span>
            </a>
            <button
              type="button"
              className={styles.advisorDemoBtn}
              onClick={() => handleDemoClick('CCNA FAQ Footer Help Bar')}
            >
              <Sparkles size={14} />
              <span>Request 1-on-1 Guidance</span>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default CCNAFaqSection;
