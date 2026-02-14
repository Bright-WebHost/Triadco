import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

var bgimage = require('./../../images/background/bg-site.png');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = {logo: require('./../../images/allimges/triadco log.png')};
    }
    
    updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo;}

    render() {
        
        return (
            <>
                {/* <footer className="site-footer footer-large  footer-dark	footer-wide"> */}
                <footer className="site-footer footer-large  	footer-wide" style={{backgroundColor:'#999999'}}>
                    <div className="container call-to-action-wrap bg-no-repeat bg-center" style={{ backgroundImage: 'url('+bgimage+')' }}>
                        <div className="p-a30 bg-primary ">
                            <div className="row">
                                <div className="col-md-8 col-sm-8">
                                    <div className="call-to-action-left text-black">
                                        <h4 className="text-uppercase m-b10 m-t0">Améliorez votre établissement médical avec nous !</h4>
                                        <span>Contactez-nous dès aujourd'hui pour améliorer votre équipement et vos fournitures médicales !</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4  footer-dark">
                                    <div className="call-to-action-right">
                                    <div className="tp-caption tp-resizeme" id="slide-902-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['90','90','90','130']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000;&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000;&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 100, textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <NavLink to="/contactus" className="site-button btn-effect">Nous contacter</NavLink>
</div>
                                        <div className="widget_newsletter">
                                            {/* <div className="newsletter-bx">
                                                <form role="search" action="./">
                                                    <div className="input-group">
                                                        <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                        <span className="input-group-btn">
                                                            <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}><img src={this.currentstate.logo} alt="" /></NavLink>
                                        </div>
                                        <p className="max-w400">Triad Co fournit des équipements et des solutions médicales de haute qualité en Côte d'Ivoire, pour divers besoins en matière de soins de santé.</p>
                                        <ul className="social-icons mt-social-links">
    <li><a href={"https://www.facebook.com/Triadco.ci"} className="fa fa-facebook" /></li>
    {/* <li><NavLink to={"#"} className="fa fa-linkedin" /></li> */}
    <li><a href={"https://www.instagram.com/triadco_ci/"} className="fa fa-instagram" /></li>
    <li>
  <a href="https://wa.me/01 60330193" className="fa fa-whatsapp" />
</li>
    <li>
  <a href="mailto:Info@triadci.com" className="fa fa-envelope" />
</li>
<li><a href={"https://www.linkedin.com/company/thetriadco/?originalSubdomain="} className="fa  fa-linkedin" /></li>


</ul>

                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Côte d'Ivoire</h4>
                                        <ul className="widget_address">
                                            <li>Marcory Av. de Côte d’Ivoire, Abidjan,Côte d’Ivoire</li>
                                            <li><a href="mailto:Info@triadci.com" style={{color:'#4a4a4a'}}>Info@triadci.com</a></li>
                                            <li> <a href='tel: +225 27 21 56 63 32' style={{color:'#4a4a4a'}}>+225 27 21 56 63 32</a></li>
                                            {/* <li>(+298) 146-6543-480</li>     */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Mali</h4>
                                        <ul className="widget_address">
                                            <li>Hamdallaye, commune IV, Bamako, Mali</li>
                                            <li><a href="mailto:Info@triamedml.com" style={{color:'#4a4a4a'}}>Info@triamedml.com</a></li>
                                            <li> <a href='tel: +223 93 91 00 00' style={{color:'#4a4a4a'}}>+223 93 91 00 00</a></li>
                                            {/* <li>(+298) 146-6543-480</li> */}
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Useful links</h4>
                                        <ul>
                                            <li><NavLink to={"/"}>ACCUEIL</NavLink></li>
                                            <li><NavLink to={"/about"}>À PROPOS DE NOUS</NavLink></li>
                                            <li><NavLink to={"/certification"}>RÉALISATIONS ET CERTIFICATIONS</NavLink></li>
                                            <li><NavLink to={"/services"}>PRODUITS</NavLink></li>
                                            <li><NavLink to={"/contactus"}>NOUS CONTACTER</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* TAGS */}
                                
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper " style={{backgroundColor:'#75BF44'}}>
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                  <a href='http://brightmedia.tech/' target='_blank'> <span className="copyrights-text" > © 2025 Triadco. Designed By </span>  <span className="copyrights-text" style={{color:'white'}}>Bright Media</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)}/>

            </>
        );
    };
};

export default Footer;