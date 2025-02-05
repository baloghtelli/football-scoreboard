import React from "react";
import styles from "./LeagueCard.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function LeagueCard() {

  return (
    <Link href="/leagueTable" className={styles.link}>
      <div className={styles.leagueCard}>
        <Image
          src="/images/premier-league.png"
          alt="Premier League Logo"
          width={24}
          height={24}
        />
        <h3>Premier League</h3>
        <Image
          src="/images/england.png"
          alt="England Logo"
          width={18}
          height={12}
        />
      </div>
    </Link>
  );
}
