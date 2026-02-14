import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import Header from '../Common/Header';
import Banner from './Banner';
import Footer from '../Common/Footer';

const bnrimg = require('./../../images/allimges/About.jpg');

const ITEMS_PER_PAGE = 20;

// Sample products data (replaced with mobiliers titles per user request)
const allProducts = [
  { id: 1, title: "Armoire médicale", image_url: require('./../../images/img/40.webp'), is_featured: false },
  { id: 2, title: "Berceau bébé", image_url: require('./../../images/img/41.webp'), is_featured: false },
  { id: 3, title: "Brancard d'ambulance", image_url: require('./../../images/img/42.webp'), is_featured: false },
  { id: 4, title: "Brancard hydraulique", image_url: require('./../../images/img/43.webp'), is_featured: false },
  { id: 5, title: "Brancard pliant en 2 dans sa longueur, orange", image_url: require('./../../images/img/44.webp'), is_featured: false },
  { id: 6, title: "Brancard simple", image_url: require('./../../images/img/45.webp'), is_featured: false },
  { id: 7, title: "Chaise de prélèvement", image_url: require('./../../images/img/46.webp'), is_featured: false },
  { id: 8, title: "Chaise de prélèvement", image_url: require('./../../images/img/47.webp'), is_featured: false },
  { id: 9, title: "Chaise de transport malade", image_url: require('./../../images/img/48.webp'), is_featured: false },
  { id: 10, title: "Chaise de transport malade", image_url: require('./../../images/img/49.webp'), is_featured: false },
  { id: 11, title: "Chaise dentaire", image_url: require('./../../images/img/50.webp'), is_featured: false },
  { id: 12, title: "Chariot de soins", image_url: require('./../../images/img/51.webp'), is_featured: false },
  { id: 13, title: "Chariot de soins et d'anesthésie", image_url: require('./../../images/img/52.webp'), is_featured: false },
  { id: 14, title: "Chariot d'urgences", image_url: require('./../../images/img/53.webp'), is_featured: false },
  { id: 15, title: "Chariot médical à tiroirs", image_url: require('./../../images/img/54.webp'), is_featured: false },
  { id: 16, title: "Chariot médical plastique", image_url: require('./../../images/img/55.webp'), is_featured: false },
  { id: 17, title: "Guéridon inox – 3 plateaux amovibles", image_url: require('./../../images/img/56.webp'), is_featured: false },
  { id: 18, title: "Lit d'accouchement – 4 moteurs", image_url: require('./../../images/img/57.webp'), is_featured: false },
  { id: 19, title: "Lit électrique 4 moteurs", image_url: require('./../../images/img/58.webp'), is_featured: false },
  { id: 20, title: "Lit mécanique 2 fonctions", image_url: require('./../../images/img/59.webp'), is_featured: false },
  { id: 21, title: "Lit mécanique 4 fonctions", image_url: require('./../../images/img/60.webp'), is_featured: false },
  { id: 22, title: "Marche-pied", image_url: require('./../../images/img/61.webp'), is_featured: false },
  { id: 23, title: "Matelas pneumatique à bulles", image_url: require('./../../images/img/62.webp'), is_featured: false },
  { id: 24, title: "Négatoscope 2 plages", image_url: require('./../../images/img/63.webp'), is_featured: false },
  { id: 25, title: "Paravent", image_url: require('./../../images/img/64.webp'), is_featured: false },
  { id: 26, title: "Pèse-personne adulte", image_url: require('./../../images/img/65.webp'), is_featured: false },
  { id: 27, title: "Potence médicale", image_url: require('./../../images/img/66.webp'), is_featured: false },
  { id: 28, title: "Rollator 2 roues Simply II", image_url: require('./../../images/img/67.webp'), is_featured: false },
  { id: 29, title: "Table à manger", image_url: require('./../../images/img/68.webp'), is_featured: false },
  { id: 30, title: "Table d'opération universelle", image_url: require('./../../images/img/69.webp'), is_featured: false },
  { id: 31, title: "Table d'opération universelle", image_url: require('./../../images/img/70.webp'), is_featured: false },
  { id: 32, title: "Table de chevet", image_url: require('./../../images/img/71.webp'), is_featured: false },
  { id: 33, title: "Table de consultation", image_url: require('./../../images/img/72.webp'), is_featured: false },
  { id: 34, title: "Table de Mayo en inox", image_url: require('./../../images/img/73.webp'), is_featured: false },
  { id: 35, title: "Table d'examen gynécologique", image_url: require('./../../images/img/74.webp'), is_featured: false },
  { id: 36, title: "Table d'instruments inox", image_url: require('./../../images/img/75.webp'), is_featured: false },
  { id: 37, title: "Tabouret", image_url: require('./../../images/img/76.webp'), is_featured: false },
  { id: 38, title: "Tabouret avec dossier", image_url: require('./../../images/img/77.webp'), is_featured: false },
  { id: 39, title: "Tige métrique pour adulte", image_url: require('./../../images/img/78.webp'), is_featured: false },
  { id: 40, title: "Tige métrique pour bébé", image_url: require('./../../images/img/79.webp'), is_featured: false },
];

export default function Mobiliers() {
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
      <Banner title="Mobiliers hospitaliers" pagename="mobilers" bgimage={bnrimg}/>
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
