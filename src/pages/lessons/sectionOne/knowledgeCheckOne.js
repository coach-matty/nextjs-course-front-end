import Link from "next/link";
import styles from './styles.module.css';
import NavBar from "../../navBar";


const parentStyle = {
    backgroundColor: '#E5E5E5',
    height: 500,
    padding: 100
}

const navStlye = {
    backgroundColor: '#96C8EE',
    padding: 10
  }

export default function KnoweldgeCheckOne() {
    return (<> 
    <nav className={styles.navStyle} >
        <NavBar></NavBar>
    </nav>
    <div style={parentStyle}>

        <h1>Knowledge Check One</h1>
        </div>
        </>);
}


