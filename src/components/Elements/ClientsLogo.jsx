import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const logos = [
    { image: require('./../../images/folder1/1img.jpg') },
    { image: require('./../../images/folder1/2img.jpg') },
    { image: require('./../../images/folder1/3img.jpg') },
    { image: require('./../../images/folder1/4img.jpg') },
    { image: require('./../../images/folder1/5img.jpg') },
    { image: require('./../../images/folder1/6img.jpg') },
    { image: require('./../../images/folder1/7img.jpg') },
   
    
]
const logos1 = [
    { image: require('./../../images/floder2/img1.jpg') },
    { image: require('./../../images/floder2/img2.jpg') },
    { image: require('./../../images/floder2/img3.jpg') },
    { image: require('./../../images/floder2/img4.jpg') },
    { image: require('./../../images/floder2/img5.jpg') },
    { image: require('./../../images/floder2/img6.jpg') },
   
   
    
]

class ClientsLogo extends React.Component {
    render() {
        const options = {
            loop:true,
            margin:0,
            autoplay:true,
            nav:false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:2
                },
                480:{
                    items:3
                },			
                767:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        };
        return (
            <>
                <div className="section-full p-t10 bg-white " id="mainid"
     style={{ display: window.innerWidth >= 1024 ? 'none' : 'block' }}>
                    <div className="container" id="mainid">
                        <div className="section-content">
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left" style={{display:'flex',justifyContent:'center'}}>
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">INSTITUTIONS </span>  & ONG</h2>
                                </div>
                            </div>
                        </div>
                            {/* TESTIMONIAL 4 START ON BACKGROUND */}
                            <div className="section-content">
                                <div className="section-content p-tb10 owl-btn-vertical-center">
                                    <OwlCarousel className="owl-carousel home-client-carousel-2" {...options}>
                                        {logos.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="ow-client-logo">
                                                    <div className="client-logo client-logo-media">
                                                    <NavLink to={"#"} ><img src={item.image} alt="" style={{height:'100%'}}/></NavLink></div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section-full p-t10 bg-white " id="mainid"
     style={{ display: window.innerWidth >= 1024 ? 'none' : 'block' }}>
                    <div className="container" id="mainid">
                        <div className="section-content">
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left" style={{display:'flex',justifyContent:'center'}}>
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">CLINIQUES  </span>  MEDICALES</h2>
                                </div>
                            </div>
                        </div>
                            {/* TESTIMONIAL 4 START ON BACKGROUND */}
                            <div className="section-content">
                                <div className="section-content p-tb10 owl-btn-vertical-center">
                                    <OwlCarousel className="owl-carousel home-client-carousel-2" {...options}>
                                        {logos1.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="ow-client-logo">
                                                    <div className="client-logo client-logo-media">
                                                    <NavLink to={"#"} ><img src={item.image} alt="" style={{height:'100%'}}/></NavLink></div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ClientsLogo;