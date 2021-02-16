import React from 'react';
import { NavLink } from 'react-router-dom';
import{Link} from 'react-scroll';
import logo from '../images/logo/logo.png'

const Navbar = () => {
    return (
        <>
        <section className="display-rela">
            <div className="main_div_nav bg-nav-dark bg-dark">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link activeClass="active" className="navbar-brand nav-link" spy={true} smooth={true} offset={-50} duration={500}  to="home_id">
                            <img src={logo} alt="mylogo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent" >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link  activeClass="active" className="nav-link" to="home_id" spy={true} smooth={true} offset={-50} duration={500}>Home <span className="sr-only">(current)</span></Link>
                                </li>

                                <li className="nav-item active">
                                    <Link  activeClass="active" className="nav-link" to="about" spy={true} smooth={true} offset={-50} duration={500}>Service
                                    <span className="sr-only">(current)</span></Link>
                                </li>

                                <li className="nav-item active">
                                    <Link   activeClass="active" className="nav-link" to="About_id" spy={true} smooth={true} offset={-50} duration={500}>About <span className="sr-only">(current)</span></Link>
                                </li>
                                
                                <li className="nav-item active">
                                    <Link   activeClass="active" className="nav-link" to="Skill_id" spy={true} smooth={true} offset={-50} duration={500}>Skill <span className="sr-only">(current)</span></Link>
                                </li>

                                <li className="nav-item active">
                                    <NavLink  className="nav-link" to="/portfolio">Portpolio <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink  className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
        </>
    );
}

export default Navbar;
