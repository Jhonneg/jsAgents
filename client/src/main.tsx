import { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// biome-ignore lint/style/noNonNullAssertion: <mandatory by React>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
