import Link from "next/link";

const myStyle = {
  backgroundColor: '#E5E5E5',
  height: 6000,
  padding: 100
};

const navStlye = {
  backgroundColor: '#96C8EE',
  padding: 10
}


export default function Course() {
  return (<>
      <nav style={navStlye}>
            <ul>      
            <li><Link href="/">Home</Link></li>
            <li><Link href="/course">Course</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/help">How you can help</Link></li>
        </ul>
    </nav>
<div style={myStyle}> 
  <h1>Lessons</h1> 
  <p>Below is the curriculum that is slowly coming together. What do you need help with? Let me know so we can get it added!</p>
  <ol>
    <li>Course Overview</li>
    <ul>
        <li><Link href="/lessons/sectionOne/sectionOneGoals">Goals for this Section</Link></li>
        <li><Link href="/lessons/sectionOne/whatThisCourseIs">What this course IS</Link></li>
        <li><Link href="/lessons/sectionOne/whatThisCourseIsNot">What this course is NOT</Link></li>
        <li><Link href="/lessons/sectionOne/jobExamples">Examples of jobs I'm referring to</Link></li>
        <li><Link href="/lessons/sectionOne/realisticTimeline">A realistic timeline</Link></li>
        <li><Link href="/lessons/sectionOne/personalExperience">My personal experience</Link></li>
        <li><Link href="/lessons/sectionOne/teachingStyle">My style of teaching</Link></li>
        <li><Link href="/lessons/sectionOne/knowledgeCheckOne">Knowledge check</Link></li>
        <li><Link href="/help">How you can help</Link></li>
    </ul>
    <li>A look at the job-getting process 
      <ul>
        <li>Goals for this section</li>
        <li>What is your background?</li>
        <li>The leetcode demon</li>
        <li>The perfect formula</li>
        <li>Bad job descriptions</li>
        <li>A more detailed timeline</li>
        <li>You're not perfect / Other humans are interviewing you</li>
        <li>Knoweldge Check</li>
        <li>I am once again asking for your help.</li>
      </ul>
    </li>
    <li>General Skills / Unsolicited advice</li>
      <ul>
        <li>Learning how to learn</li>
        <li>Problem solving</li>
        <li>Take breaks</li>
        <li>Everything must be happening for a reason</li>
        <li>Coach Matty's weird techinques for learning</li>
        <li>Most people are nice</li>
        <li>The Knowledge Venn Diagram</li>
        <li>Communicating in a succint manner</li>
      </ul>

    <li>Technical topics</li>
      <ul>
        <li>Begin with a quiz</li>
        <li>What is coding?</li>
        <li>What is a server?</li>
        <li>From writing code to a building an app</li>
        <li>Monoliths and Microservices</li>
        <li>A casual look at system design</li>
        <li>Distributed systems</li>
        <li>Getting comfortable with the terminal</li>
      </ul>
      <li>What's next</li>
        <ul>
            <li>What is giving you trouble</li>
         </ul>
  </ol>
    </div>
    </>);
}