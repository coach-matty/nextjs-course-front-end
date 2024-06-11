import Link from "next/link";
import styles from './styles.module.css';

const mattFaceContainer = {
  textAlign: 'center'
}

const mattFace = {
  height: '20%',
  width: '20%'
}


export default function Home() {
  return (<>
    <nav className={styles.navStyle} >
            <button className={styles.buttonStyle}><Link href="/">Home</Link></button>
            <button className={styles.buttonStyle}><Link href="/course">Course</Link></button>
            <button className={styles.buttonStyle}><Link href="/contact">Contact</Link></button>
            <button className={styles.buttonStyle}><Link href="/help">How you can help</Link></button>
    </nav>
    <div style={mattFaceContainer}>
      <img style={mattFace} src="/images/matt_face.png" alt="Coach Matty's Face" />
    </div>

<div className={styles.centeredText}> 
  <h1>Welcome!</h1> 
    <p>Hi! You've landed at Coach Matty's FREE software engineering course!</p> 
    <p>It's my mission to provide the most helpful content to help you get a job as a Software Engineer. Or, if you have a job, hopefully I can teach you a few things!</p>
    <p>This site is just getting started - so hang tight!</p>
    <p>Shameless plug - I am trying to give back to my community as much as possible.<Link href="/help"> See how you can help!</Link></p>
    </div>
    </>);
}
