import Header from './components/Header'
import BooksPage from './pages/BooksPage'
import Footer from './components/Footer'


function App() {


  return (

    <>
    <div className="flex flex-col justify-between h-screen w-dvw">
      <Header />
      <main>
        <BooksPage />
      </main>
      <Footer />
      </div>
    </>
  )
}

export default App
