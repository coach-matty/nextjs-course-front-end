import Link from "next/link";
import styles from './styles.module.css';
import NavBar from "../../navBar";

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
}

const textWidth = {
    width: 500
}

const navStlye = {
    backgroundColor: '#96C8EE',
    padding: 10
  }

export default function TeachingStyle() {
    return (<> 
    <nav className={styles.navStyle} >
        <NavBar></NavBar>
    </nav>
    <div style={parentStyle}>

        <h1>My Teaching Style</h1>
        <p>I'm going to try teaching in a way that feels natural to me. </p>
        <p style={textWidth}>A little about me: I have severe ADHD and am also Bipolar. This makes me tend to rant and talk forever.
            One reason I'm making this course is to try to give these endless rants a home. I promise I'm saying some good stuff!
        </p>
        <p>So my thinking is this:
        </p>
        <p>Each lesson in the course will have at least 2 parts, with some having 3. These parts are:
        </p>
        <ul>
            <li>A shorter rant about the topic. Think TikTok / Reels.</li>
            <li>A longer (3-10 minute) video where I explain the concept in a more polished way.</li>
            <li style={textWidth}>A long (10 mins - 3 hours) video or stream where I dig into the topic from scratch. You'll see me have to debug and figure out things on the fly. You'll get to see how I act when I get stuck.</li>
        </ul>
        </div>
        </>);
}


