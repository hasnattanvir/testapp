import React, { useState } from 'react';
import {FaFacebookF,FaInstagramSquare,FaTwitter,FaTelegram,FaPlay} from 'react-icons/fa'

import { NavLink } from 'react-router-dom';
import Typical from 'react-typical';
import bupphoto from '../images/unnamed.png'
import 'hover.css';

const Banner = () => {
    const [state]=React.useState({title:'I am web react app devaloper'});
    return (
        <>
         <div className="main_div home-bg-img" id="home_id">
             <div className="container-fluid">
                <div className="type-text-box mr-auto">
                    <div className="inner_box">
                        <h1 className="h1">
                        <Typical
                                steps={['Hi', 1500, 'I am Hasnat Tanvir',300]}
                                loop={3}
                                wrapper="p"
                            />
                        </h1>
                        <h4 className="h4">{state.title}</h4>
                        <div className="sociel-icon">
                            <ul>
                                <li><NavLink to=""><FaFacebookF /></NavLink></li>
                                <li><NavLink to=""><FaInstagramSquare/></NavLink></li>
                                <li><NavLink to=""><FaTwitter /></NavLink></li>
                                <li><NavLink to=""><FaTelegram/></NavLink></li>
                            </ul>
                        </div>
                        <div className="hedder_button">
                            <div  className="box" >
                               <a href="#" className="btn-por ">Portpolio</a>
                            </div>
                            <div className="box">
                                <a href="#" className="btn-play">
                                    <FaPlay/>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="photo-box">
                        <div className="inner_box_img">
                            <img className="photo_bup" src={bupphoto} alt="Photo"/>
                        </div>
                    </div>
                </div>
             </div>
         </div>
        </>
    );
}

export default Banner;
