import Link from "next/link";

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
}



export default function yourBackground() {
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

        <h1>How your background comes into play</h1>
        <p>Hello again. Let's talk about your background and the role it plays in this entire process.</p>

        <p>Without getting too cliche - you are a summation of your experiences. Even something as simple as just 
            being a gamer could play a role in your geniune interest in being a software engineer.
        </p>

        <p> An anecdote. One of my long term goals is to become fluent in Spanish. This is a fundamentally
            easier goal for me to achieve than someone who is coming from a Japanese background due to the similarities of English and Spanish.
            My background matters. Yours matters here, too. It matters a lot.
        </p>

        <p> I'm going to lump everyone into different categories.
            It may be helpful to see which category you fit into and how it plays a role. This is
            all just my opinions.
            <ul>
                <li>People with a CS  degree and prior experience</li>
                <p>Yeet</p>
                <li>People with a CS degree and no experience</li>
                <p>Yeet</p>
                <li>People with college degree and some nerdiness</li>
                <p>Yeet</p>
                <li>People with a college but are nerdy</li>
                <p>Yeet</p>
                <li>People with no degree just jumping in</li>
                <p>Yeet</p>
            </ul>
        </p>
        
        </div>
        </>);
}


