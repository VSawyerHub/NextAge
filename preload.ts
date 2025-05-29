import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('navigation', {
    navigate: (route: string) => ipcRenderer.send('navigate', route),
});

contextBridge.exposeInMainWorld('auth', {
    login: (credentials: { username: string; password: string }) =>
        ipcRenderer.invoke('login', credentials),
});