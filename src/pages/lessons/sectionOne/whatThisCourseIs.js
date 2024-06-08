import Link from "next/link";

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
}

export default function WhatThisCourseIs() {
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

        <h1>What this course is</h1>
        <p>The goal of this course is to be a practical guide to getting a software engineering job. I also want it to be
            useful for those that already have a job and want to improve their engineering skills!
             We all know about leetcode. We all know about interview tips like STAR
              However, I think this hyperfocusing on 'beating the interview' leaves us with new engineers
              that really don't know how much software works. Could you explain to me what coding is right now if your job
              depended on it? I want to get back to the fundamentals and make sure everyone has them rock solid - because
              having these fundamentals have proved to be so useful to me. This course aims for me to teach you all EVERYTHING 
              I've learned throughout my career so far as a software engineer. I think by teaching everyone I can help build confidence
              and increase the number of people with an intellectually stimulating and well paying job! We should all have equal opportunities.
        </p>
        </div>
        </>);
}


