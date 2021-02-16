import React from 'react';
import '../css_sass/Main.scss';
import Banner from '../component/Banner'
import Service from './Service';
import About from './About';
import Skill from './Skill';
import Gallary from './Gallary';
// img view gallary photo
import SimpleReactLightbox from "simple-react-lightbox";

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <About />
            <Skill />
            <SimpleReactLightbox>
                <Gallary />
            </SimpleReactLightbox>
        </div>
    );
}

export default Home;
