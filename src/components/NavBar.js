import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import styles from '../css/Navbar.module.css'

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <ul className={styles.nav}>
                    <li className={styles.li}><Link className={styles.link} to="/">Home</Link></li>
                </ul>
            </div>
            
            <div>
            <Link to="/"><FaGlobe className={styles.globe}></FaGlobe></Link>
            </div>
            <div className={styles.navbar}>
                <ul className={styles.nav}>
                    <li className={styles.li}><Link className={styles.link} to="/About">About</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar