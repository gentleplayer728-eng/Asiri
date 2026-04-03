// Import route components from React Router
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Import layout components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Products from './pages/Products/Products'
import ProductDetail from './pages/ProductDetail/ProductDetail'

// Import page-level components
import Home from './pages/Home/Home'

function App() {
  // Scroll to top when the page changes
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
     {/* African crosshatch pattern — subtle background texture */}
      <div className="african-pattern"></div>

      {/* Navbar sits outside Routes — shows on every page */}
      <Navbar />

      {/* Routes — content changes based on URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>

      {/* Footer sits outside Routes — shows on every page */}
      <Footer />
    </>
  )
}

export default App

