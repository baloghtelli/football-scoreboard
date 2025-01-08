import React from "react";
import styles from "./Table.module.scss";
import Image from 'next/image';

export default function Table() {
  return (
    <div className={styles.table}>
      <div className={styles.tableRow}>
        <div className={styles.leftRow}>
          <h3>Premier League</h3>
        </div>
        <div className={styles.rightRow}>
          <span>M</span>
          <span>+/-</span>
          <span>PTS</span>
        </div>
      </div>
      <div className={styles.tableRow}>
        <div className={styles.leftRow}>
          <span>1</span>
          <Image src='/images/chelsea.png' alt="Chelsea FC Logo" width={24} height={24}/>
          <span>Chelsea</span>
        </div>
        <div className={styles.rightRow}>
          <span>20</span>
          <span>26</span>
          <span>42</span>
        </div>
      </div>
      <div className={styles.tableRow}>
        <div className={styles.leftRow}>
          <span>2</span>
          <Image src='/images/manchester-united.png' alt="Manchester United Logo" width={24} height={24}/>
          <span>Manchester United</span>
        </div>
        <div className={styles.rightRow}>
          <span>20</span>
          <span>22</span>
          <span>36</span>
        </div>
      </div>
      <div className={styles.tableRow}>
        <div className={styles.leftRow}>
          <span>3</span>
          <Image src='/images/liverpool.png' alt="Liverpool Logo" width={24} height={24}/>
          <span>Liverpool</span>
        </div>
        <div className={styles.rightRow}>
          <span>20</span>
          <span>21</span>
          <span>34</span>
        </div>
      </div>
      <div className={styles.tableRow}>
        <div className={styles.leftRow}>
          <span>4</span>
          <Image src='/images/tottenham.png' alt="Tottenham Logo" width={24} height={24}/>
          <span>Tottenham Hotspur</span>
        </div>
        <div className={styles.rightRow}>
          <span>20</span>
          <span>17</span>
          <span>27</span>
        </div>
      </div>
    </div>
  );
}
