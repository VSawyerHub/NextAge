import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { gamesService } from '../services/api';
import { Game } from '../types';
import { GameCard } from '../components/GameCard';

export const Library: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'trending' | 'upcoming' | 'recent'>('trending');
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Game[]>([]);

  useEffect(() => {
    loadGames();
  }, [activeTab]);

  const loadGames = async () => {
    setLoading(true);
    try {
      let data: Game[];
      switch (activeTab) {
        case 'trending':
          data = await gamesService.getTrending(30);
          break;
        case 'upcoming':
          data = await gamesService.getGamesByType('upcoming', 30);
          break;
        case 'recent':
          data = await gamesService.getGamesByType('recentlyReleased', 30);
          break;
        default:
          data = [];
      }
      setGames(data);
    } catch (error) {
      console.error('Failed to load games:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const results = await gamesService.searchGames(searchQuery, 20);
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const displayGames = searchQuery ? searchResults : games;

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">NextAge</h1>
          
          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (!e.target.value) setSearchResults([]);
              }}
              placeholder="Search games..."
              className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none"
            />
          </form>

          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70">Welcome, {user?.username}</span>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-sm transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      {!searchQuery && (
        <div className="bg-black/10 border-b border-white/10 px-4">
          <div className="flex gap-2">
            {[
              { id: 'trending', label: '🔥 Trending' },
              { id: 'upcoming', label: '📅 Upcoming' },
              { id: 'recent', label: '🆕 Recently Released' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 font-medium transition ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-400 text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Games Grid */}
      <main className="flex-1 overflow-y-auto p-6">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-xl">Loading games...</div>
          </div>
        ) : displayGames.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-6xl mb-4">🎮</div>
              <p className="text-xl text-white/70">
                {searchQuery ? 'No games found' : 'No games available'}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {displayGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
