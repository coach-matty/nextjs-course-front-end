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

        <h1>Goals for section 2</h1>
        <p>The following is what I'm hoping to accomplish for this section:</p>
        <ul>
            <li>You understand how your background plays a role in the process</li>
            <li>You understand the role of LeetCode in the process</li>
            <li>You understand the role your Resume in the process</li>
            <li>You understand my idea of what a well-blended candidate looks like</li>
            <li>You can spot a good vs bad job description</li>
            <li> </li>
            <li></li>
        </ul>
        </div>
        </>);
}


