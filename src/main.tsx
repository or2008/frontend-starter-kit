import '@/styles/tailwind.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app';

const element = document.querySelector('#app');
if (!element) throw new Error('App.tsx - coundn\'t find element with id #app');

const root = createRoot(element);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
