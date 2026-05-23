import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('navigation', {
    navigate: (route: string) => ipcRenderer.send('navigate', route),
});

contextBridge.exposeInMainWorld('auth', {
    login: (credentials: { username: string; password: string }) =>
        ipcRenderer.invoke('login', credentials),
});

contextBridge.exposeInMainWorld('api', {
    fetchGames: () => ipcRenderer.invoke('fetch-games'),
    launchGame: (gameId: string) => ipcRenderer.send('launch-game', gameId),
});