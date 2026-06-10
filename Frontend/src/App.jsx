import './App.css'
import Home from './pages/Home'
import Collections from './pages/Collections'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  const path = window.location.pathname

  if (path === '/collections') {
    return <Collections />
  }

  if (path.startsWith('/collections/')) {
    return <ProductDetails />
  }

  if (path === '/contact') {
    return <Contact />
  }

  if (path === '/about') {
    return <About />
  }

  if (path === '/gallery') {
    return <Gallery />
  }

  return <Home />
}

export default App
