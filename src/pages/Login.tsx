import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authService } from '../services/api';

export const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const data = await authService.login(email, password);
        login(data.user, data.accessToken, data.refreshToken);
        navigate('/library');
      } else {
        await authService.register(username, email, password);
        setIsLogin(true);
        setError('Account created! Please login.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20">
        <h1 className="text-4xl font-bold text-center mb-2">NextAge</h1>
        <p className="text-center text-white/70 mb-8">Your Game Library</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none"
              required
            />
          </div>

          {error && (
            <div className={`text-sm p-3 rounded-lg ${error.includes('created') ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? 'Loading...' : isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setError('');
          }}
          className="w-full mt-4 text-sm text-white/70 hover:text-white"
        >
          {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};
