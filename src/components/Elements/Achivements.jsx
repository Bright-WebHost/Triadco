import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/allimges/Achievments page1.webp'),        
    require('./../../images/allimges/Achievments page2.webp'),        
    require('./../../images/allimges/Achievments page1.webp'),        
    require('./../../images/allimges/Achievments page2.webp'),        
 
]

var bnr1 = require('./../../images/background/line.png');

class Achievements extends React.Component {
    
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/masonary.js');
      
    };
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true
        };
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-white inner-page-padding">
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img">
                                                 <img src={item} alt=""/>
                                                    </div>
                                                </div>
                                            ))}
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="m-about-containt text-black p-t80">
                                        {/* <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                                            <span className="text-primary large-title">25</span>
                                            <span className="large-title-info">Years of Experience</span>
                                        </div> */}
                                        <h3 className="font-weight-600">Nos <span style={{color:'#75BF44'}}>  réalisations</span></h3>
                                        <ul style={{lineHeight:'30px',margin:'10px',textAlign:'justify',textJustify:'inter-word'}}>
                                           <li>Fourniture de matériel de protection contre le covid 19 aux hôpitaux publics, aux cliniques privées, au ministère de la santé et de l'hygiène publique et aux institutions financières</li> 
                                           <li>Un contrat avec le DM pour la fourniture de couveuses aux centres de santé sur l'ensemble du territoire ivoirien.
                                           </li>
                                           <li>Contrat avec le Ministère de la Santé et de l'Hygiène Publique, le BNETD et le DM dans le cadre du Projet de Couverture Maladie Universelle (CMU) pour la fourniture et l'installation de mobilier, d'équipements et de consommables médico-chirurgicaux pour 154 centres de santé sur l'ensemble du territoire ivoirien.
                                           </li>
                                           <li>Contrat avec la société ASML à Bamako (Mali) pour la fourniture d'équipements et de mobilier pour un hôpital de 100 chambres.
                                           </li>
                                           </ul>
                                        <div className="author-info p-t20">
                                            {/* <div className="author-signature">
                                                <img src={require('./../../images/Signature+Black.png')} alt="Signature" width={150} />
                                            </div> */}
                                            {/* <div className="author-name">
                                                <h4 className="m-t0">David Houkr</h4>
                                                <p>Architect &amp; Founder</p>
                                            </div> */}
                                            {/* <NavLink to="/contactus" className="site-button btn-effect m-b15"><span>Nous contacter</span></NavLink> */}
                                        </div>
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

export default Achievements;