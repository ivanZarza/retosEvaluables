import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PrivateRoutes from './components/routes/PrivateRoutes';
import PublicRoutes from './components/routes/PublicRoutes';
import BooksPage from './pages/BooksPage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AddBook from './pages/AddBookPage';
import EditBook from './pages/EditBookPage';
import Logout from './pages/LogoutPage';
import NotFoundPage from './pages/NotFoundPage';

import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import DeleteBookPage from './pages/DeleteBookPage';



function App() {


  return <>
    <div className='flex min-h-screen flex-col justify-between'>
      <Header  />
      <main className='grow flex bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PrivateRoutes />} >
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/bookPage" element={<BooksPage />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/bookPage/books/:id_book" element={<EditBook />} />
            <Route path="/bookPage/books/delete/:id_book" element={<DeleteBookPage />} />
            <Route path="/editbook" element={<EditBook />} />
            <Route path="/logout" element={<Logout />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
          <Route element={<PublicRoutes />} >
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={< RegisterPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      style={{ width: "300px", marginTop: "130px" }}
      toastStyle={{ fontSize: "1.5rem", backgroundColor: "#fff", color: "#646cff" }}
    />
  </>
}

export default App
