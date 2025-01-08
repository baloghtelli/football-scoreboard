import React from "react";
import styles from "./Header.module.scss";
import "@/styles/globals.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSearch } from "@/contexts/SearchContext";

export default function Header() {
  const { setOpenSearch } = useSearch();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        <div className={styles.title}>
          <Image
            src="/images/scoreTrack-logo.png"
            alt="Football Scoreboard Logo"
            width={50}
            height={50}
          />
          <h1 className={styles.headerTitle}>ScoreTrack PL</h1>
        </div>
      </Link>

      <div className={styles.searchContainer}>
        <button
          onClick={() => setOpenSearch(true)}
          className={styles.searchButton}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.searchIcon}
          />
        </button>
      </div>
    </header>
  );
}
