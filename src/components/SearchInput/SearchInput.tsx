"use client";
import React from "react";
import styles from "./SearchInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSearch } from '@/contexts/SearchContext';


export default function SearchInput() {
  const { openSearch, setOpenSearch } = useSearch();
  if (!openSearch) return null;

  return (
    <div className={styles.searchOverlay}>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search for teams..."
          autoFocus={true}
        />
        <button onClick={() => setOpenSearch(false)} className={styles.closeButton}>
          <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
        </button>
      </div>
    </div>
  );
}
