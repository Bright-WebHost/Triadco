import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import About from './Pages/About';
import Services from './Pages/Services';
import BlogGrid from './Pages/BlogGrid';
import BlogListing from './Pages/BlogListing';
import BlogMasonary from './Pages/BlogMasonary';
import Faq from './Pages/Faq';
import Error from './Pages/Error';
import ContactUs from './Pages/ContactUs';
import PostImage from './Pages/PostImage';
import PostGallery from './Pages/PostGallery';
import PostVideo from './Pages/PostVideo';
import PostSidebar from './Pages/PostSidebar';

import ProjectCarousel from './Pages/ProjectCarousel';
import ProjectClassic1 from './Pages/ProjectClassic1';
import ProjectClassic2 from './Pages/ProjectClassic2';
import ProjectDetail from './Pages/ProjectDetail';
import ProjectGrid from './Pages/ProjectGrid';
import ProjectMasonary from './Pages/ProjectMasonary';

import Accordian from './Pages/Accordian';
import Button from './Pages/Button';
import IconBoxStyle from './Pages/IconBoxStyle';
import IconFont from './Pages/IconFont';
import ListGroup from './Pages/ListGroup';
import ModalPopup from './Pages/ModalPopup';
import Table from './Pages/Table';
import Tabs from './Pages/Tabs';
import Video from './Pages/Video';
import ScrollToTop from './Common/ScrollToTop';
import Certification from './Pages/Certification';
import Produits from './Pages/Produits';
import Equipements from './Elements/Equipements';
import Mobiliers from './Elements/Mopbiliers';
import Instruments from './Elements/Instruments';
import Consommables from './Elements/Consommables';
import Paramedicaux from './Elements/Paramedicaux';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter >
                <ScrollToTop />
                <div className="page-wraper">
                        <Routes>
                            <Route path="/"  element={<Home/>} />
                            <Route path='/homepage2' element={<Home2/>} />
                            <Route path='/homepage3' element={<Home3/>} />
                            <Route path='/homepage4' element={<Home4/>} />

                            <Route path='/about' element={<About/>} />
                            <Route path='/certification' element={<Certification/>} />
                            <Route path='/services' element={<Services/>} />

                            <Route path='/blog-grid' element={<BlogGrid/>} />
                            <Route path='/blog-listing' element={<BlogListing/>} />
                            <Route path='/blog-masonary' element={<BlogMasonary/>} />
                            <Route path='/faq' element={<Faq/>} />
                            <Route path='/error' element={<Error/>} />
                            <Route path='/contactus' element={<ContactUs/>} />

                            <Route path='/post-image' element={<PostImage/>} />
                            <Route path='/post-gallery' element={<PostGallery/>} />
                            <Route path='/post-video' element={<PostVideo/>} />
                            <Route path='/post-sidebar' element={<PostSidebar/>} />

                            <Route path='/project-carousel' element={<ProjectCarousel/>} />
                            <Route path='/project-classic1' element={<ProjectClassic1/>} />
                            <Route path='/project-classic2' element={<ProjectClassic2/>} />
                            <Route path='/project-detail' element={<ProjectDetail/>} />
                            <Route path='/project-grid' element={<ProjectGrid/>} />
                            <Route path='/project-masonary' element={<ProjectMasonary/>} />

                            <Route path='/accordian' element={<Accordian/>} />
                            <Route path='/button' element={<Button/>} />
                            <Route path='/iconboxstyle' element={<IconBoxStyle/>} />
                            <Route path='/iconfont' element={<IconFont/>} />
                            <Route path='/listgroup' element={<ListGroup/>} />
                            <Route path='/modalpopup' element={<ModalPopup/>} />
                            <Route path='/table' element={<Table/>} />
                            <Route path='/tabs' element={<Tabs/>} />
                            <Route path='/video' element={<Video/>} />
                            <Route element={<Error/>} />

                            <Route path='/produits' element={<Produits/>} />
                            <Route path='/produits/equipements-medicaux' element={<Equipements/>} />
                            <Route path='/produits/mobiliers-hospitaliers' element={<Mobiliers/>} />
                            <Route path='/produits/instruments-et-boites' element={<Instruments/>} />
                            <Route path='/produits/consommables-medicaux' element={<Consommables/>} />
                            <Route path='/produits/produits-paramedicaux' element={<Paramedicaux/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;