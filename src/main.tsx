import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
);
