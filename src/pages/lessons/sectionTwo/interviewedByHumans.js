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
        <h1>You're being interviewed by humans
        </h1>
        <p>This is essentially like an OG blog post.</p>
        <p>I haven't interviewed that many people before - but I've still done a few. In those interviews
            the interviewee often knew things that I didn't. But how is that so? Because software
            engineering is so vast that they are bound to know things I don't know. Sometimes my colleauges would
            ask questions and I wasn't even sure I knew the answer to them.
        </p>
        <p>The point is that after a while you start to gain confidence. I perosnally find 
            a lot of confidence in knowing the fundamentals, which is why I am trying
            to teach some of them. If you know how the underlying system works then it's a lot
            easier to visualize everything else. I also just need a place for my rants.
        </p>
        <p>Your first few interviews are always scary. You feel like its a contest to prove what you know
            and impress the people across the table. And it is - but at the same time I find that
            people always interview better when it feels like a conversation. They are simply people on the other end and 
            it's part of their job to interview you. They want to find personable and smart (the fundamentals count!)
            people to work with. It's the interviewer's job to make you comfortable, but you should your best
            to relax and go for a conversational style. Don't get too casual, but at the same time it doesn't
            need to feel like a game show.
        </p>
        <p>Take it slow, really learn this stuff and have fun doing it, and tne confidence will start to grow.
            It's also really nice to learn concepts that you can apply to any language in
            both the front end and back end. I'm learning nextJS on the fly to build this site - which
            isn't too much of a brag, but nothing is too confusing since I generally can expect
            how it should work. It takes time but I'm starting to have the intuition I thought I never would have!
        </p>
        </div>
        </>);
}

