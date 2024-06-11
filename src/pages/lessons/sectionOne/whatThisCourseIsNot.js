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


export default function WhatThisCourseIsNot() {
    return (<> 
    <nav style={navStlye} >
            <button><Link href="/">Home</Link></button>
            <button><Link href="/course">Course</Link></button>
            <button><Link href="/contact">Contact</Link></button>
            <button><Link href="/help">How you can help</Link></button>
    </nav>
    <div style={parentStyle}>

        <h1>What this course is NOT</h1>
        <h2>LISTEN UP</h2>
        <p>The last thing I want to do is add to the confusion. I believe my lessons will help almost ALL engineers.
            However, my lessons...
        </p>
        <ul>
            <li>Will <strong>NOT</strong> cover Front End technologies like React / Javascript. I don't do that!</li>
            <li>Teach you any leetcode. <a href="https://neetcode.io">NeetCode</a> has already created the greatest Leetcode resources that I've seen. 
                I will be explaining how leetcode fits into the puzzle.</li>
                <li>Promise any job. None of this is easy and if it was you would have the job already. I will however do everything I can to give you a good shot.</li>
        </ul>

        </div>
        </>);
}


