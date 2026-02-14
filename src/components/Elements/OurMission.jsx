import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');
var img4 = require('./../../images/allimges/our.jpg');

class OurMission extends React.Component {
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
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nos </span> services </h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                <div className="col-md-4 col-sm-6" >
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{height:'470px'}}>
                                        <h3 className="m-t0"><span className="font-weight-100">Nos services </span>comprennent</h3>
                                        <p style={{textAlign:'justify',textJustify:'inter-word'}}>Les secteurs dans lesquels nous fournissons des services incluent les hôpitaux, cliniques, laboratoires, centres de réhabilitation, et autres établissements de soins de santé. Nous garantissons des équipements médicaux de haute qualité adaptés aux besoins spécifiques de chaque secteur.
                                        </p>
                                        <ul className="list-angle-right anchor-line">
                                            <li>Mobilier Médical </li>
                                            <li> Équipement Médical  </li>
                                            <li>Laboratoire       </li>
                                            <li>Consommable Médical</li>
                                            
                                        </ul>
                                        {/* <div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{ backgroundImage: 'url(' + img4 + ')' }} />
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="contact-home1-left bg-dark p-a30 m-b0">
                                        <h3 className="text-white m-t0"><span className="font-weight-100">Prendre</span> contact</h3>
                                        <form className="cons-contact-form2 form-transparent" method="post" action="">
                                            <div className="input input-animate">
                                                <label htmlFor="name">Nom</label>
                                                <input type="text" name="username" id="name" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="email">Courriel</label>
                                                <input type="email" name="email" id="email" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="Phone">Téléphone</label>
                                                <input type="text" name="phone" id="Phone" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="message">Zone de texte</label>
                                                <textarea name="message" id="message" required defaultValue={""} />
                                                <span className="spin" />
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
                    {/* <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>Mission</strong>
                    </div> */}
                </div>
            </>
        );
    }
};

export default OurMission;