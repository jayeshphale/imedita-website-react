import React, { useEffect, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  Cloud, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  ArrowDown, 
  Calculator, 
  Layers, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Server,
  Zap,
  Compass,
  Award,
  BookOpen,
  BarChart3,
  Percent,
  DollarSign,
  Sparkles,
  ShieldAlert,
  Building2,
  FileText
} from 'lucide-react';

// Common Blog Components
import TableOfContents from '../components/blog-common/TableOfContents';
import AuthorBio from '../components/blog-common/AuthorBio';
import FAQAccordion from '../components/blog-common/FAQAccordion';
import RelatedArticles from '../components/blog-common/RelatedArticles';
import { CourseStickyNav } from '../components/navigation/CourseStickyNav';

// Page-Specific AWS Blog Components
import AWSHero from '../components/blog-aws/AWSHero';
import AWSPricingCards from '../components/blog-aws/AWSPricingCards';
import AWSFeesTable from '../components/blog-aws/AWSFeesTable';
import AWSIndiaPricing from '../components/blog-aws/AWSIndiaPricing';
import AWSCostBreakdown from '../components/blog-aws/AWSCostBreakdown';
import AWSCostCalculator from '../components/blog-aws/AWSCostCalculator';
import AWSCertificationRoadmap from '../components/blog-aws/AWSCertificationRoadmap';
import AWSPreparationGuide from '../components/blog-aws/AWSPreparationGuide';
import AWSSelfStudyVsTraining from '../components/blog-aws/AWSSelfStudyVsTraining';
import AWSCareerRoles from '../components/blog-aws/AWSCareerRoles';
import AWSTrainingIMedita from '../components/blog-aws/AWSTrainingIMedita';
import AWSFinalCTA from '../components/blog-aws/AWSFinalCTA';

// Homepage Reusable Showcase Sections
import { PopularCourses } from '../components/courses/PopularCourses';
import { TrainersSection } from '../components/trainers/TrainersSection';
import { BatchesSection } from '../components/batches/BatchesSection';
import { WhyChooseUs } from '../components/whychoose/WhyChooseUs';
import { CampusLife } from '../components/campus/CampusLife';
import { GoogleReviewsSection } from '../components/reviews/GoogleReviewsSection';
import { AuthorizedPartnersSection } from '../components/partners/AuthorizedPartnersSection';
import { DemoRequestSection } from '../components/demo/DemoRequestSection';

// Animation Utilities (Essayist Motion Reference)
import RevealOnScroll from '../components/blog-common/RevealOnScroll';

import styles from './AWSCertificationCostBlog.module.css';

// Sticky Sub-Navbar Items (Zero Emojis, Enterprise Lucide Icons)
const AWS_STICKY_NAV_ITEMS = [
  { id: 'quick-answer', label: 'Quick Fees', icon: Zap },
  { id: 'fees-table', label: '2026 Catalog', icon: BarChart3 },
  { id: 'cost-in-india', label: 'India & GST', icon: Percent },
  { id: 'cost-calculator', label: 'Calculator', icon: Calculator },
  { id: 'certification-roadmap', label: 'Career Roadmap', icon: Compass },
  { id: 'preparation-guide', label: 'Study Blueprint', icon: BookOpen },
  { id: 'faqs', label: '12 FAQs', icon: HelpCircle }
];

// Table of Contents Navigation Data
const TOC_ITEMS = [
  { id: 'quick-answer', title: 'How Much Does AWS Certification Cost in 2026?' },
  { id: 'overview', title: 'AWS Certification Overview: What You Need to Know' },
  { id: 'fees-table', title: 'AWS Certification Exam Fees by Level' },
  { id: 'cost-in-india', title: 'AWS Certification Cost in India (Taxes & GST)' },
  { id: 'additional-expenses', title: 'Additional Certification Expenses' },
  { id: 'cost-calculator', title: 'AWS Certification Cost Calculator (Interactive)' },
  { id: 'certification-roadmap', title: 'Which AWS Certification Should You Choose?' },
  { id: 'preparation-guide', title: 'How to Prepare for AWS Certification' },
  { id: 'self-study-vs-training', title: 'Self-Study vs. Instructor-Led Training' },
  { id: 'career-opportunities', title: 'AWS Certification Career Opportunities' },
  { id: 'imedita-training', title: 'AWS Training at I-Medita' },
  { id: 'faqs', title: 'Frequently Asked Questions (12 FAQs)' },
  { id: 'related-resources', title: 'Related Resources & Guides' }
];

// 12 FAQs required by specifications
const AWS_FAQS = [
  {
    question: 'How much does AWS certification cost in 2026?',
    answer:
      'In 2026, official AWS exam registration fees are standardized worldwide in USD across three primary pricing tiers: Foundational level (Cloud Practitioner CLF-C02) costs $100 USD; Associate level (Solutions Architect SAA-C03, Developer DVA-C02, SysOps SOA-C02, Data Engineer DEA-C01, Machine Learning Engineer MLA-C01) costs $150 USD; and Professional & Specialty level exams cost $300 USD. In India, an 18% Goods and Services Tax (GST) is added at checkout.'
  },
  {
    question: 'What is the cheapest AWS certification?',
    answer:
      'The cheapest AWS certification is the AWS Certified Cloud Practitioner (CLF-C02), priced at $100 USD (approximately ₹8,600 INR + 18% GST). It validates broad foundational understanding of AWS global infrastructure, core cloud services, basic architectural principles, and billing models.'
  },
  {
    question: 'How much does AWS Solutions Architect Associate certification cost?',
    answer:
      'The AWS Certified Solutions Architect – Associate (SAA-C03) exam registration costs $150 USD. For candidates in India, paying through Pearson VUE incurs an additional 18% GST ($27 USD), bringing the total payable exam fee to $177 USD (approximately ₹15,220 INR based on prevailing forex rates).'
  },
  {
    question: 'Is AWS certification worth the investment in 2026?',
    answer:
      'Yes, AWS certifications remain among the highest-ROI enterprise IT credentials globally. AWS holds over 31% of the worldwide cloud infrastructure market. Holding an active AWS credential validates hands-on architectural competence, unlocks automated recruiter screens, boosts salary negotiations, and qualifies professionals for high-demand cloud architect, DevOps, and platform engineering roles.'
  },
  {
    question: 'Can beginners take AWS certification exams?',
    answer:
      'Yes. AWS does not mandate any formal educational prerequisites or prior certifications for taking any exam. Beginners typically start with the AWS Certified Cloud Practitioner (CLF-C02) to build conceptual fluency, or go directly to AWS Certified Solutions Architect – Associate (SAA-C03) if they commit to 6–8 weeks of hands-on lab practice.'
  },
  {
    question: 'Can I get AWS certified without taking training?',
    answer:
      'Yes, you can register and pass AWS exams entirely through self-study using free official AWS Skill Builder modules, AWS Well-Architected Framework whitepapers, YouTube tutorials, and commercial practice exams. However, candidates without hands-on Linux, networking, or cloud operations experience frequently find instructor-led mentoring beneficial to avoid exam retake expenses.'
  },
  {
    question: 'How much does an AWS exam retake cost?',
    answer:
      'AWS does not offer free retakes. If you do not pass an exam, you must pay the full exam fee again ($100 for Foundational, $150 for Associate, or $300 for Professional/Specialty). Furthermore, AWS enforces a mandatory 14-day waiting period from the date of the failed attempt before you can sit for the same exam again.'
  },
  {
    question: 'How long is AWS certification valid?',
    answer:
      'All AWS certifications are valid for exactly 3 years from the date you pass the exam. To maintain active certification status, you must recertify prior to expiration. Recertifying at the same or higher level (e.g., passing Solutions Architect Professional automatically recertifies your Associate) renews your credential for another 3 years.'
  },
  {
    question: 'Which AWS certification is best for beginners?',
    answer:
      'For candidates with zero IT background or non-technical roles (sales, product, project management), the AWS Certified Cloud Practitioner (CLF-C02) is best. For software engineers, system administrators, or network engineers, starting directly with the AWS Certified Solutions Architect – Associate (SAA-C03) offers the highest industry demand and career leverage.'
  },
  {
    question: 'Does AWS offer certification discounts?',
    answer:
      'Yes. Whenever you pass any AWS certification exam, AWS automatically awards a 50% discount voucher in your AWS Certified Account Benefits section. You can apply this 50% voucher toward your next exam registration or future recertification. AWS also occasionally runs promotional challenges (such as Cloud Up or seasonal voucher promos) offering 50% discount codes.'
  },
  {
    question: 'How can I book an AWS certification exam?',
    answer:
      'To schedule an exam: 1) Visit the official AWS Training and Certification portal (aws.training) and log in with your AWS Certification Account; 2) Click "Manage Pearson VUE Exams"; 3) Choose your preferred exam delivery method: in-person at an authorized Pearson VUE testing center or online proctored via OnVUE from your home/office; 4) Select your time slot and complete payment in USD (or enter a prepaid voucher code).'
  },
  {
    question: 'How much does AWS certification cost in India?',
    answer:
      'In India, candidates pay the standard USD exam fee converted to Indian Rupees plus 18% Indian GST. At indicative exchange rates (~₹86/USD), the total payable amounts are approximately: Foundational: ₹10,150 INR ($100 + 18% GST); Associate: ₹15,220 INR ($150 + 18% GST); Professional & Specialty: ₹30,440 INR ($300 + 18% GST). Candidates paying via credit card may also incur a 2.5%–3.5% foreign transaction fee.'
  }
];

export function AWSCertificationCostBlog() {
  const context = useOutletContext() || {};
  const handleOpenDemo = context.handleOpenDemo || (() => {});
  const selectedCourse = context.selectedCourse || 'AWS Certified Solutions Architect – Associate';

  const [readingProgress, setReadingProgress] = useState(0);

  const pageUrl = 'https://www.imedita.com/blog/aws-certification-cost/';
  const pageTitle = 'AWS Certification Cost in 2026: Complete Exam Fee Guide | I-Medita';
  const pageDescription = 'Comprehensive 2026 guide to AWS certification exam costs, fees in India with 18% GST, interactive cost calculator, role-based roadmap, and study strategies.';

  // Reading Progress Bar
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  // Dynamic Head Metadata and JSON-LD injection
  useEffect(() => {
    document.title = pageTitle;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = pageDescription;

    // Set Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = pageUrl;

    // Inject JSON-LD Schema
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'AWS Certification Cost in 2026: Complete Exam Fee Guide',
      'description': pageDescription,
      'image': 'https://www.imedita.com/wp-content/uploads/2024/aws-certification-cost-guide.jpg',
      'author': {
        '@type': 'Person',
        'name': 'Saurabh Yadav',
        'jobTitle': 'Triple CCIE #46962 & Enterprise Networking Specialist',
        'url': 'https://www.imedita.com/trainers/saurabh-yadav/'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'I-Medita',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.imedita.com/wp-content/uploads/2019/11/logo.png'
        }
      },
      'datePublished': '2026-01-15T08:00:00+05:30',
      'dateModified': '2026-11-19T09:00:00+05:30',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': pageUrl
      }
    };

    const breadcrumbsSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.imedita.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Blog',
          'item': 'https://www.imedita.com/blog/'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'AWS Certification Cost in 2026',
          'item': pageUrl
        }
      ]
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': AWS_FAQS.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.id = 'aws-blog-jsonld';
    scriptTag.text = JSON.stringify([articleSchema, breadcrumbsSchema, faqSchema]);
    document.head.appendChild(scriptTag);

    return () => {
      const existingScript = document.getElementById('aws-blog-jsonld');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main className={styles.pageWrapper}>
      {/* Dynamic Slim Reading Progress Bar */}
      <div 
        className={styles.readingProgressBar}
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      {/* SECTION 1: HERO SECTION - Modern, Professional & Attractive 2-Column Masthead */}
      <AWSHero />

      {/* STICKY SUB-NAVBAR: Enterprise Lucide Icons & Reading Progress (Course Page Style) */}
      <CourseStickyNav 
        items={AWS_STICKY_NAV_ITEMS}
        courseTitle="AWS 2026 Fee Guide"
        onOpenDemo={() => handleOpenDemo('AWS Certification Free Demo Class')}
      />

      {/* Main Content Layout with Sticky Sidebar */}
      <div className={styles.layoutContainer}>
        {/* Left Sticky Table of Contents (Desktop) */}
        <aside className={styles.sidebarCol}>
          <TableOfContents items={TOC_ITEMS} />
        </aside>

        {/* Center Main Article Body */}
        <div className={styles.mainArticleCol}>
          {/* SECTION 2: QUICK ANSWER */}
          <AWSPricingCards />

          {/* SECTION 3: TABLE OF CONTENTS (In-flow for Mobile) */}
          <div className={styles.mobileTocSection}>
            <TableOfContents items={TOC_ITEMS} />
          </div>

          {/* SECTION 4: AWS CERTIFICATION OVERVIEW */}
          <RevealOnScroll animation="fade-up">
            <section id="overview" className={styles.contentSection} aria-labelledby="overview-heading">
              <h2 id="overview-heading" className={styles.sectionH2}>
                AWS Certification Overview: What You Need to Know
              </h2>

              <p className={styles.paragraph}>
                Amazon Web Services (AWS) certifications are industry-recognized credentials that validate an individual's 
                cloud expertise and technical skills to design, deploy, and operate applications and infrastructure on the world's 
                most widely adopted cloud platform.
              </p>

              {/* Visual Metric Highlights Bar */}
              <div className={styles.statsPillGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statCardHeader}>
                    <div className={styles.statIconWrap}>
                      <BarChart3 size={18} aria-hidden="true" />
                    </div>
                    <span className={styles.statTag}>Market Dominance</span>
                  </div>
                  <div className={styles.statValue}>31%+</div>
                  <p className={styles.statLabel}>Global cloud infrastructure market share held by AWS (Synergy 2026).</p>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statCardHeader}>
                    <div className={styles.statIconWrap}>
                      <DollarSign size={18} aria-hidden="true" />
                    </div>
                    <span className={styles.statTag}>ROI &amp; Compensation</span>
                  </div>
                  <div className={styles.statValue}>$155K+</div>
                  <p className={styles.statLabel}>Average base salary for certified Solutions Architects in enterprise tech.</p>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statCardHeader}>
                    <div className={styles.statIconWrap}>
                      <Percent size={18} aria-hidden="true" />
                    </div>
                    <span className={styles.statTag}>Exam Benefit</span>
                  </div>
                  <div className={styles.statValue}>50% OFF</div>
                  <p className={styles.statLabel}>Official discount voucher deposited in your account after passing any AWS exam.</p>
                </div>
              </div>

              {/* Essayist Inspired Editorial Pullquote */}
              <blockquote className={styles.editorialQuote}>
                <p className={styles.quoteText}>
                  “Cloud certifications are not merely credentials for your resume. In real-world enterprise infrastructure, they validate that your architectural decisions prevent outages, withstand security breaches, and eliminate runaway infrastructure costs.”
                </p>
                <footer className={styles.quoteAuthor}>
                  — Saurabh Yadav, Triple CCIE #46962 &amp; Enterprise Cloud Advisor
                </footer>
              </blockquote>

              <h3 className={styles.sectionH3}>Why AWS Certifications Matter in 2026</h3>
              
              {/* 3 Scannable Visual Cards replacing dense paragraphs */}
              <div className={styles.whyCertGrid}>
                <div className={styles.whyCertCard}>
                  <div className={styles.whyCertIconWrap}>
                    <ShieldCheck size={20} aria-hidden="true" />
                  </div>
                  <h4 className={styles.whyCertTitle}>Architectural Authority</h4>
                  <p className={styles.whyCertDesc}>
                    Validates adherence to the 6 pillars of the AWS Well-Architected Framework: Reliability, Security, Cost, Performance, Operations, and Sustainability.
                  </p>
                </div>

                <div className={styles.whyCertCard}>
                  <div className={styles.whyCertIconWrap}>
                    <TrendingUp size={20} aria-hidden="true" />
                  </div>
                  <h4 className={styles.whyCertTitle}>15% to 28% Salary Premium</h4>
                  <p className={styles.whyCertDesc}>
                    Certified engineers command significant salary leverage during hiring and promotions across major MNCs and cloud consulting firms.
                  </p>
                </div>

                <div className={styles.whyCertCard}>
                  <div className={styles.whyCertIconWrap}>
                    <Zap size={20} aria-hidden="true" />
                  </div>
                  <h4 className={styles.whyCertTitle}>Recruiter Priority Screening</h4>
                  <p className={styles.whyCertDesc}>
                    ATS filters and enterprise cloud partners mandate active AWS certification numbers for client-facing cloud consulting proposals.
                  </p>
                </div>
              </div>
            </section>
          </RevealOnScroll>

          {/* SECTION 5: AWS CERTIFICATION EXAM FEES COMPARISON */}
          <RevealOnScroll animation="fade-up">
            <AWSFeesTable />
          </RevealOnScroll>

          {/* SECTION 6: AWS CERTIFICATION COST IN INDIA */}
          <RevealOnScroll animation="fade-up">
            <AWSIndiaPricing />
          </RevealOnScroll>

          {/* SECTION 7: ADDITIONAL CERTIFICATION EXPENSES */}
          <RevealOnScroll animation="fade-up">
            <AWSCostBreakdown />
          </RevealOnScroll>

          {/* SECTION 8: AWS CERTIFICATION COST CALCULATOR */}
          <RevealOnScroll animation="fade-up">
            <AWSCostCalculator />
          </RevealOnScroll>

          {/* SECTION 9: AWS CERTIFICATION ROADMAP */}
          <RevealOnScroll animation="fade-up">
            <AWSCertificationRoadmap />
          </RevealOnScroll>

          {/* SECTION 10: HOW TO PREPARE FOR AWS CERTIFICATION */}
          <RevealOnScroll animation="fade-up">
            <AWSPreparationGuide />
          </RevealOnScroll>

          {/* SECTION 11: SELF-STUDY VS INSTRUCTOR-LED TRAINING */}
          <RevealOnScroll animation="fade-up">
            <AWSSelfStudyVsTraining />
          </RevealOnScroll>

          {/* SECTION 12: AWS CERTIFICATION CAREER OPPORTUNITIES */}
          <RevealOnScroll animation="fade-up">
            <AWSCareerRoles />
          </RevealOnScroll>

          {/* SECTION 13: AWS TRAINING AT I-MEDITA */}
          <RevealOnScroll animation="scale">
            <AWSTrainingIMedita onOpenDemo={handleOpenDemo} />
          </RevealOnScroll>

          {/* Author and Technical Reviewer Bios */}
          <RevealOnScroll animation="fade-up">
            <div className={styles.authorsWrapper}>
              <AuthorBio />
            </div>
          </RevealOnScroll>

          {/* SECTION 14: FREQUENTLY ASKED QUESTIONS */}
          <RevealOnScroll animation="fade-up">
            <section id="faqs" className={styles.contentSection} aria-labelledby="faq-section-heading">
              <div className={styles.faqHeader}>
                <span className={styles.faqEyebrow}>Clear Direct Answers</span>
                <h2 id="faq-section-heading" className={styles.sectionH2}>
                  Frequently Asked Questions About AWS Certification Costs
                </h2>
                <p className={styles.paragraph}>
                  Have more questions regarding Pearson VUE booking, retake policies, and exam preparation? 
                  Here are clear, direct answers to the most common queries.
                </p>
              </div>

              <FAQAccordion items={AWS_FAQS} />
            </section>
          </RevealOnScroll>

          {/* SECTION 15: RELATED ARTICLES */}
          <RevealOnScroll animation="fade-up">
            <RelatedArticles />
          </RevealOnScroll>

          {/* SECTION 16: FINAL BLOG CTA */}
          <RevealOnScroll animation="scale">
            <AWSFinalCTA onOpenDemo={handleOpenDemo} />
          </RevealOnScroll>
        </div>
      </div>

      {/* ================= HOMEPAGE INSTITUTIONAL SHOWCASE SECTIONS ================= */}
      {/* 1. Official Training Catalog / Popular Certification Courses */}
      <PopularCourses onOpenDemo={(course) => handleOpenDemo(course)} />

      {/* 2. INDUSTRY BENCHMARK MENTORS / Elite CCIE Faculty */}
      <TrainersSection />

      {/* 3. CLASSROOM & LIVE ONLINE SCHEDULES / Upcoming Live Batches */}
      <BatchesSection onOpenDemo={(course) => handleOpenDemo(course)} />

      {/* 4. EXPERIENCE I-MEDITA EXCELLENCE / Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Campus & Lab Facilities (Interactive Datacenter & Lab Life) */}
      <CampusLife />

      {/* 6. 4.8 / 5.0 Google Reviews & Testimonials */}
      <GoogleReviewsSection />

      {/* 7. Authorized Partners & Placement Alliances */}
      <AuthorizedPartnersSection />

      {/* 8. Book Free Demo Class CTA Form */}
      <DemoRequestSection selectedCourse={selectedCourse} />
    </main>
  );
}

export default AWSCertificationCostBlog;
