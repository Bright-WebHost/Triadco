import { Heart, Eye, Award, CheckCircle2, Target, Users, Globe, TrendingUp, Shield, Lightbulb, Leaf } from 'lucide-react';

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }

  @keyframes blob {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .app-container {
    min-height: 80vh;
    background: linear-gradient(to bottom right, #f9fafb, #ffffff, #f3f4f6);
    position: relative;
    overflow: hidden;
  }

  .blob-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    animation: blob 7s infinite;
  }

  .blob-1 {
    top: -50%;
    left: -25%;
    width: 384px;
    height: 384px;
    background: radial-gradient(circle, rgba(74, 222, 128, 0.4), transparent);
  }

  .blob-2 {
    bottom: -50%;
    right: -25%;
    width: 384px;
    height: 384px;
    background: radial-gradient(circle, rgba(209, 213, 219, 0.4), transparent);
    animation-delay: 2s;
  }

  .content-wrapper {
    position: relative;
    z-index: 10;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  .header {
    text-align: center;
    margin-bottom: 48px;
    animation: fade-in 1s ease-out;
  }

  .header h1 {
    font-size: 36px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 12px;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    .header h1 {
      font-size: 48px;
    }
  }

  .header h1 span {
    color: #16a34a;
  }

  .header-line {
    width: 80px;
    height: 6px;
    background: linear-gradient(to right, #22c55e, #16a34a);
    margin: 0 auto;
    border-radius: 9999px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 1280px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card {
    animation: slide-up 0.8s ease-out forwards;
    opacity: 0;
  }

  .card.delay-100 {
    animation-delay: 0.1s;
  }

  .card.delay-200 {
    animation-delay: 0.2s;
  }

  .card-inner {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(32px);
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    height: 100%;
    padding: 32px;
    transition: all 0.5s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    gap: 16px;
  }

  .card:hover .card-inner {
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    transform: translateY(-8px);
  }

  .card.mission .card-inner {
    border-color: rgba(34, 197, 94, 0.3);
  }

  .card.vision .card-inner {
    border-color: rgba(209, 213, 219, 0.3);
  }

  .card.values .card-inner {
    border-color: rgba(34, 197, 94, 0.3);
  }

  .card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 12px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .card:hover .card-icon {
    transform: scale(1.1);
  }

  .card-icon.mission-icon {
    background: linear-gradient(135deg, #22c55e, #16a34a);
  }

  .card-icon.vision-icon {
    background: linear-gradient(135deg, #374151, #1f2937);
  }

  .card-icon.values-icon {
    background: linear-gradient(135deg, #16a34a, #374151);
  }

  .card-icon svg {
    width: 28px;
    height: 28px;
    color: white;
  }

  .card-title {
    font-size: 24px;
    font-weight: 700;
    color: #1f2937;
  }

  .card-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .card-item {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    font-size: 14px;
    color: #374151;
    line-height: 1.5;
  }

  .card-item svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .card.mission .card-item svg {
    color: #16a34a;
  }

  .card.vision .card-item svg {
    color: #374151;
  }

  .card.values .card-item svg {
    color: #15803d;
  }
`;

export default function Mission() {
  return (
    <>
      <style>{styles}</style>
      <div className="app-container">
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <div className="content-wrapper">
          {/* <div className="header">
            <h1>Notre <span>Identité</span></h1>
            <div className="header-line"></div>
          </div> */}

          <div className="grid-container">
            <div className="card mission">
              <div className="card-inner">
                <div className="card-icon mission-icon">
                  <Target />
                </div>
                <h2 className="card-title">Mission</h2>
                <div className="card-items">
                  <div className="card-item">
                    <Heart />
                    <span>Fournir des équipements médicaux de haute qualité pour améliorer les soins de santé et la qualité de vie</span>
                  </div>
                  <div className="card-item">
                    <Globe />
                    <span>Garantir que les produits médicaux essentiels soient accessibles partout.
</span>
                  </div>
                  <div className="card-item">
                    <Users />
                    <span>Assurer un service à la clientèle de qualité supérieure grâce à des conseils et à une assistance d'experts.
</span>
                  </div>
                  <div className="card-item">
                    <Lightbulb />
                    <span>Contribuer à l'avancement des pratiques médicales en proposant des solutions innovantes et efficaces.

</span>
                  </div>
                  <div className="card-item">
                    <CheckCircle2 />
                    <span>Faire équipe avec les professionnels de la santé pour répondre à leurs besoins en matière d'équipement et de fournitures.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card vision delay-100">
              <div className="card-inner" style={{backgroundColor:'#acdb8c'}}>
                <div className="card-icon vision-icon">
                  <Eye />
                </div>
                <h2 className="card-title">Vision</h2>
                <div className="card-items">
                  <div className="card-item">
                    <Award />
                    <span>Établir la norme en matière d'équipement médical haut de gamme.</span>
                  </div>
                  <div className="card-item">
                    <Shield />
                    <span>Être un partenaire de confiance dans le domaine des soins de santé grâce à notre engagement en faveur de l'excellence.</span>
                  </div>
                  <div className="card-item">
                    <TrendingUp />
                    <span>Élargir notre champ d'action pour répondre aux besoins croissants de l'Afrique en matière d'approvisionnement médical.
</span>
                  </div>
                  <div className="card-item">
                    <CheckCircle2 />
                    <span>Augmenter les entrepôts pour des livraisons plus rapides et plus sûres.
</span>
                  </div>
                  <div className="card-item">
                    <Globe />
                    <span>Construire des réseaux de distribution mondiaux pour l'exportation de produits à long terme.

</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card values delay-200">
              <div className="card-inner" style={{backgroundColor:'#75BF44'}}>
                <div className="card-icon values-icon">
                  <Award />
                </div>
                <h2 className="card-title">Valeurs</h2>
                <div className="card-items">
                  <div className="card-item">
                    <Shield />
                    <span>Fournir des produits de qualité supérieure pour la sécurité et le bien-être des patients.
</span>
                  </div>
                  <div className="card-item">
                    <CheckCircle2 />
                    <span>Nous donnons la priorité à l'éthique et à la transparence vis-à-vis de nos clients.
</span>
                  </div>
                  <div className="card-item">
                    <Lightbulb />
                    <span>Engagée à faire progresser les soins de santé par l'innovation.
</span>
                  </div>
                  <div className="card-item">
                    <Leaf />
                    <span>Nous assumons notre responsabilité sociale en adoptant des pratiques durables et en contribuant à des causes sociales et environnementales.

</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
