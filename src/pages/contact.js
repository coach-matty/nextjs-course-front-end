import Link from "next/link";
import styles from './styles.module.css';

export default function Contact() {
  return (<>
    <nav className={styles.navStyle} >
            <button><Link href="/">Home</Link></button>
            <button><Link href="/course">Course</Link></button>
            <button><Link href="/contact">Contact</Link></button>
            <button><Link href="/help">How you can help</Link></button>
    </nav>
    <div className={styles.centeredText}>
    <h1>Contact</h1>
      <div> You can email me at itsmattypurple@gmail.com</div>
      <div> I'd love to come speak at your conference or school.</div>
    </div>
    
    </> );
}
