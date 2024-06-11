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

        <h1>The Perfect Formula</h1>
        <p>I personally believe that the perfect formula for getting a SWE job is 3 part recipe.</p>

        <h2>Solid Soft Skills</h2>

        <h2>Leetcode Ability</h2>

        <h2>Sound Software Engineering fundamentals </h2>

        
        </div>
        </>);
}

