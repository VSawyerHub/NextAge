import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick?: () => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  const coverUrl = game.cover?.url?.replace('t_thumb', 't_cover_big');
  const releaseDate = game.first_release_date 
    ? new Date(game.first_release_date * 1000).toLocaleDateString()
    : 'TBA';

  return (
    <div
      onClick={onClick}
      className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition cursor-pointer group"
    >
      <div className="aspect-[3/4] bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
        {coverUrl ? (
          <img
            src={`https:${coverUrl}`}
            alt={game.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">🎮</div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{game.name}</h3>
        <p className="text-sm text-white/60">{releaseDate}</p>
        {game.rating && (
          <div className="mt-2 flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm">{Math.round(game.rating)}</span>
          </div>
        )}
      </div>
    </div>
  );
};
