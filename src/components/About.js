import axios from "axios";
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { GoMarkGithub } from 'react-icons/go'


const About = () =>  {
    return (
        <div>
            <GoMarkGithub />
            <span> github.com/dogukanaktas</span>
        </div>
    )
}


export default About