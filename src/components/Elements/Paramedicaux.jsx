import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import Header from '../Common/Header';
import Banner from './Banner';
import Footer from '../Common/Footer';

const bnrimg = require('./../../images/allimges/About.jpg');

const ITEMS_PER_PAGE = 20;

// Sample products data (replaced with paramedical titles per user request)
const allProducts = [
  { id: 1, title: "Analyse de l’hémoglobine", image_url: bnrimg, is_featured: false },
  { id: 2, title: "Bandelettes pour glucomètre", image_url: bnrimg, is_featured: false },
  { id: 3, title: "Glucomètre", image_url: bnrimg, is_featured: false },
  { id: 4, title: "Kit de contrôle de la glycémie (glucomètre)", image_url: bnrimg, is_featured: false },
  { id: 5, title: "Otoscope avec socle de recharge", image_url: bnrimg, is_featured: false },
  { id: 6, title: "Oxymètre de pouls", image_url: bnrimg, is_featured: false },
  { id: 7, title: "Stéthoscope Cardio Prestige II (trousse offerte)", image_url: bnrimg, is_featured: false },
  { id: 8, title: "Stéthoscope Idéal – pavillon simple adulte (noir)", image_url: bnrimg, is_featured: false },
  { id: 9, title: "Stéthoscope Idéal – pavillon simple adulte (rouge)", image_url: bnrimg, is_featured: false },
  { id: 10, title: "Stylo autopiqueur pour glucomètre", image_url: bnrimg, is_featured: false },
  { id: 11, title: "Tensiomètre avec stéthoscope", image_url: bnrimg, is_featured: false },
  { id: 12, title: "Tensiomètre électronique", image_url: bnrimg, is_featured: false },
  { id: 13, title: "Tensiomètre électronique", image_url: bnrimg, is_featured: false },
  { id: 14, title: "Tensiomètre électronique", image_url: bnrimg, is_featured: false },
  { id: 15, title: "Tensiomètre électronique", image_url: bnrimg, is_featured: false },
  { id: 16, title: "Tensiomètre manobrassard", image_url: bnrimg, is_featured: false },
  { id: 17, title: "Test rapide de paludisme (boîte de 25)", image_url: bnrimg, is_featured: false },
  { id: 18, title: "Thermomètre infrarouge sans contact", image_url: bnrimg, is_featured: false },
  { id: 19, title: "Vessie à glace", image_url: bnrimg, is_featured: false },
];

export default function Paramedicaux() {
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
      <Banner title="Produits paramédicaux" pagename="Paramédicaux" bgimage={bnrimg}/>
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
