import Link from "next/link";

const myStyle = {
  backgroundColor: '#E5E5E5',
  height: 500,
  padding: 100
};

const mattFace = {
  width: 400,
  height: 400
}



export default function Home() {
  return (<>
      <nav>
            <ul>      
            <li><Link href="/">Home</Link></li>
            <li><Link href="/course">Course</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/help">How you can help</Link></li>
        </ul>
    </nav>
    <img style={mattFace} src="/images/matt_face.png" alt="Coach Matty's Face" />

<div style={myStyle}> 
  <h1>Welcome!</h1> 
      
    <div>Hi! You've landed at Coach Matty's FREE software engineering course!</div> 
    <div>It's my mission to provide the most helpful content to help you get a job as a Software Engineer. Or, if you have a job, hopefully I can teach you a few things!</div>
    <div>This site is just getting started - so hang tight!</div>
    <div>Shameless plug - I am trying to give back to my community as much as possible.<Link href="/help"> See how you can help!</Link></div>
    </div>
    </>);
}
