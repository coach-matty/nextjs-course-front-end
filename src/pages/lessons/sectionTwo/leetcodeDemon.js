import Link from "next/link";

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
}

const navStlye = {
    backgroundColor: '#96C8EE',
    padding: 10
  }

export default function RealisticTimeline() {
    return (<> 
    <nav style={navStlye} >
            <button><Link href="/">Home</Link></button>
            <button><Link href="/course">Course</Link></button>
            <button><Link href="/contact">Contact</Link></button>
            <button><Link href="/help">How you can help</Link></button>
    </nav>
    <div style={parentStyle}>

        <h1>LEETCODE YAY</h1>
        <p>I'l try to keep this short. LeetCode is a deal you make with the devil.
            If you want to go into interviews with confidence and actually start passing 50%+ of
            interviews - you need to leetcode. Unless you're just straight up disgusting 
            at leetcode then you probably need to start doing it up to 6-9 months in advance.
        </p>
        <p>Dont' cram! For my most recent position I started doing 1-2 problems a day, Monday - Friday,
            about 4 months before I started interviewing. I was consistent with a lighter load
            and wasn't at risk of burning out.
        </p>
        <p>It sucks but if you're willing to suck it up it will drastically increase your
            chances of getting a job.
        </p>
        
        <h1>NEETCODE</h1>
        <p>Luckily this guy named <a href="https://neetcode.io/">NeetCode</a> made the greatest free 
        leetcode resource to ever exist. I'm not even going to try to teach any leetcode stuff
        because he already won. Which is a good thing! Let's go!</p>
        </div>
        </>);
}

