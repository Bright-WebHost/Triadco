import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import GoogleMapReact from 'google-map-react';

var bnrimg = require('./../../images/allimges/contacts.webp');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
    render() {
        const defaultProps = {
            center: {
              lat: 34.073280,
              lng: -118.251410
            },
            zoom: 12
        };
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="Nous contacter" pagename="Contact Us" bgimage={bnrimg}/>
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="row">
                                    <div className="col-md-8 col-sm-6">
                                        <form className="contact-form cons-contact-form" method="post" action="form-handler.php">
                                            <div className="contact-one m-b30">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="mt-separator-outer separator-left">
                                                        <div className="mt-separator">
                                                            <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Prendre </span> contact</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder="Nom" />
                                                </div>
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder="Courriel" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} className="form-control " required placeholder="Message" defaultValue={""} />
                                                </div>
                                                <div className="text-right">
                                                    <button name="submit" type="submit" value="Submit" className="site-button btn-effect">soumettre
                  </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="contact-info m-b30">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Contact</span> Info</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="bg-dark p-a20 text-white">
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Numéro de téléphone</h5>
                                                        <a href='tel:+225 07 899 996 99' style={{color:'#73BF43'}}>+225 07 899 996 99</a><br/>
                                                        <a href='tel: +225 07 583 733 33' style={{color:'#73BF43'}}>+225 07 583 733 33</a>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Adresse électronique</h5>
                                                        <a href="mailto:Info@triadci.com" style={{color:'#73BF43'}}>Info@triadci.com</a>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Adresse info</h5>
                                                        <p  style={{color:'#73BF43'}}>Marcory Avenue de Côte d'Ivoire, Abidjan, Côte d'Ivoire</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gmap-outline">
                                {/* <div style={{ height: '400px', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0" }}
                                        defaultCenter={defaultProps.center}
                                        defaultZoom={defaultProps.zoom}
                                    >
                                        <AnyReactComponent
                                        lat={34.073280}
                                        lng={-118.251410}
                                        text={<i className="fa fa-map-marker" />}
                                        />
                                    </GoogleMapReact>
                                </div> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15890.855472907173!2d-3.9878434!3d5.3072669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb473112debb%3A0xa1b41b5a2c3c586d!2sTriad%20Co%20SARL!5e0!3m2!1sen!2sin!4v1723284666979!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>


                <Footer />

            </>
        );
    };
};

export default ContactUs;