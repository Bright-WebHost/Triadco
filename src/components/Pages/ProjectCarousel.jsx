import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/3.jpg');

const projects = [
    {
        image: require('./../../images/allvector/1.webp'),
        title: 'Les Gouvernements',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    },
    {
        image: require('./../../images/allvector/2.webp'),
        title: 'Les Hôpitaux Privés',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allvector/3.webp'),
        title: 'Les Cliniques',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    },
    {
        image: require('./../../images/allvector/4.webp'),
        title: 'Les Organisations non-gouvernemental',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    },
    {
        image: require('./../../images/allvector/5.webp'),
        title: 'Les Pharmacies',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    },
    {
        image: require('./../../images/allvector/6.webp'),
        title: 'Les Grossistes ',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    }
]

class ProjectCarousel extends React.Component {
    render() {
        
        const options = {
            loop:true,
            autoplay:false,
            center: false,
            items:3,
            margin:40,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },			
                991:{
                    items:3
                },
                1200:{
                    items:4
                }			
                
            }
        };

        return (
            <>
                {/* <Header /> */}
                <div className="page-content">
                {/* <Banner title="Broad vision. Careful thought. Hand-crafted design." pagename="Project carousel" bgimage={bnrimg}/> */}
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 bg-gray inner-page-padding">
                        <div className="container-fluid">
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left" style={{display:'flex',justifyContent:'center'}}>
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">NOTRE </span>  CLIENTELE</h2>
                                </div>
                            </div>
                        </div>
                            <div className="section-content">
                                <div className="work-carousel-outer">
                                    <OwlCarousel className="owl-carousel work-carousel owl-btn-vertical-center" {...options}>
                                    
                                        {projects.map((item, index) => (
                                            <div key={index} className="item mt-box">
                                                <div className="mt-img-effect mt-img-overlay7">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="mt-info p-a30">
                                                <h4 className="m-b20 m-t0" style={{textAlign:'center'}}>{item.title}</h4>
                                                    {/* <h4 className="m-b20 m-t0" style={{textAlign:'center',color:'#75BF44'}}><NavLink to={"/project-detail"}>{item.title}</NavLink></h4> */}
                                                    {/* <p>{item.description}</p> */}
                                                    {/* <NavLink to={"/project-detail"} className="site-button btn-effect">Read More</NavLink> */}
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                {/* <Footer /> */}
            </>
        );
    };
};

export default ProjectCarousel;