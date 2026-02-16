import React, { useState } from "react";
import { Play } from 'lucide-react';
// import demoVideo from "./../../Video/triadco-video.mp4";

function NewSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <style>{`
        .main-container {
          min-height: 100vh;
          background-color: #F6F7F8;
        }
        
        .section {
          padding: 4rem 1rem;
        }
        
        .max-container {
          max-width: 80%;
          margin: 0 auto;
        }
        
        .text-center {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .title {
          font-size: 4rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 1rem;
        }
        
        .subtitle {
          font-size: 1.45rem;
          color: #374151;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .service-card {
          position: relative;
          height: 100%;
          overflow: hidden;
        //   border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .service-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
        
        .service-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(55, 65, 81, 0.9);
          color: white;
          padding:  0 0.5rem 0 1rem;
        }
        
        .service-title {
          font-size: 2rem;
          font-weight: 500;
          color: white;
        }
        
        .button-center {
          display: flex;
          justify-content: center;
        }
        
        .primary-button {
          background-color: #75BF44;
          color: white;
          font-weight: 600;
          padding: 1.5rem 2.5rem;
          border-radius: 0rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.2s ease;
        }
        
        .primary-button:hover {
          background-color: #000000;
        }
        
        .white-section {
          background-color: white;
        }
        
        .section-title {
          font-size: 3.5rem;
          font-weight: 500;
          color: #111827;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .project-container {
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .project-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }
        
        .play-button-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .play-button {
          width: 6rem;
          height: 6rem;
          background-color: #75BF44;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transition: all 0.2s ease;
          border: none;
        }
        
        .play-button:hover {
          background-color: #000000;
          transform: scale(1.1);
        }
        
        .play-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: white;
          margin-left: 0.25rem;
          fill: white;
        }
        
        .light-section {
          background-color: #F5F0EB;
        }
        
        .bg-yellow-50 {
          background-color: #FEFCE8;
        }
        
        .bg-pink-50 {
          background-color: #FDF2F8;
        }
        
        .bg-blue-50 {
          background-color: #EFF6FF;
        }
          .video-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.video-wrapper {
  width: 80%;
  max-width: full;
}

.video-wrapper video {
  width: 100%;
  border-radius: 12px;
}

/* Close button OUTSIDE video */
.close-btn {
  position: fixed;
  top: 24px;
  right: 24px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: red;
  color: #fff;
  font-size: 20px;
  border: none;
  cursor: pointer;
  z-index: 1000;
}


      `}</style>

      <div className="main-container">
        <section className="section">
          <div className="max-container">
            <div className="text-center">
              <h1 className="title">Nos services</h1>
              <p className="subtitle">Découvrez nos services innovants et accessibles.</p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <img
                  src={require('./../../images/img/150.webp')}
                  alt="Salles de bloc opératoire"
                  className="service-image"
                />
                <div className="service-overlay">
                  <h3 className="service-title">Salles de bloc opératoire</h3>
                </div>
              </div>

              <div className="service-card">
                <img
                  src={require('./../../images/img/151.webp')}
                  alt="Salles de réanimation"
                  className="service-image"
                />
                <div className="service-overlay">
                  <h3 className="service-title">Salles de réanimation</h3>
                </div>
              </div>

              <div className="service-card">
                <img
                  src={require('./../../images/img/152.webp')}
                  alt="Salles d'accouchement"
                  className="service-image"
                />
                <div className="service-overlay">
                  <h3 className="service-title">Salles d'accouchement</h3>
                </div>
              </div>
            </div>

            <div className="button-center">
              <button onClick={() => window.location.href = '/produits'} className="primary-button site-button btn-effect">
                Tous nos services
              </button>
            </div>
          </div>
        </section>

        <section className="section white-section">
          <div className="max-container">
            <h2 className="section-title">
              Projet d'aménagement & d'équipement de bloc opératoire
            </h2>

            <div className="project-container">
        <img
          src={require("./../../images/img/153.webp")}
          alt="Bloc opératoire"
          className="project-image"
        />

        <div className="play-button-container">
          <button
            className="play-button"
            onClick={() => setOpen(true)}
          >
            <Play className="play-icon" />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="video-modal"
          onClick={() => setOpen(false)} // click backdrop closes
        >
          {/* Close button OUTSIDE video */}
          <button
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            ✕
          </button>

          {/* Video wrapper */}
          <div
            className="video-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <video controls autoPlay>
              <source src={demoVideo} type="video/mp4" />
            </video> */}
          </div>
        </div>
      )}
          </div>
        </section>

        {/* <section className="section light-section">
          <div className="max-container">
            <div className="categories-container">
              <div className="categories-header">
                <h2 className="categories-title">Nos catégories de produits</h2>
                <button className="categories-button">
                  Consulter la boutique
                </button>
              </div>

              <div className="categories-content">
                <div className="top-categories">
                  <div className="category-item bg-yellow-50">
                    <img
                      src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Equipements médicaux"
                      className="category-image"
                    />
                    <h3 className="category-title">Equipements médicaux</h3>
                  </div>

                  <div className="category-item bg-pink-50">
                    <img
                      src="https://images.pexels.com/photos/3845666/pexels-photo-3845666.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Mobiliers hospitaliers"
                      className="category-image"
                    />
                    <h3 className="category-title">Mobiliers hospitaliers</h3>
                  </div>
                </div>

                <div className="bottom-categories">
                  <div className="category-item bg-pink-50">
                    <img
                      src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Instruments et boîtes"
                      className="small-category-image"
                    />
                    <h3 className="small-category-title">Instruments et boîtes</h3>
                  </div>

                  <div className="category-item bg-blue-50">
                    <img
                      src="https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Consommables médicaux"
                      className="small-category-image"
                    />
                    <h3 className="small-category-title">Consommables médicaux</h3>
                  </div>

                  <div className="category-item bg-yellow-50">
                    <img
                      src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Produits paramédicaux"
                      className="small-category-image"
                    />
                    <h3 className="small-category-title">Produits paramédicaux</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default NewSection;