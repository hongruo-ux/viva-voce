import { useState } from 'react'
import './tokens.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage    from './pages/HomePage'
import PLPPage     from './pages/PLPPage'
import PDPPage     from './pages/PDPPage'
import BrandsPage  from './pages/BrandsPage'
import BlogPage    from './pages/BlogPage'
import CartPage    from './pages/CartPage'
import AccountPage from './pages/AccountPage'

const PAGES = {
  home:    HomePage,
  plp:     PLPPage,
  pdp:     PDPPage,
  brands:  BrandsPage,
  blog:    BlogPage,
  cart:    CartPage,
  account: AccountPage,
}

export default function App() {
  const [page, setPage] = useState('home')
  const PageComponent = PAGES[page] || HomePage

  // Scroll to top on page change
  const navigate = (p) => { setPage(p); window.scrollTo(0, 0) }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header page={page} setPage={navigate} />
      <main style={{ flex: 1 }}>
        <PageComponent setPage={navigate} />
      </main>
      <Footer setPage={navigate} />
    </div>
  )
}
