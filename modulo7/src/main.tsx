import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './contexts/UserProvider';
import BooksProvider from './contexts/BooksProvider';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <BooksProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </BooksProvider>
  </BrowserRouter>
)