import Link from "next/link";

const myStyle = {
  backgroundColor: '#E5E5E5',
  height: 6000,
  padding: 100
};


export default function Course() {
  return (<>
      <nav>
            <ul>      
            <li><Link href="/lessons/sectionOneGoals">Home</Link></li>
            <li><Link href="/course">Course</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/help">How you can help</Link></li>
        </ul>
    </nav>
<div style={myStyle}> 
  <h1>Welcome!</h1> 
  <p>Below is the curriculum that is slowly coming together. What do you need help with?</p>
  <ol>
    <li>Course Overview</li>
    <ul>
        <li><Link href="/lessons/sectionOne/sectionOneGoals">Goals for this Section</Link></li>
        <li><Link href="/lessons/sectionOne/">What this course IS</Link></li>
        <li><Link href="/lessons/sectionOne/sectionOneGoals">What this course is NOT</Link></li>
        <li><Link href="/lessons/sectionOne/sectionOneGoals">Examples of jobs I'm referring to</Link></li>
        <li><Link href="/lessons/sectionOne/sectionOneGoals">A realistic timeline</Link></li>
        <li><Link href="/lessons/sectionOne/sectionOneGoals">My personal experience</Link></li>
        <li><Link href="/lessons/sectionOne/sectionOneGoals">My style of teaching</Link></li>
        <li><Link href="/lessons/sectionOne/sectionOneGoals">Knowledge check</Link></li>
        <li><Link href="/lessons/sectionOne/sectionOneGoals">How you can help</Link></li>
    </ul>
    <li>The Truth about getting a Software Engineering job
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
        <li>I am once again asking for your help.</li>
      </ul>
    </li>
    <li>Soft Skills</li>
      <ul></ul>

    <li>More Technical topics</li>
        <ul>
            <li>Begin with a quiz</li>
            <li>What is coding?</li>
            <li>What is a server?</li>
            <li>From writing code to a building an app</li>
            <li>Monoliths and Microservices</li>
            <li>A casual look at system design</li>
            <li>Distributed systems</li>
        </ul>
      <li>What's next</li>
        <ul>
            <li>What is giving you trouble</li>
         </ul>
  </ol>
    </div>
    </>);
}