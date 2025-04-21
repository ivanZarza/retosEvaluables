import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './contexts/UserProvider';
import BooksProvider from './contexts/BooksProvider';
import FavoriteProvider from './contexts/FavoriteProvider';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <FavoriteProvider>
    <BooksProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </BooksProvider>
    </FavoriteProvider>
  </BrowserRouter>
)