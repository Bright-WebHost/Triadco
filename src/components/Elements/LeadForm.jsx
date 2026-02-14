import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');
var img4 = require('./../../images/allimges/our.jpg');

class LeadForm extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" >
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Contacted  </span> Nous </h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                <div className="col-md-4 col-sm-12 col-lg-12">
                                    <div className="contact-home1-left bg-dark p-a30 m-b0">
                                        <h3 className="text-white m-t0"><span className="font-weight-100">Prendre</span> contact</h3>
                                        <form className="cons-contact-form2 form-transparent " method="post" action="">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input input-animate ">
                                                        <label htmlFor="name">Nom</label>
                                                        <input type="text" name="username" id="name" required />
                                                        <span className="spin" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input input-animate">
                                                        <label htmlFor="email">Courriel</label>
                                                        <input type="email" name="email" id="email" required />
                                                        <span className="spin" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                            <div className="input input-animate">
                                                <label htmlFor="Phone">Téléphone</label>
                                                <input type="text" name="phone" id="Phone" required />
                                                <span className="spin" />
                                            </div>
                                            </div>
                                            <div className="col-md-12">
                                            <div className="input input-animate">
                                                <label htmlFor="message">Zone de texte</label>
                                                <textarea name="message" id="message" required defaultValue={""} />
                                                <span className="spin" />
                                            </div>
                                            </div>
                                            </div>
                                            <div className="text-center p-t10">
                                                <button type="submit" className="site-button btn-effect ">
                                                Soumettre
                    </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default LeadForm;