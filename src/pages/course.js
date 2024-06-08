import Link from "next/link";

const myStyle = {
  backgroundColor: '#E5E5E5',
  height: 6000,
  padding: 100
};

const firstText = {
  padding: 50
}

const listStyle = {
  padding: 10
}


export default function Home() {
  return (<>
<div style={myStyle}> 
  <h1>Welcome!</h1> 
  <p>Below is the curriculum that is slowly coming together. What do you need help with?</p>
  <ol>
    <li>Course Overview</li>
    <ul>
        <li>Section goal</li>
        <li>What this course is</li>
        <li>What this course is NOT</li>
        <li>My style of teaching</li>
        <li>My personal experience</li>
        <li>Types of jobs I'm referrgin to</li>
        <li>How you can help</li>
        <li>A realistic timeline</li>
        <li>Knowledge check</li>
    </ul>
    <li>Fundamentals
      <ul>
        <li>Goals for this section</li>
        <li>The leetcode demon</li>
        <li>The perfect formula</li>
        <li>Most people are nice</li>
        <li>Buzz words</li>
        <li>Communicating in a succint manner</li>
        <li>The Knowledge Venn Diagram</li>
        <li>Everything must be happening for a reason</li>
        <li>Asking for help vs. figuring it out on your own</li>
        <li>Problem solving</li>
        <li>Knoweldge Check</li>
        <li>I am once again asking for your donation.</li>
      </ul>
    </li>
    <li>Technical topics</li>
        <ul>
            <li>Begin with a quiz</li>
            <li>What is coding?</li>
            <li>What is a server?</li>
            <li>From code to a build</li>
            <li>Monoliths and Microservices</li>
            <li>A casual look at system design</li>
            <li>Distributed systems</li>
        </ul>

  <ul style={listStyle}>      
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/help">How you can help</Link></li>
      </ul>
  </ol>
    </div>
    </>);
}