import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context/Context";

const Card = ({ name, username, id }) => {

  const { favorite, checkFavorite } = useGlobalContext();
  const isFavorite = checkFavorite(id);

  const [animateFavorite, setAnimateFavorite] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      setAnimateFavorite(true);
      setShowParticles(true);
      setTimeout(() => {
        setAnimateFavorite(false);
        setShowParticles(false);
      }, 600);
    }
    
    favorite(id);
  };

  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * 2 * Math.PI;
      const x = Math.cos(angle) * 30 + 'px';
      const y = Math.sin(angle) * 30 + 'px';
      particles.push(<span key={i} className="particle" style={{ '--x': x, '--y': y }}></span>);
    }
    return particles;
  };

  return (
    <div className="w-full max-w-sm bg-white dark:bg-zinc-950 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 dark:shadow-zinc-900">
      <div className="relative">
        <img
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
          src='/images/doctor.jpg'
          alt='Doctor'
        />
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 text-2xl transition-all duration-300 transform ${
            isFavorite ? 'text-yellow-500' : 'text-gray-300'
          } ${animateFavorite ? 'animate-pop' : ''}`}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        >
          <FontAwesomeIcon icon={faStar} />
          {showParticles && (
            <div className="absolute inset-0 flex items-center justify-center">
              {renderParticles()}
            </div>
          )}
        </button>
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-lg mb-1 text-center text-gray-800 dark:text-white">{name}</h2>
        <p className="text-sm text-center text-gray-500 dark:text-zinc-400">@{username}</p>
      </div>

      <div className="px-6 py-4">
        <Link
          to={`/dentist/${id}`}
          className="block w-full text-center py-2 border border-gray-300 dark:border-zinc-400 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-900 rounded-lg transition-all duration-300"
        >
          Ver más detalles
        </Link>
      </div>
    </div>
  );
};

export default Card;
