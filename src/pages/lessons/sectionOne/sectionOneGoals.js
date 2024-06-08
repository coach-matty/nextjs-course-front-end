import Link from "next/link";

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
}

export default function SectionOneGoals() {
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

        <h1>Goals for section 1</h1>
        <ul>
            <li>Understand why I made the course and what I'm trying to accomplish</li>
            <li>Understand what this course DOESN'T provide</li>
            <li>Understand what a reasonable timeline for getting a job might look like</li>
            <li>You've seen what I mean when I say "job"</li>
            <li>Understand my teaching style</li>
            <li>Read my personal experience (if you want to :-) )</li>
            <li>You pass the knowledge check for this section.</li>
        </ul>
        </div>
        </>);
}


