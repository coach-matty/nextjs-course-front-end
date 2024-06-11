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

export default function SectionOneGoals() {
    return (<> 
    <nav style={navStlye} >
            <button><Link href="/">Home</Link></button>
            <button><Link href="/course">Course</Link></button>
            <button><Link href="/contact">Contact</Link></button>
            <button><Link href="/help">How you can help</Link></button>
    </nav>
    <div style={parentStyle}>

        <h1>Goals for section 1</h1>
        <p>The following is what I'm hoping to accomplish for this section:</p>
        <ul>
            <li>You understand why I made the course and what I'm trying to accomplish</li>
            <li>You understand what this course does NOT provide</li>
            <li>You understand what a reasonable timeline for getting a job might look like</li>
            <li>You understand what jobs I am referring to</li>
            <li>You understand my teaching style</li>
            <li>You've read my personal experience (if you want to :-) )</li>
            <li>You pass the knowledge check for this section.</li>
        </ul>
        </div>
        </>);
}


