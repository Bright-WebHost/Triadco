import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
// import Slider from './../Elements/Slider';
// import Specialization from './../Elements/Specialization';
// import About from './../Elements/About';
// import OurValue from './../Elements/OurValue';
// import OurMission from './../Elements/OurMission';
// import OurServices from './../Elements/OurServices';
// import Callus from './../Elements/Callus';
// import OurProject from './../Elements/OurProject';
// import Blogs from './../Elements/Blogs';
// import Testimonials from './../Elements/Testimonials';
import Slider3 from '../Elements/Slider3';
// import About2 from '../Elements/About2';
import OurValue2 from '../Elements/OurValue2';
// import Testimonials2 from '../Elements/Testimonials2';
// import ClientsLogo from '../Elements/ClientsLogo';
import ProjectCarousel from './ProjectCarousel';
import LeadForm from '../Elements/LeadForm';
import NewSection from '../Elements/NewSection';
import Categories from '../Elements/Categories';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider3/>
                    <NewSection/>
                    <Categories />
                    <OurValue2/>
                    {/* <Slider /> */}
                    {/* <Specialization /> */}
                    {/* <About /> */}
                    {/* <OurValue /> */}
                    {/* <OurMission /> */}
                    {/* <OurServices /> */}
                    {/* <Callus /> */}
                    {/* <OurProject /> */}
                    <ProjectCarousel/>
                    {/* <OurValue /> */}
                       {/* <OurMission /> */}
                     <LeadForm />
                    {/* <Blogs /> */}
                    {/* <Testimonials /> */}
                    {/* <ClientsLogo/> */}
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;