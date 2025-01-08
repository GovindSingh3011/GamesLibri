import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import FetchGames from './components/FetchGames.jsx'
import FetchAllGames from './components/FetchAllGames.jsx'
import Category from './components/Category.jsx'
import Search from './components/Search.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/:genre" element={<FetchGames />} />
      <Route path="/search" element={<Search />} />
      <Route path="/allgames" element={<FetchAllGames />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)