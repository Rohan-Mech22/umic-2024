import React from 'react';
import styles from './FlipCard.module.css'; // Import the CSS module
import Image, { StaticImageData } from 'next/image';

// LinkedIn SVG Icon (for mobile view)
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="#0077b5"
    viewBox="0 0 24 24"
    className={styles.linkedinIcon}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.137 1.447-2.137 2.941v5.665h-3.553v-11.452h3.413v1.561h.049c.476-.899 1.637-1.848 3.369-1.848 3.598 0 4.264 2.367 4.264 5.451v6.288h-.001zm-14.416-13.452c-1.146 0-2.076-.93-2.076-2.076s.93-2.076 2.076-2.076 2.076.93 2.076 2.076-.931 2.076-2.076 2.076zm1.777 13.452h-3.554v-11.452h3.554v11.452zm16.192-20h-20c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2z" />
  </svg>
);

interface FlipCardProps {
  name: string;
  photoUrl: StaticImageData;
  position: string;
  quote: string;
  linkedInUrl: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ name, photoUrl, position, quote, linkedInUrl }) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        {/* Front Side */}
        <div className={styles.flipCardFront}>
          <Image src={photoUrl} alt={name} className={styles.profileImage} />
          <div className={styles.textOverlay}>
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className={styles.flipCardBack}>
          {/* Mobile View: Name, Position, and LinkedIn Icon */}
          <div className={styles.mobileBackContent}>
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> {/* LinkedIn Icon for Mobile */}
            </a>
          </div>

          {/* Desktop View: Quote and LinkedIn Text (no icon) */}
          <div className={styles.desktopBackContent}>
            <p className={styles.quote}>{quote}</p>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={styles.linkedinText}>
              Connect on LinkedIn {/* Text only for Desktop */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
