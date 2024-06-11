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

        <h1>The Perfect Formula</h1>
        <p>I personally believe that the perfect formula for getting a SWE job is 3 part recipe.</p>

        <h2>Solid Soft Skills</h2>


        <h2>Leetcode Ability</h2>

        <h2>Sound Software Engineering fundamentals </p>

        
        </div>
        </>);
}

