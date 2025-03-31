import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainComponent from './components/mainComponent'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyCart from './components/myCart'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <div>
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<MainComponent />} />
              <Route path="/cart" element={<MyCart />} />

            </Routes>
          </div>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
