import React from 'react';
import { 
  Award, 
  Server, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  PhoneCall,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import styles from './AWSTrainingIMedita.module.css';

export default function AWSTrainingIMedita({ onOpenDemo = () => {} }) {
  return (
    <section id="imedita-training" className={styles.section} aria-labelledby="training-heading">
      <div className={styles.container}>
        <div className={styles.mainCard}>
          <div className={styles.contentCol}>
            <div className={styles.badgeWrap}>
              <Award className={styles.badgeIcon} aria-hidden="true" />
              <span>Industry-Leading Cloud Mentorship</span>
            </div>

            <h2 id="training-heading" className={styles.title}>
              Fast-Track Your AWS Certification with I-Medita
            </h2>

            <p className={styles.lead}>
              Master AWS with real-time enterprise topologies, deep networking foundations, and hands-on guidance from certified industry veterans.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIconWrap}>
                  <Server className={styles.featureIcon} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>24/7 Hands-On Lab Access</h3>
                  <p className={styles.featureText}>
                    Practice enterprise VPC peering, hybrid Direct Connect topologies, and auto-scaling setups on dedicated lab racks without personal AWS bill surprises.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIconWrap}>
                  <Users className={styles.featureIcon} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Mentorship by CCIE &amp; AWS Architects</h3>
                  <p className={styles.featureText}>
                    Taught directly by certified instructors with 10+ years of enterprise consulting experience, ensuring deep architectural understanding rather than rote memorization.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIconWrap}>
                  <BookOpen className={styles.featureIcon} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Updated 2026 Curriculum</h3>
                  <p className={styles.featureText}>
                    Fully aligned with the latest AWS examination blueprints (SAA-C03, DVA-C02, SOA-C02) including serverless patterns and cloud cost optimization.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIconWrap}>
                  <ShieldCheck className={styles.featureIcon} aria-hidden="true" />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Full Mock Exam Drill Sessions</h3>
                  <p className={styles.featureText}>
                    Rigorous timed simulator tests, scenario deconstruction, and domain-by-domain weak-area remediation to ensure a high first-attempt pass rate.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <button 
                type="button" 
                className={styles.primaryBtn} 
                onClick={onOpenDemo}
              >
                <span>Book a Free Live Demo Session</span>
                <ArrowRight className={styles.btnArrow} aria-hidden="true" />
              </button>

              <a 
                href="/courses" 
                className={styles.secondaryBtn}
              >
                <span>Explore All Cloud Courses</span>
              </a>
            </div>

            <div className={styles.trustFooter}>
              <span className={styles.trustItem}>
                <CheckCircle2 className={styles.trustCheck} aria-hidden="true" />
                Authorized Training Methodology
              </span>
              <span className={styles.trustDot}>•</span>
              <span className={styles.trustItem}>
                <CheckCircle2 className={styles.trustCheck} aria-hidden="true" />
                Classroom &amp; Online Batches
              </span>
              <span className={styles.trustDot}>•</span>
              <span className={styles.trustItem}>
                <CheckCircle2 className={styles.trustCheck} aria-hidden="true" />
                Post-Training Placement Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
