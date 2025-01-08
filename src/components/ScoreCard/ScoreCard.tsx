import React from "react";
import styles from "./ScoreCard.module.scss";
import Image from "next/image";

export default function ScoreCard() {

  return (
    <div className={styles.scoreCard}>
      <div className={styles.matchMinuteContainer}>
        <p className={styles.matchMinute}>22&apos;</p>
      </div>
      <div className={styles.matchScoreContainer}>
        <p className={styles.matchScore}>2</p>
        <p className={styles.matchScore}>1</p>
      </div>
      <div className={styles.matchFixture}>
        <div className={styles.team}>
          <Image
            src="/images/chelsea.png"
            alt="Chelsea FC logo"
            width={16}
            height={16}
          />
          <p>Chelsea FC</p>
        </div>
        <div className={styles.team}>
          <Image
            src="/images/manchester-united.png"
            alt="Manchester United logo"
            width={16}
            height={16}
          />
          <p>Manchester United</p>
        </div>
      </div>
    </div>
  );
}
