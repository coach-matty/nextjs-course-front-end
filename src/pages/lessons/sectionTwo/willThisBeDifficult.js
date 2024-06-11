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

export default function RealisticTimeline() {
    return (<> 
    <nav style={navStlye} >
            <button><Link href="/">Home</Link></button>
            <button><Link href="/course">Course</Link></button>
            <button><Link href="/contact">Contact</Link></button>
            <button><Link href="/help">How you can help</Link></button>
    </nav>
    <div style={parentStyle}>

        <h1>Will this be difficult?</h1>
        <p>The answer to this question depends on your experience and what sort of prep you're currently doing.</p>
        <p>But yes, it's going to be difficult and take a lot of time and effort.</p>
        <p>You can absolutely do it - I did it! And so did tons of other people. Believe in yourself and take it one day at a time.</p>
        
        </div>
        </>);
}


