import React, { useState } from 'react';
import { Share2, Check, Copy, MessageCircle } from 'lucide-react';
import styles from './ShareButtons.module.css';

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const XTwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export function ShareButtons({ title = '', url = '' }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedinShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsappShare = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} - ${shareUrl}`)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.shareWrapper}>
      <span className={styles.shareLabel}>
        <Share2 size={13} className={styles.shareIcon} />
        <span>Share Guide:</span>
      </span>

      <div className={styles.buttonsGroup}>
        <button
          type="button"
          onClick={handleLinkedinShare}
          className={`${styles.shareBtn} ${styles.btnLinkedin}`}
          title="Share on LinkedIn"
          aria-label="Share on LinkedIn"
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </button>

        <button
          type="button"
          onClick={handleTwitterShare}
          className={`${styles.shareBtn} ${styles.btnTwitter}`}
          title="Share on X (Twitter)"
          aria-label="Share on X (Twitter)"
        >
          <XTwitterIcon />
          <span>X / Twitter</span>
        </button>

        <button
          type="button"
          onClick={handleWhatsappShare}
          className={`${styles.shareBtn} ${styles.btnWhatsapp}`}
          title="Share on WhatsApp"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle size={14} />
          <span>WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className={`${styles.shareBtn} ${styles.btnCopy} ${copied ? styles.btnCopied : ''}`}
          title="Copy Link"
          aria-label="Copy Link"
        >
          {copied ? (
            <>
              <Check size={14} className={styles.checkIcon} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ShareButtons;
