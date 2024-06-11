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

        <h1>Will this be difficult?</h1>
        <p>The answer to this question depends on your experience and what sort of prep you're currently doing.</p>
        <p>But yes, it's going to be difficult and take a lot of time and effort.</p>
        <p>You can absolutely do it - I did it! And so did tons of other people. Believe in yourself and take it one day at a time.</p>
        
        </div>
        </>);
}


