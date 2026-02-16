import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
import Footer from '../Common/Footer';
import Banner from '../Elements/Banner';
import Header from '../Common/Header';

// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    title: 'Equipements médicaux',
    price: 4500,
    image_url: require('./../../images/img/80.webp'),
    category: 'Mobilier médical',
    link:'/produits/equipements-medicaux'
  },
  {
    id: 2,
    title: `Mobiliers hospitaliers`,
    price: 2200,
    image_url: require('./../../images/img/81.webp'),
    category: 'Mobilier médical',
    link:'/produits/mobiliers-hospitaliers'
  },
  {
    id: 3,
    title: `Instruments et boîtes`,
    price: 2800,
    image_url: require('./../../images/img/82.webp'),
    category: 'Mobilier médical',
    link:'/produits/instruments-et-boites'
  },
  {
    id: 4,
    title: 'Consommables médicaux',
    price: 1800,
    image_url: require('./../../images/img/83.webp'),
    category: 'Mobilier médical',
    link:'/produits/consommables-medicaux'
  },
  {
    id: 5,
    title: 'Produits paramédicaux',
    price: 3200,
    image_url: require('./../../images/img/84.webp'),
    category: 'Mobilier médical',
    link:'/produits/produits-paramedicaux'
  }
];
var bnrimg = require('./../../images/allimges/About.jpg');

export default function Produits() {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  

  useEffect(() => {
    // Load featured products
    setProducts(featuredProducts.slice(0, 5));
  }, []);

  // if (loading) {
  //   return (
  //     <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb' }}>
  //       <div style={{ fontSize: '1.25rem', color: '#4b5563' }}>Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <>
    <Header />
                <div className="page-content">
                    <Banner title="Produits" pagename="About Us" bgimage={bnrimg}/>
    <div id="container">
      <div className="content">
        {/* <div className="header">
          <h1 className="title">Featured Products</h1>
          <p className="subtitle">
            Discover our curated selection of premium items
          </p>
        </div> */}

        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="imageWrapper">
                <img
                  src={product.image_url}
                  alt={product.title}
                  className="image"
                />
                <div className="overlay" />
              </div>
              <div className="cardContent">
                <h3 className="cardTitle" id='card-title'><a href={product.link}>{product.title}</a></h3>
                {/* <p className="price">${product.price.toFixed(2)}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="buttonWrapper">
          <button
            onClick={() => navigate('/equipements')}
            className="button"
          >
            View All Products
            <ArrowRight className="buttonIcon" />
          </button>
        </div> */}
      </div>
      <style>{`
      #container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f9fafb, #f7fdf3);
  padding: 6rem 1rem;
}

.content {
  max-width: 80%;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #4b5563;
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

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.card {
  background: #86d154;
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
  // height: 20rem;
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

.cardContent {
  padding: 1.25rem;
}

.cardTitle {
  font-size: 2.25rem;
  font-weight: 600;
  color: white !important;
  // margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  line-height: 0;
}
  #card-title a {
    color: white !important;
    }
  #card-title a:hover {
    color: #000000 !important;
    }

.card:hover .cardTitle {
  color: #ffffff !important;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #7ac943;
}

.buttonWrapper {
  display: flex;
  justify-content: center;
}

.button {
  background: #7ac943;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.button:hover {
  background: #5da02f;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
}

.buttonIcon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.button:hover .buttonIcon {
  transform: translateX(0.25rem);
}

      `}</style>
    </div>
    </div>

                <Footer />
                </>
  );
}
