import Link from "next/link";

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
}



export default function Help() {
    return (<> 
    <div style={parentStyle}>

        <p>Goals for section 1</p>
        <ul>      
            <li><Link href="/lessons/sectionOneGoals">Home</Link></li>
            <li><Link href="/course">Course</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/help">How you can help</Link></li>
        </ul>
        </div>
        </>);
}


