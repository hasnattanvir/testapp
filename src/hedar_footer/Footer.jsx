import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../images/tanvir.png'

import {FaFacebookF,FaInstagramSquare,FaTwitter,FaTelegram,FaPlay} from 'react-icons/fa'


export default function Footer() {
    return (
        <>
      
            <footer className="footer">
                <div className="container-fluid ">
                    <div className="row">

                        <div className="col-md-4 col-lg-4 col-sm-6">
                            <div className="inner-text">
                                <div className="text">
                                    <h5 className="h5">Latest Tweet</h5>
                                    <p className="para">
                                        Interested in starting a new project ? Give us a call at 01625 010631. #digital #design #creatives #ui #ux http://hasnattanvir.com
                                    </p>
                                </div>
                                <div className="social-icon">
                                    <h5 className="h5">Social</h5>
                                    <div className="icon">
                                     
                                        <div className="effect varrius">
                                            <div className="buttons">
                                                <Link to="#" className="fb icon-a" title="Join us on Facebook"><FaFacebookF className="i"/></Link>
                                                <Link to="#" className="tw icon-a" title="Join us on Twitter"><FaInstagramSquare className="i"/></Link>
                                                <Link to="#" className="g-plus icon-a" title="Join us on Google+"><FaTwitter className="i"/></Link>
                                                <Link to="#" className="dribbble icon-a" title="Join us on Dribbble"><FaTelegram  className="i"/></Link>
                                                <Link to="#" className="vimeo icon-a" title="Join us on Vimeo"><FaPlay className="i"/></Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-4 col-sm-6">
                            <div className="inner-text">
                                <div className="text-m">
                                    <h3 className="h5">Blog</h3>
                                    <h5 className="h4">What is A CMS (Content Management System).</h5>
                                    <p className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius non aperiam libero impedit sunt odit distinctio veritatis culpa sequi, sint, voluptates incidunt quia expedita assumenda, nobis amet esse ratione.
                                    </p>
                                </div>
                                <div className="social-icon">
                                   <div className="img">
                                        <div className="pentagon">
                                            <img src={photo} alt="footer photo"/>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-4 col-sm-6">
                            <div className="inner-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 className="h5">Telephone</h5>
                                        <p>01625010631</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="innbox-f-e">
                                            <h5 className="h5">Email</h5>
                                            <span>hasnattanvir 014@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="innbox-f-a">
                                            <h5 className="h5">Address</h5>
                                            <span>Noakhali,bangladesh</span>
                                            <br/>
                                            <span>90,tinbair dokan</span>
                                            <br/>
                                            <span>Shout nazir pur</span>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
            <section className="footer-lite">
                <div className="container-fluid">
                    <div className="wapper-box-footer">
                    <span><Link to="#" >Copyright Noakhali coder 2020</Link></span>
                    </div>
                </div>
            </section>

       
        </>
    )
}
