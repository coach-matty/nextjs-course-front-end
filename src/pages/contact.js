import Link from "next/link";
import styles from './styles.module.css';
import NavBar from './navBar';

export default function Contact() {
  return (<>
    <nav className={styles.navStyle} >
      <NavBar></NavBar>
    </nav>
    <div className={styles.centeredText}>
    <h1>Contact</h1>
      <div> You can email me at itsmattypurple@gmail.com</div>
      <div> I'd love to come speak at your conference or school.</div>
    </div>
    
    </> );
}
