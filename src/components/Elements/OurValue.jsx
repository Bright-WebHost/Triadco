import React from 'react';
import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';

var img1 = require('./../../images/video-bg.jpg');

class OurValue extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
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
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-white">
                    <div className="container">
                        <div className="section-content" style={{display:'flex',justifyContent:'center'}}>
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    {/* TITLE START */}
                                    {/* <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Value</h2>
                                            </div>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.there are many 																				                                                     variations of passages of Ipsum available,</p>
                                        </div>
                                    </div> */}
                                    {/* TITLE END */}
                                    {/* <div className="author-info p-t20">
                                        <div className="author-signature">
                                            <img src={require('./../../images/Signature+Black.png')} alt="Signature" width={150} />
                                        </div>
                                        <div className="author-name">
                                            <h4 className="m-t0">David Houkr</h4>
                                            <p>Architect &amp; Founder</p>
                                        </div>
                                    </div> */}
                                    {/* <div className="video-section-full bg-no-repeat bg-cover overlay-wraper" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                                        <div className="overlay-main bg-black opacity-07" />
                                        <div className="video-section-inner">
                                            <div className="video-section-content">
                                                
                                                <div className="video-section-left">
                                                    <button type="button" className="play-now" data-toggle="modal" data-target="#myModal2">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </button>
                                                </div>
                                                <div className="video-section-right">
                                                <NavLink to={"#"} className="font-weight-600 text-uppercase" data-toggle="modal" data-target="#myModal">Video Presentation</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div className="col-md-3 col-sm-6">
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15 text-primary"><CountUp end={450} duration={5} /></div>
                                        <h4 className="m-tb0">Active Experts</h4>
                                    </div>
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15  text-primary"><CountUp end={670} duration={5} /></div>
                                        <h4 className="m-tb0">Satisfied Clients</h4>
                                    </div>
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15 text-primary"><CountUp end={1500} duration={5} /></div>
                                        <h4 className="m-tb0">Project Complete</h4>
                                    </div>
                                </div> */}
                                <div className="col-md-12 col-sm-6">
                                    <div className="p-b0">
                                        <div className="mt-box">
                                            <h3 className="m-t0"><span className="font-weight-100"> Nous avons </span><span className="text-primary"> 10 ans</span> d'expérience dans l'industrie</h3>
                                        </div>
                                        <span className="progressText text-black"><b>Qualité des produits </b></span>
                                        <div className="progress mt-probar-1  m-b30 m-t10" >
                                            <div className="progress-bar bg-primary " role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} >
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="100%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Technologie avancée </b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="100%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Expertise en solutions personnalisées</b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="100%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Conformité aux normes mondiales </b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="100%" />
                                            </div>
                                        </div>
                                        {/* <span className="progressText text-black"><b>Commercial</b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="55%" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal2" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://vimeo.com/34741214' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurValue;