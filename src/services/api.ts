import axios from 'axios';
import { AuthResponse, Game } from '../types';

const API_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const { data } = await api.post('/users/login', { email, password });
    return data;
  },

  register: async (username: string, email: string, password: string): Promise<{ message: string; userId: string }> => {
    const { data } = await api.post('/users/register', { username, email, password });
    return data;
  },
};

export const gamesService = {
  searchGames: async (query: string, limit = 20): Promise<Game[]> => {
    const { data } = await api.get(`/games/search`, { params: { query, limit } });
    return data;
  },

  getTrending: async (limit = 20): Promise<Game[]> => {
    const { data } = await api.get(`/games/popularity/combined`, { params: { limit } });
    return data;
  },

  getGamesByType: async (listType: string, limit = 30): Promise<Game[]> => {
    const { data } = await api.get(`/games/${listType}`, { params: { limit } });
    return data;
  },

  getGameById: async (id: number): Promise<Game> => {
    const { data } = await api.get(`/games/id/${id}`);
    return data;
  },

  getGameBySlug: async (slug: string): Promise<Game> => {
    const { data } = await api.get(`/games/slug/${slug}`);
    return data;
  },
};
