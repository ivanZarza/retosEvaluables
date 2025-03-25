import Header from './components/Header'
import BooksPage from './pages/BookPage'
import Footer from './components/Footer'


function App() {


  return <>
  <div className='flex min-h-screen flex-col justify-between'>
    <Header  />
    <main className='grow '>
      <BooksPage />
    </main>
    <Footer />
    </div>
  </>
}

export default App
