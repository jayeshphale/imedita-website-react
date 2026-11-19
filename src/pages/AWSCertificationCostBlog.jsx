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
  Zap
} from 'lucide-react';

// Common Blog Components
import BlogBreadcrumbs from '../components/blog-common/BlogBreadcrumbs';
import BlogMeta from '../components/blog-common/BlogMeta';
import TableOfContents from '../components/blog-common/TableOfContents';
import ShareButtons from '../components/blog-common/ShareButtons';
import AuthorBio from '../components/blog-common/AuthorBio';
import FAQAccordion from '../components/blog-common/FAQAccordion';
import RelatedArticles from '../components/blog-common/RelatedArticles';

// Page-Specific AWS Blog Components
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

// Animation Utilities (Essayist Motion Reference)
import RevealOnScroll from '../components/blog-common/RevealOnScroll';

import styles from './AWSCertificationCostBlog.module.css';

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

  const breadcrumbsList = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'AWS Certification Cost', href: '/blog/aws-certification-cost' }
  ];

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

      {/* SECTION 1: HERO SECTION - Clean, Editorial Magazine Masthead */}
      <header className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroBreadcrumbWrap}>
            <BlogBreadcrumbs breadcrumbs={breadcrumbsList} />
          </div>

          <div className={styles.heroCenterContent}>
            <div className={styles.editionBadge}>
              <span className={styles.editionTag}>2026 EDITION</span>
              <span className={styles.editionDot}>•</span>
              <span className={styles.editionSeries}>AWS CLOUD ARCHITECTURE &amp; CAREER BLUEPRINT</span>
              <span className={styles.editionDot}>•</span>
              <span className={styles.editionReadTime}>12 MIN READ</span>
            </div>

            <h1 className={styles.heroH1}>
              AWS Certification Cost in 2026: Complete Exam Fee Guide
            </h1>

            <p className={styles.heroLead}>
              Planning your cloud career roadmap? Here is the definitive, verified breakdown of all 
              Amazon Web Services (AWS) exam fees, Indian taxation (18% GST), hidden preparation expenses, 
              and actionable study schedules from CCIE &amp; AWS certified enterprise architects.
            </p>

            <div className={styles.heroMetaWrap}>
              <BlogMeta 
                authorName="Saurabh Yadav"
                authorRole="Triple CCIE #46962 & Enterprise Networking Lead"
                reviewerName="Sudhanshu Bhat"
                reviewerRole="CCIE & Cloud Solutions Architect"
                publishedDate="November 19, 2026"
                readTime="12 min read"
              />
            </div>

            {/* Quick Metrics Strip */}
            <div className={styles.heroMetricsStrip}>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>$100 – $300</span>
                <span className={styles.metricLabel}>Official Global Fees</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>₹10,150 – ₹30,440</span>
                <span className={styles.metricLabel}>India (incl. 18% GST)</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>3 Years</span>
                <span className={styles.metricLabel}>Active Validity</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>50% Off</span>
                <span className={styles.metricLabel}>Loyalty Voucher Benefit</span>
              </div>
            </div>

            {/* Quick-Jump Navigation Dock */}
            <nav className={styles.quickNavDock} aria-label="Quick Jump Menu">
              <span className={styles.quickNavTitle}>Jump to section:</span>
              <div className={styles.quickNavChips}>
                <a href="#quick-answer" className={styles.quickNavChip}>⚡ Quick Fees</a>
                <a href="#fees-table" className={styles.quickNavChip}>📊 Exam Catalog</a>
                <a href="#cost-in-india" className={styles.quickNavChip}>🇮🇳 India &amp; GST</a>
                <a href="#cost-calculator" className={styles.quickNavChip}>🧮 Calculator</a>
                <a href="#certification-roadmap" className={styles.quickNavChip}>🗺️ Roadmap</a>
                <a href="#preparation-guide" className={styles.quickNavChip}>📚 Study Blueprint</a>
                <a href="#faqs" className={styles.quickNavChip}>❓ 12 FAQs</a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className={styles.layoutContainer}>
        {/* Left Sticky Table of Contents (Desktop) */}
        <aside className={styles.sidebarCol}>
          <TableOfContents items={TOC_ITEMS} />
          <div className={styles.sidebarShare}>
            <ShareButtons url={pageUrl} title={pageTitle} />
          </div>
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
                most widely adopted cloud platform. As organizations across banking, healthcare, telecom, and enterprise SaaS 
                continue accelerating their multi-cloud migrations, certified cloud engineers remain in the highest tier of tech demand.
              </p>

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
              <p className={styles.paragraph}>
                According to global cloud employment studies, certified cloud practitioners command 15% to 28% higher base salaries 
                compared to non-certified peers. More importantly, obtaining an AWS certification demonstrates that your architectural 
                decisions adhere to AWS best practices—specifically security compliance, fault tolerance, high availability, and 
                cost efficiency.
              </p>

              <div className={styles.tiersGrid}>
                <div className={styles.tierBox}>
                  <div className={styles.tierBoxHeader}>
                    <span className={styles.tierStepBadge}>01</span>
                    <span className={styles.tierTag}>CLF-C02 • $100 USD</span>
                  </div>
                  <h4 className={styles.tierName}>Foundational Tier</h4>
                  <p className={styles.tierDesc}>
                    Validates overall understanding of AWS Cloud concepts, security, compliance, and billing. Best for beginners, 
                    product managers, business analysts, and sales leads.
                  </p>
                </div>

                <div className={styles.tierBox}>
                  <div className={styles.tierBoxHeader}>
                    <span className={styles.tierStepBadge}>02</span>
                    <span className={styles.tierTag}>Associate • $150 USD</span>
                  </div>
                  <h4 className={styles.tierName}>Associate Tier</h4>
                  <p className={styles.tierDesc}>
                    Validates hands-on knowledge of designing and deploying resilient distributed systems, serverless code, 
                    data pipelines, and generative AI models on AWS.
                  </p>
                </div>

                <div className={styles.tierBox}>
                  <div className={styles.tierBoxHeader}>
                    <span className={styles.tierStepBadge}>03</span>
                    <span className={styles.tierTag}>Professional • $300 USD</span>
                  </div>
                  <h4 className={styles.tierName}>Professional Tier</h4>
                  <p className={styles.tierDesc}>
                    Evaluates 2+ years of comprehensive enterprise cloud design, multi-account governance (AWS Organizations), 
                    hybrid connectivity (Direct Connect), and complex DR strategies.
                  </p>
                </div>

                <div className={styles.tierBox}>
                  <div className={styles.tierBoxHeader}>
                    <span className={styles.tierStepBadge}>04</span>
                    <span className={styles.tierTag}>Specialty • $300 USD</span>
                  </div>
                  <h4 className={styles.tierName}>Specialty Tier</h4>
                  <p className={styles.tierDesc}>
                    Deep-dive technical validation in specialized security and advanced enterprise networking domains.
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

          {/* SECTION 16: FINAL CTA */}
          <RevealOnScroll animation="scale">
            <AWSFinalCTA onOpenDemo={handleOpenDemo} />
          </RevealOnScroll>
        </div>
      </div>
    </main>
  );
}

export default AWSCertificationCostBlog;
