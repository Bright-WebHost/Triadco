import { Stethoscope, BedDouble, Package, Syringe, Thermometer } from 'lucide-react';
import { useState } from 'react';

function Categories() {
  return (
    <div style={styles.container}>
      <style>{css}</style>
      <div style={styles.wrapper}>
        <div style={styles.gridTop}>
          <div style={styles.header}>
            <h1 style={styles.title}>
              Nos catégories de produits
            </h1>
            <button className='site-button btn-effect' style={styles.button}>
              Consulter la boutique
            </button>
          </div>
          <CategoryCard
            title="Equipements médicaux"
            bgColor="#F7FBF2"
            hoverBgColor="#00CC1D"
            icon={<Stethoscope style={styles.iconGray} />}
          />
          <CategoryCard
            title="Mobiliers hospitaliers"
            bgColor="#fce7f3"
            hoverBgColor="#d81b99"
            icon={<BedDouble style={styles.iconPink} />}
          />
        </div>

        <div style={styles.gridBottom}>
          <CategoryCard
            title="Instruments et boîtes"
            bgColor="#FDF0F3"
            hoverBgColor="#DB0632"
            icon={<Package style={styles.iconAmber} />}
          />
          <CategoryCard
            title="Consommables médicaux"
            bgColor="#eff6ff"
            hoverBgColor="#3b82f6"
            icon={<Syringe style={styles.iconBlue} />}
          />
          <CategoryCard
            title="Produits paramédicaux"
            bgColor="#fef3c7"
            hoverBgColor="#d4b839"
            icon={<Thermometer style={styles.iconTeal} />}
          />
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ title, bgColor, hoverBgColor, icon }) {
  const [isHovered, setIsHovered] = useState(false);

  // Function to clone the icon and apply hover styles
  const getIconWithHoverStyles = () => {
    const iconElement = icon;
    const iconStyle = iconElement.props.style || {};
    
    return {
      ...iconElement,
      props: {
        ...iconElement.props,
        style: {
          ...iconStyle,
          color: isHovered ? 'white' : iconStyle.color
        }
      }
    };
  };

  return (
    <div 
      style={{
        ...styles.card, 
        backgroundColor: isHovered ? hoverBgColor : bgColor,
        color: isHovered ? 'white' : '#111827'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{
        ...styles.cardTitle,
        color: isHovered ? 'white' : '#111827'
      }}>
        {title}
      </h3>
      <div style={styles.iconWrapper}>
        {getIconWithHoverStyles()}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'white',
    paddingTop: '6rem',
    paddingBottom: '6rem',
  },
  wrapper: {
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {},
  title: {
    fontSize: '3.5rem',
    fontWeight: '500',
    color: '#111827',
    marginBottom: '1rem',
    lineHeight: '40px',
  },
  button: {
    backgroundColor: '#75BF44',
    color: 'white',
    fontWeight: '600',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingTop: '1.75rem',
    paddingBottom: '1.75rem',
    // borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  gridTop: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
    marginBottom: '2.5rem',
  },
  gridBottom: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
  },
  card: {
    borderRadius: '0.5rem',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    minHeight: '150px',
    transition: 'all 0.3s ease',
  },
  cardTitle: {
    fontSize: '2rem',
    fontWeight: '600',
    maxWidth: '250px',
    transition: 'color 0.3s ease',
  },
  iconWrapper: {
    flexShrink: 0,
  },
  iconGray: {
    width: '8rem',
    height: '8rem',
    color: '#9ca3af',
    transition: 'color 0.3s ease',
  },
  iconPink: {
    width: '8rem',
    height: '8rem',
    color: '#fbcfe8',
    transition: 'color 0.3s ease',
  },
  iconAmber: {
    width: '8rem',
    height: '8rem',
    color: '#fcd34d',
    transition: 'color 0.3s ease',
  },
  iconBlue: {
    width: '8rem',
    height: '8rem',
    color: '#bfdbfe',
    transition: 'color 0.3s ease',
  },
  iconTeal: {
    width: '8rem',
    height: '8rem',
    color: '#5eead4',
    transition: 'color 0.3s ease',
  },
};

const css = `
  @media (max-width: 768px) {
    #root > div {
    }
    h1 {
      font-size: 1.875rem;
    }
    h3 {
      font-size: 1.125rem;
    }
    [data-grid="top"] {
      grid-template-columns: 1fr;
    }
    [data-grid="bottom"] {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 1024px) {
    #root > div {
    }
  }

  button:hover {
    background-color: #000000 !important;
  }

  div[style*="borderRadius"] {
    transition: all 0.3s ease;
  }

  div[style*="borderRadius"]:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export default Categories;