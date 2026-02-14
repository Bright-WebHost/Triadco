import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import AboutCompany from '../Elements/AboutCompany';
import Specialization3 from '../Elements/Specialization3';
import OurServices3 from '../Elements/OurServices3';
import OurValue3 from '../Elements/OurValue3';
import OurProject3 from '../Elements/OurProject3';
import Faq from '../Elements/Faq';
import OurProject2 from '../Elements/OurProject2';
import OurProject from '../Elements/OurProject';

var bnrimg = require('./../../images/allimges/product.webp');

class Services extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Produits" pagename="Services" bgimage={bnrimg}/>
                    {/* <OurProject/> */}
                    <OurProject2/>
                    {/* <AboutCompany /> */}
                    {/* <Specialization3 /> */}
                    {/* <OurServices3 /> */}
                    {/* <OurValue3 /> */}
                    {/* <OurProject3 /> */}
                    {/* <Faq /> */}
                <Footer />
                    
                </div>

                
               

            </>
        );
    };
};

export default Services;