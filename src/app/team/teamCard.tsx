import React from 'react';
import styles from './FlipCard.module.css'; // Import the CSS module
import Image, { StaticImageData } from 'next/image';

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
          <Image
            src={photoUrl}
            alt={name}
            className={styles.profileImage}

          />
          <div className={styles.textOverlay}>
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
          </div>
        </div>
        {/* Back Side */}
        <div className={styles.flipCardBack}>
          <p className={styles.quote}>{quote}</p>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinLink}
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
