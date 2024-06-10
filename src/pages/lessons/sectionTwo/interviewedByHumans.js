import Link from "next/link";

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
}



export default function RealisticTimeline() {
    return (<> 
    <nav>
            <ul>      
            <li><Link href="/">Home</Link></li>
            <li><Link href="/course">Course</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/help">How you can help</Link></li>
        </ul>
    </nav>
    <div style={parentStyle}>

        <p>This is essentially like an OG blog post.</p>
        <p>I haven't interview that many people before - but I've still done a few. In those interviews
            the interviewee often knew things that I didn't. But how is that so? Because software
            engineering is so vast that they are bound to know things I don't. Sometimes my colleauge would
            ask questions I'm not even sure I knew.
        </p>
        <p>The point is that after a while you start to gain confidence. I perosnally find 
            a lot of confidence in knowing the fundamentals, which is why I am trying
            to teach some of them. I also just need a place for my rants.
        </p>
        <p>Take it slow, really learn this stuff, and confidence will start to grow.
            It's also really nice to learn concepts that you can apply to any language In
            both the front end and back end. I'm learning nextJS on the fly to build this site - which
            isn't too much of a brag, but nothing is too confusing since I generally can expect
            how it should work. It takes time but I'm starting to have the intuition I thought I never would have!
        </p>
        </div>
        </>);
}

