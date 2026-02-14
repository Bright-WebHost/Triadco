import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About4 from './../Elements/About4';
import Specialization4 from './../Elements/Specialization4';
import Team3 from './../Elements/Team3';
import AboutSummary from './../Elements/AboutSummary';
import Faq from '../Elements/Faq';
import Tabs from './Tabs';
import Partners from '../Elements/Partners';

var bnrimg = require('./../../images/allimges/About.jpg');

class About extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="À propos de nous" pagename="About Us" bgimage={bnrimg}/>
                    <About4 />
                    <Tabs/>
                    <Partners/>
                    {/* <Faq/> */}
                    {/* <Specialization4 /> */}
                    <Team3 />
                    {/* <AboutSummary /> */}

                </div>

                <Footer />

            </>
        );
    };
};

export default About;