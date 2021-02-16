import React from 'react';
import '../css_sass/Main.scss'
import { FaLinkedinIn } from "react-icons/fa";

const About_info = (props) => {
    return (
       <>
       <div className="col-12 col-sm-6">
            <div className="imfo">
                <h3 className="h3">{props.title}</h3>
                <span className="span"><FaLinkedinIn/> {props.name}</span>
            </div>
        </div>
       </>
    );
}

export default About_info;
