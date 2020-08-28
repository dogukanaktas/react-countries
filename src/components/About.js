import axios from "axios";
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { GoMarkGithub } from 'react-icons/go'
import styles from '../css/About.module.css'


const About = () =>  {
    return (
        <div className={styles.about}>
            <GoMarkGithub className={styles.logo} />
            <span className={styles.github}> github.com/dogukanaktas</span>
        </div>
    )
}


export default About