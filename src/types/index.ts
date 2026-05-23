export interface Game {
  id: number;
  name: string;
  slug: string;
  cover?: {
    id: number;
    url: string;
  };
  summary?: string;
  rating?: number;
  first_release_date?: number;
  genres?: Array<{ name: string; slug: string }>;
  platforms?: Array<{
    id: number;
    name: string;
    platform_logo?: { url: string };
  }>;
  screenshots?: Array<{ url: string }>;
  involved_companies?: Array<{
    company: {
      name: string;
      logo?: { url: string };
    };
  }>;
}

export interface User {
  id: string;
  username: string;
  email: string;
  name?: string;
  image?: string;
  role: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
