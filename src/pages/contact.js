import Link from "next/link";

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
  };


export default function Contact() {
  return (
    <div style={parentStyle}>
    <h1>Contact</h1>
      <div> You can email me at itsmattypurple@gmail.com</div>
      <div> I'd love to come speak at your conference or school.</div>
      <ul>      
        <li><Link href="/">Home</Link></li>
        <li><Link href="/course">Course</Link></li>
        <li><Link href="/help"> How you can help</Link></li>
      </ul>
    </div>
    
  );
}
