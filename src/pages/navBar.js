import React from 'react';
import Link from "next/link";
import styles from './styles.module.css';

function NavBar() {
    return (<>
        <button className={styles.buttonStyle}><Link href="/">Home</Link></button>
        <button className={styles.buttonStyle}><Link href="/course">Course</Link></button>
        <button className={styles.buttonStyle}><Link href="/contact">Contact</Link></button>
        <button className={styles.buttonStyle}><Link href="/help">How you can help</Link></button>
        </> );
  }

  export default NavBar;