import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { GiGlobe } from "react-icons/gi";
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
            <Link to="/"><GiGlobe className={styles.globe}></GiGlobe></Link>
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