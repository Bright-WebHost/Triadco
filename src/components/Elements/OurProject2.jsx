import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [

    { label: "Mobilier médical", filter: ".cat-1" },
    { label: "Consommable médical", filter: ".cat-2" },
    { label: "Appareil médical", filter: ".cat-3" },
    
];

const projects = [
    {
        image: require('./../../images/allproducts/Electric hospital bed (ICU).webp'),
        title: 'Lit hôpital électrique (ICU)',
        category: 'Electric hospital bed (ICU)',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/Gyneco examination table.webp'),
        title: `Table d'examen Gyneco`,
        category: 'Buildings, Engineering',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/Delivery table.webp'),
        title: `Table d'accouchement`,
        category: 'Aqaba, Jordan',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/Hospital bed (1 function).webp'),
        title: 'Lit hopital (1 fonction)',
        category: 'Design and Construction',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/Hospital bed (3 functions).webp'),
        title: 'Lit hopital (3fonctions)',
        category: 'Engineering, interior',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/Medical bed (baby.webp'),
        title: 'Lit médical (bébé)',
        category: 'Construction',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/Wheel Chair.webp'),
        title: 'Chaise Roulante',
        category: 'Construction',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/Sampling chair.webp'),
        title: 'Chaise de prélèvement',
        category: 'Construction',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/Gyneco examination table.webp'),
        title: `Table d'examen`,
        category: 'Construction',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/Stainless steel thinking table (6 try).webp'),
        title: 'Table à pensement inox (6 try)',
        category: 'Construction',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/Medical dining table.webp'),
        title: 'Table à mange médical',
        category: 'Construction',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/allproducts/mediaca/1.webp'),
        title: 'Syringes',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/INTRANUELLE.webp'),
        title: 'INTRANUELLE',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/aiguille Prélèvement.webp'),
        title: 'aiguille Prélèvement',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/PERFUSEUR.webp'),
        title: 'PERFUSEUR',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/COTTON 1kg.webp'),
        title: 'COTTON 1kg',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/SPARADRAP PERFORE.webp'),
        title: 'SPARADRAP PERFORE',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/Cotton 500 g.webp'),
        title: 'Cotton 500 g',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/compresse-de-gaze-non-sterile.webp'),
        title: 'compresse-de-gaze-non-sterile',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/crepe-bandages.webp'),
        title: 'crepe-bandages',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/3-Ply-Masks.webp'),
        title: '3-Ply-Masks',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/N95 mask.webp'),
        title: 'N95 mask',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/disposable-shoe.webp'),
        title: 'disposable-shoe',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/Gown-X-LG-Sterile-W-Towel-20-Cs.webp'),
        title: 'Gown-X-LG-Sterile-W-Towel-20-Cs',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/Sterile Latex Gloves.webp'),
        title: 'Sterile Latex Gloves',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/mediaca/ROUND-CAP.webp'),
        title: 'ROUND-CAP',
        category: 'Construction',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/allproducts/last/Otoscope (2 fonctions).webp'),
        title: 'Otoscope (2 fonctions)',
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require(`./../../images/allproducts/last/Machine d'échographie.webp`),
        title: `Machine d'échographie`,
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/allproducts/last/Thermomètre Infrarouge.webp'),
        title: 'Thermomètre Infrarouge',
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/allproducts/last/Tensiomètre électrique (bras).webp'),
        title: 'Tensiomètre électrique (bras)',
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/allproducts/last/Pèse personne adulte mécanique.webp'),
        title: 'Pèse personne adulte mécanique',
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/allproducts/last/Pèse bébé.webp'),
        title: 'Pèse bébé',
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/allproducts/last/Moniteur médical (4 fonctions LCD).webp'),
        title: 'Moniteur médical (4 fonctions LCD)',
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/allproducts/last/Oxymètre Pulse.webp'),
        title: 'Oxymètre Pulse',
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/allproducts/last/Machine de mésure électronique de poids et hauteur.webp'),
        title: 'Machine de mésure électronique de poids et hauteur',
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/allproducts/last/Machine Ecographe Portable blanc et noir.webp'),
        title: 'Machine Ecographe Portable blanc et noir',
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/allproducts/last/Oxygen Concentratur machine.webp'),
        title: 'Oxygen Concentratur machine',
        category: 'Construction',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/allproducts/last/Tensiomètre machine (manuel).webp'),
        title: 'Tensiomètre machine (manuel)',
        category: 'Construction',
        filter: 'cat-3'
    },
   
]

class OurProject2 extends React.Component {
    
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
                <div className="section-full p-t80 p-b30 square_shape2 mobile-page-padding">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Solution </span> d’Imagerie</h2>
                                    
                                </div>
                                <p className="text-uppercase sep-line-one ">Triad Co fournit des produits et des solutions pour
Radiologie et leurs accessoires et aide à la planification
nouveauCentres de radiologie</p>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="filter-wrap text-center">
                                <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                                    <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">Tous</NavLink></li>
                                    {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                    ))}                            
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="section-content">
                            <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-lg-3 col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-one hover-shadow">
                                            <img src={item.image} alt="" />
                                            <div className="figcaption">
                                                <h4 style={{margin:'5px', fontSize:'16px'}}>{item.title}</h4>
                                                {/* <p>{item.category}</p> */}
                                           <i className="link-plus bg-primary" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurProject2;