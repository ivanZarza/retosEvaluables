import Header from './components/Header'
import BooksPage from './pages/BookList'
import Footer from './components/Footer'


function App() {


  return (

    <>
    <div className="flex flex-col justify-between h-screen w-dvw">
      <Header />
      <main className='grow '>
        <BooksPage />
      </main>
      <Footer />
      </div>
    </>
  )
}

export default App
