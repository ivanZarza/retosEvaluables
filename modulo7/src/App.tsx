import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PrivateRoutes from './components/PrivateRoutes';
import PublicRoutes from './components/PublicRoutes';
import BooksPage from './pages/BooksPage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AddBook from './pages/AddBookPage';
import EditBook from './pages/EditBookPage';

import { Routes, Route } from "react-router-dom";



function App() {


  return <>
    <div className='flex min-h-screen flex-col justify-between'>
      <Header />
      <main className='grow '>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PrivateRoutes />} >
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/bookPage" element={<BooksPage />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/editbook" element={<EditBook />} />

          </Route>
          <Route element={<PublicRoutes />} >
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={< RegisterPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  </>
}

export default App
