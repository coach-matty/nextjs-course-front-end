import Link from "next/link";
import styles from './styles.module.css';

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 550,
    padding: 100
}

const navStlye = {
    backgroundColor: '#96C8EE',
    padding: 10
  }


export default function Help() {
    return (<> 
    <nav className={styles.navStyle}  >
            <button><Link href="/">Home</Link></button>
            <button><Link href="/course">Course</Link></button>
            <button><Link href="/contact">Contact</Link></button>
            <button><Link href="/help">How you can help</Link></button>
    </nav>

<div className={styles.centeredText}>
    <h1>HELP ME!</h1>
        <h2>There are TWO ways you can help!</h2>
        <div>
            <strong>First</strong> - You can help by joining my <a href="https://www.patreon.com/mattypurple">
            Patreon</a> or through a one-time donation at my <a href="https://gofund.me/4aa27eff">
            GoFundMe!</a> Giving back to my community is extremely important to me.
            
            <p>I have tiers starting at 1$ a month! Be a part of the movement!</p>
            <p>For now I will be donating 100% of the money I receive.</p>
        </div>
        <div>
        <strong>Second</strong> - you can SHARE! If you guys share my videos
            and show them to your friends then we'll have the course
            for more and more people!
        </div>
        </div>
        </>);
}


