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
import Specialization4 from '../Elements/Specialization4';
import Certi from '../Elements/Certi';
import Achivements from '../Elements/Achivements';
import LatestBlogs2 from '../Elements/LatestBlogs2';

var bnrimg = require('./../../images/allimges/achievments.webp');

class Certification extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="achievments & certification" pagename="Services" bgimage={bnrimg}/>
                    <Achivements/>
                     {/* <Certi/> */}
                     <div className="blog-single-wrap-width">
                     <div className="blog-post date-style-3 blog-detail text-black">
                     <LatestBlogs2 bgcolor="bg-gray"/>
                     </div>  </div>
                   
                    {/* <Specialization4/> */}
                    {/* <OurProject2/> */}
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

export default Certification;