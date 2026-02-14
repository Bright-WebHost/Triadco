import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';

var bnrimg = require('./../../images/banner/5.jpg');

class Tabs extends React.Component {
    render() {
        return (
            <>
                {/* <Header /> */}
                <div className="page-content">
                {/* <Banner title="When it comes to your house, don’t mess with the rest, trust the best." pagename="Tabs" bgimage={bnrimg}/> */}
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full inner-page-padding">
                        <div className="container">
                            <div className="row">
                                {/* <ShortcodesNav /> */}
                                
                                <div className="col-md-12 col-sm-8" style={{display:'flex',justifyContent:'center'}}>
                                    <div className="section-content">
                                        {/* <div className="m-b50">
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">background</span> Tabs</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-tabs vertical bg-tabs">
                                                <ul className="nav nav-tabs">
                                                    <li className="active"><a data-toggle="tab" href="#web-design-15">Home</a></li>
                                                    <li><a data-toggle="tab" href="#graphic-design-15">Profile</a></li>
                                                    <li><a data-toggle="tab" href="#developement-15">Massages</a></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div id="web-design-15" className="tab-pane active">
                                                        <p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                                                    </div>
                                                    <div id="graphic-design-15" className="tab-pane">
                                                        <p className="m-b0">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                    </div>
                                                    <div id="developement-15" className="tab-pane">
                                                        <p className="m-b0">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}



                                        <div className="m-b50">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    {/* <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Tabs left with</span> background</h2>
                                                    </div> */}
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            {/* TAB DEFAULT WITH NAV BG */}
                                            <div className="section-content">
                                                <div className="mt-tabs bg-tabs">
                                                    <ul className="nav nav-tabs" style={{display:'flex',justifyContent:'center'}}>
                                                        <li className="active" ><a data-toggle="tab" href="#web-design-13" style={{fontWeight:'600'}}>MISSION</a></li>
                                                        <li><a data-toggle="tab" href="#graphic-design-13" style={{fontWeight:'600'}}>VISION</a></li>
                                                        <li><a data-toggle="tab" href="#developement-13" style={{fontWeight:'600'}}>VALEUR</a></li>
                                                    </ul>
                                                    <div className="tab-content" >
                                                        <div id="web-design-13" className="tab-pane active"  >
                                                        {/* <img src={require('./../../images/allicons/target.png')}/> */}
                                                        <div className="mt-icon-box-wraper m-b30">
                                                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                                        <span className="icon-count-number" style={{fontSize:'30px'}}>MISSION</span>
                                                        <div className="icon-md inline-icon m-b15 text-primary scale-in-center" >
                                                        <span className="icon-cell" ><img src={require('./../../images/allicons/target.png')} alt="" /></span>
                                                    </div>
                                                   
                                                            <p >
                                                            <ul className="m-b0"  style={{fontSize:'14px'}}>
                                                                
                                                                <li>Fournir des équipements médicaux de haute qualité pour améliorer les soins de santé et la qualité de vie
                                                                </li>
                                                                <li>Garantir que les produits médicaux essentiels soient accessibles partout.
                                                                </li>
                                                                <li>Assurer un service à la clientèle de qualité supérieure grâce à des conseils et à une assistance d'experts.
                                                                </li>
                                                                <li>Contribuer à l'avancement des pratiques médicales en proposant des solutions innovantes et efficaces.
                                                                </li>
                                                                <li>Faire équipe avec les professionnels de la santé pour répondre à leurs besoins en matière d'équipement et de fournitures.
                                                                </li>

                                                            </ul>
                                                            </p>
                                                            </div>
                                                            </div>
                                                        </div>

                                                        <div id="graphic-design-13" className="tab-pane">
                                                        <div className="mt-icon-box-wraper m-b30">
                                                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                                        <span className="icon-count-number" style={{fontSize:'30px'}}>VISION</span>
                                                        <div className="icon-md inline-icon m-b15 text-primary scale-in-center" >
                                                        <span className="icon-cell" ><img src={require('./../../images/allicons/vision (1).png')} alt="" /></span>
                                                    </div>
                                                            <p>
                                                        <ul className="m-b0">
                                                                <li>Établir la norme en matière d'équipement médical haut de gamme.
                                                                </li>
                                                                <li>Être un partenaire de confiance dans le domaine des soins de santé grâce à notre engagement en faveur de l'excellence.
                                                                </li>
                                                                <li>Élargir notre champ d'action pour répondre aux besoins croissants de l'Afrique en matière d'approvisionnement médical.
                                                                </li>
                                                                <li>Augmenter les entrepôts pour des livraisons plus rapides et plus sûres.
                                                                </li>
                                                                <li>Construire des réseaux de distribution mondiaux pour l'exportation de produits à long terme.
                                                                </li>

                                                            </ul>
                                                            </p>
                                                        </div>
                                                        </div>
                                                        </div>



                                                        <div id="developement-13" className="tab-pane">
                                                        <div className="mt-icon-box-wraper m-b30">
                                                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                                        <span className="icon-count-number" style={{fontSize:'30px'}}>VALEUR</span>
                                                        <div className="icon-md inline-icon m-b15 text-primary scale-in-center" >
                                                        <span className="icon-cell" ><img src={require('./../../images/allicons/diamond (2).png')} alt="" /></span>
                                                    </div>
                                                            <p>
                                                        <ul className="m-b0">
                                                                <li>Fournir des produits de qualité supérieure pour la sécurité et le bien-être des patients.
                                                                </li>
                                                                <li>Nous donnons la priorité à l'éthique et à la transparence vis-à-vis de nos clients.
                                                                </li>
                                                                <li>Engagée à faire progresser les soins de santé par l'innovation.
                                                                </li>
                                                                <li>Nous assumons notre responsabilité sociale en adoptant des pratiques durables et en contribuant à des causes sociales et environnementales.
                                                                </li>

                                                            </ul>
                                                            </p>
                                                        </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                        {/* <div className="m-b50">
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Default</span> Tabs</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="section-content">
                                                <div className="mt-tabs tabs-default">
                                                    <ul className="nav nav-tabs">
                                                        <li className="active"><a data-toggle="tab" href="#web-design-1">Home</a></li>
                                                        <li><a data-toggle="tab" href="#graphic-design-1">Profile</a></li>
                                                        <li><a data-toggle="tab" href="#developement-1">Massages</a></li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div id="web-design-1" className="tab-pane active">
                                                            <p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                                                        </div>
                                                        <div id="graphic-design-1" className="tab-pane">
                                                            <p className="m-b0">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                        </div>
                                                        <div id="developement-1" className="tab-pane">
                                                            <p className="m-b0">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}



                                        {/* <div className="m-b0">
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Tabs Defaul</span> nav left</h2>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                            <div className="mt-tabs vertical tabs-default">
                                                <ul className="nav nav-tabs">
                                                    <li className="active"><a data-toggle="tab" href="#web-design-3">Home</a></li>
                                                    <li><a data-toggle="tab" href="#graphic-design-3">Profile</a></li>
                                                    <li><a data-toggle="tab" href="#developement-3">Massages</a></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div id="web-design-3" className="tab-pane active">
                                                        <p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                                                    </div>
                                                    <div id="graphic-design-3" className="tab-pane">
                                                        <p className="m-b0">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                    </div>
                                                    <div id="developement-3" className="tab-pane">
                                                        <p className="m-b0">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}


                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                {/* <Footer /> */}
            </>
        );
    };
};

export default Tabs;