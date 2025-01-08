import React from 'react'
import styles from './Header.module.scss';
import '@/styles/globals.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  onSearchClick: () => void;
}

export default function Header({onSearchClick}: HeaderProps) {
  
  
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Image 
          src='/images/football-scoreboard-logo.png'
          alt='Football Scoreboard Logo'
          width={50}
          height={50}
        />  
        <h1 className={styles.headerTitle}>Scoretrack</h1>
      </div>
      
      <div className={styles.searchContainer}>
        <button onClick={onSearchClick} className={styles.searchButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
        </button>
  
      </div>
    </header>
  )
}
