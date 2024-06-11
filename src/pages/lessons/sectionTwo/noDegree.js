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

        <h1>workin on it!</h1>

        
        </div>
        </>);
}

