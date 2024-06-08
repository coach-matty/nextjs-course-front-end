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

        <h1>Realistic Timeline</h1>
        <p>How long this takes is going to depend on your background. If you have ZERO experience 
            and follow my suggestions, I personally think it will take about a year of regular study (4-5 days a week for 30 - 120 mins a day).
            It's much more important to improve HOW you LEARN as opposed to just trying to memorize all of this stuff. For 3-4 years I stuck with
            learning fundamentals instead of chasing buzz words, and it's still crazy to me how much I can immediately understand that others sometimes
            don't. And trust me, I still have a whole universe to go!</p>
        <p>When I say "how long will this take" I am referring to how long until you're ready to START applying to jobs. So set realistic goals.</p>
        
        </div>
        </>);
}


