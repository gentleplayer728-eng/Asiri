// Import route components from React Router
import { Routes, Route } from 'react-router-dom'

// Import layout components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Import page-level components
import Home from './pages/Home/Home'

function App() {
  return (
    <>
     {/* African crosshatch pattern — subtle background texture */}
      <div className="african-pattern"></div>

      {/* Navbar sits outside Routes — shows on every page */}
      <Navbar />

      {/* Routes — content changes based on URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>

      {/* Footer sits outside Routes — shows on every page */}
      <Footer />
    </>
  )
}

export default App

