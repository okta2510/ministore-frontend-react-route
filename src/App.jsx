import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <Routes>
      <Route
        element={
          <Layout marqueeVariant="home" navbarVariant="home" showFooterLogo />
        }
      >
        <Route index element={<HomePage />} />
      </Route>

      <Route
        element={
          <Layout
            marqueeVariant="products"
            navbarVariant="catalog"
            showMobileNav
            showFooterLogo={false}
          />
        }
      >
        <Route path="products" element={<ProductsPage />} />
      </Route>

      <Route
        element={
          <Layout
            marqueeVariant="detail"
            navbarVariant="catalog"
            showSearch
            showMobileNav
            showFooterLogo={false}
          />
        }
      >
        <Route path="products/:id" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
