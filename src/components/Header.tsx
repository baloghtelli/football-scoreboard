import React from 'react'
import styles from './Header.module.scss';
import '../styles/globals.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>Football Scoreboard</h2>
    </header>
  )
}
