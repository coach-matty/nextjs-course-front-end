import Link from "next/link";
import NavBar from "../../navBar";
import styles from './styles.module.css';

const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
}

const navStlye = {
    backgroundColor: '#96C8EE',
    padding: 10
  }

export default function JobExamples() {
    return (<> 
    <nav className={styles.navStyle}>
            <NavBar></NavBar>
    </nav>
    <div styles={styles.centeredText}>

        <h1>Job examples</h1>
        
        </div>
        </>);
}


