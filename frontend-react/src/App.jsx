import './assets/css/style.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
    <div className="app-shell">
      <Navbar />
      <main className="flex-grow-1">
        <HomePage />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
