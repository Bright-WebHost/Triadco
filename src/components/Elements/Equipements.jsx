import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import Header from '../Common/Header';
import Banner from './Banner';
import Footer from '../Common/Footer';

const bnrimg = require('./../../images/allimges/About.jpg');

const ITEMS_PER_PAGE = 20;

// Sample products data (titles replaced per user request)
const allProducts = [
  { id: 1, title: "Aspirateur à mucosité Ca-mi Askir C30 br bocaux", image_url: require('./../../images/img/1.webp'), is_featured: false },
  { id: 2, title: "Aspirateur de mucosité CA-MI New Aspiret", image_url: require('./../../images/img/2.webp'), is_featured: false },
  { id: 3, title: "Aspirateur de mucosité YX980D", image_url: require('./../../images/img/3.webp'), is_featured: false },
  { id: 4, title: "Bras chirurgical", image_url: require('./../../images/img/4.webp'), is_featured: false },
  { id: 5, title: "Concentrateur oxygène portable", image_url: require('./../../images/img/5.webp'), is_featured: false },
  { id: 6, title: "Concentrateur oxygène, 5 L", image_url: require('./../../images/img/6.webp'), is_featured: false },
  { id: 7, title: "Couveuse bébé", image_url: require('./../../images/img/7.webp'), is_featured: false },
  { id: 8, title: "Couveuse bébé", image_url: require('./../../images/img/8.webp'), is_featured: false },
  { id: 9, title: "Couveuse bébé", image_url: require('./../../images/img/9.webp'), is_featured: false },
  { id: 10, title: "Défibrillateur biphasique", image_url: require('./../../images/img/10.webp'), is_featured: false },
  { id: 11, title: "Défibrillateur semi-automatique", image_url: require('./../../images/img/11.webp'), is_featured: false },
  { id: 12, title: "Doppler fœtal et vasculaire", image_url: require('./../../images/img/12.webp'), is_featured: false },
  { id: 13, title: "ECG Cardiomate 6", image_url: require('./../../images/img/13.webp'), is_featured: false },
  { id: 14, title: "ECG EDAN SE-300", image_url: require('./../../images/img/14.webp'), is_featured: false },
  { id: 15, title: "Échographe", image_url: require('./../../images/img/15.webp'), is_featured: false },
  { id: 16, title: "ESU – 2000 A (LCD)", image_url: require('./../../images/img/16.webp'), is_featured: false },
  { id: 17, title: "ESU – 350 A", image_url: require('./../../images/img/17.webp'), is_featured: false },
  { id: 18, title: "ICU Ventilateur Crius V6", image_url: require('./../../images/img/18.webp'), is_featured: false },
  { id: 19, title: "Lampe de thérapie infrarouge", image_url: require('./../../images/img/19.webp'), is_featured: false },
  { id: 20, title: "Lampe d'examen LED 3W avec pied à roulette", image_url: require('./../../images/img/20.webp'), is_featured: false },
  { id: 21, title: "Lampe photothérapie", image_url: require('./../../images/img/21.webp'), is_featured: false },
  { id: 22, title: "Manodétenteur d'oxygène", image_url: require('./../../images/img/22.webp'), is_featured: false },
  { id: 23, title: "maXium® White", image_url: require('./../../images/img/23.webp'), is_featured: false },
  { id: 24, title: "Microscope d'opération", image_url: require('./../../images/img/24.webp'), is_featured: false },
  { id: 25, title: "Moniteur patient avec support", image_url: require('./../../images/img/25.webp'), is_featured: false },
  { id: 26, title: "Nébuliseur", image_url: require('./../../images/img/26.webp'), is_featured: false },
  { id: 27, title: "Nébuliseur", image_url: require('./../../images/img/27.webp'), is_featured: false },
  { id: 28, title: "Pompe à perfusion", image_url: require('./../../images/img/28.webp'), is_featured: false },
  { id: 29, title: "Pompe de nutrition", image_url: require('./../../images/img/29.webp'), is_featured: false },
  { id: 30, title: "Pousse seringue (1 voie)", image_url: require('./../../images/img/30.webp'), is_featured: false },
  { id: 31, title: "Pousse seringues (2 voies)", image_url: require('./../../images/img/31.webp'), is_featured: false },
  { id: 32, title: "Scialytique mobile", image_url: require('./../../images/img/32.webp'), is_featured: false },
  { id: 33, title: "Scialytique plafonnier", image_url: require('./../../images/img/33.webp'), is_featured: false },
  { id: 34, title: "Stérilisateur", image_url: require('./../../images/img/34.webp'), is_featured: false },
  { id: 35, title: "Stérilisateur", image_url: require('./../../images/img/35.webp'), is_featured: false },
  { id: 36, title: "Stérilisateur à vapeur vertical", image_url: require('./../../images/img/36.webp'), is_featured: false },
  { id: 37, title: "Système central de monitoring", image_url: require('./../../images/img/37.webp'), is_featured: false },
  { id: 38, title: "Table d'anesthésie", image_url: require('./../../images/img/38.webp'), is_featured: false },
  { id: 39, title: "Table de réanimation néonatale", image_url: require('./../../images/img/39.webp'), is_featured: false },
];

export default function Equipements() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(allProducts.length);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const from = (currentPage - 1) * ITEMS_PER_PAGE;
      const to = from + ITEMS_PER_PAGE;

      // Simulate pagination with local data
      const paginatedProducts = allProducts.slice(from, to);
      setProducts(paginatedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb' }}>
        <div style={{ fontSize: '1.25rem', color: '#4b5563' }}>Loading...</div>
      </div>
    );
  }

  return (
    <>
    <Header />
    <div id="container">
      <Banner title="Equipements Médicaux" pagename="Equipements" bgimage={bnrimg}/>
      <div className="content">
        <div className="header">
          {/* <div className="headerText">
            <h1>All Products</h1>
            <p>Showing {products.length} of {totalCount} products</p>
          </div> */}
          <button
            onClick={() => navigate('/produits')}
            className="backButton"
          >
            <Home className="backIcon" />
            Retour aux Produits
          </button>
        </div>

        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="imageWrapper">
                <img
                  src={product.image_url}
                  alt={product.title}
                  className="image"
                />
                {/* <div className="overlay" />
                {product.is_featured && (
                  <div className="badge">Featured</div>
                )} */}
              </div>
              <div className="cardContent">
                <h3 className="cardTitle">{product.title}</h3>
                {/* <p className="cardDescription">{product.description}</p>
                <p className="price">${product.price.toFixed(2)}</p> */}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="paginationWrapper">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="paginationButton"
            >
              <ChevronLeft className="paginationIcon" />
            </button>

            <div className="pageNumbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`pageButton ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="paginationButton"
            >
              <ChevronRight className="paginationIcon" />
            </button>
          </div>
        )}
      </div>
      <style>{`
      #container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f9fafb, #f7fdf3);
  // padding: 4rem 1rem;
}

.content {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  padding-bottom: 4rem;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.headerText h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.headerText p {
  font-size: 1.25rem;
  color: #4b5563;
}

.backButton {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #7ac943;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 1rem 1rem;
  border: none;
}

.backButton:hover {
  color: #5da02f;
}

.backIcon {
  width: 1.25rem;
  height: 1.25rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

.card {
  
  background: #ffffff;
  // border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform: translateY(0);
}

.card:hover {
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-0.5rem);
}

.imageWrapper {
  position: relative;
  // height: 14rem;
  overflow: hidden;
  background: #f3f4f6;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .image {
  transform: scale(1.1);
  opacity: 0.7;
  
}

.overlay {
  position: absolute;
  inset: 0;
  background: #7ac943;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .overlay {
  opacity: 0.2;
}

.badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: #7ac943;
  color: white;
  padding: 0.25rem 0.75rem;
  // border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.cardContent {
  padding: 1.25rem;
}

.cardTitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #86d154;
  // margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  line-height: 1.2;
  margin: 0;
  padding: 0;
}

.card:hover .cardTitle {
  color: #000000;
}

.cardDescription {
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #7ac943;
}

.paginationWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.paginationButton {
  padding: 1rem;
  // border-radius: 0.5rem;
  border: none;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.paginationButton:hover:not(:disabled) {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.paginationButton:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  
}

.paginationIcon {
  width: 1.25rem;
  height: 1.25rem;
  color: #374151;
}

.pageNumbers {
  display: flex;
  gap: 1rem;
}

.pageButton {
  padding: 1rem 2rem;
  // border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.pageButton.active {
  background: #7ac943;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.pageButton:not(.active) {
  background: white;
  color: #374151;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.pageButton:not(.active):hover {
  background: #f3f4f6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
`}</style>
    </div>
    <Footer />
    </>
  );
}
