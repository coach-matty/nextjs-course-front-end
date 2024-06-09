import Link from "next/link";

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
}



export default function PersonalExperience() {
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

        <h1>Personal Experience</h1>
        <p>Here is a link to my <a href="https://www.linkedin.com/in/matthew-violet-722644104/">LinkedIn</a> so you can see that I'm a real person.</p>
        <p>Here's my story. I graduated from college in 2019 and was stuck between being a software engineer and a consultant.
            I ended up thinking my more outgoing personailty didn't fit in software, so I chose consulting. HUGE MISTAKE. I realized
            how cool coding is and how much I didn't like the people pleasing part of consulting.
        </p>
        <p>The only problem was that I had already graduated and now I was back to the job hunt with no real experience outside of my 
            internships! So what did I do? I buckled up, reminded myself it wasnt going to be easy, and I got to work! 
        </p>
        <p>
            Four years later I'm a senior software engineer working on apps that 10M+ people intereact with every day. I'm becoming more confident and comfortable
            and I really believe that this is because of certain choices I make about the way I think and solve problems. The people you think 
            are 'smart' are probably just doing these things to.
        </p>
        <p>For the pay stuff, this is how my career has gone so far.</p>
        <ul>
            <li>2020: Consulting - 63k</li>
            <li>2021: 1st Software Engineering job - 65k</li>
            <li>2021: 2nd Software Engineering job - 80k</li>
            <li>2022: Promotion - 90k</li>
            <li>2022: 3rd Software Engineering Job - 150k </li>
            <li>2024: Senior Software Engineering Job - 200k </li>
        </ul>
        
        <p>If you want a trajectory like this it's going to take a ton of work. 
            But, I've literally done it and want to give the best advice I possibly can!</p>
        </div>
        </>);
}


