import { useState } from 'react'
import '../tokens.css'
import '../pages/pages.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomePage    from '../pages/HomePage'
import PLPPage     from '../pages/PLPPage'
import PDPPage     from '../pages/PDPPage'
import { BrandsPage, BlogPage, CartPage, AccountPage } from '../pages/PDPPage'

// Wrapper that gives every story a working Header + Footer + navigation
function PageWrapper({ initialPage }) {
  const [page, setPage] = useState(initialPage)
  const pages = { home: HomePage, plp: PLPPage, pdp: PDPPage, brands: BrandsPage, blog: BlogPage, cart: CartPage, account: AccountPage }
  const Page = pages[page] || HomePage
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header page={page} setPage={(p) => { setPage(p); window.scrollTo(0,0) }} />
      <main style={{ flex: 1 }}><Page setPage={(p) => { setPage(p); window.scrollTo(0,0) }} /></main>
      <Footer setPage={(p) => { setPage(p); window.scrollTo(0,0) }} />
    </div>
  )
}

export default {
  title: 'Viva Voce / Pages',
  parameters: { layout: 'fullscreen' },
}

export const Home        = () => <PageWrapper initialPage="home" />
export const PLP         = () => <PageWrapper initialPage="plp" />
export const PDP         = () => <PageWrapper initialPage="pdp" />
export const Brands      = () => <PageWrapper initialPage="brands" />
export const Blog        = () => <PageWrapper initialPage="blog" />
export const Cart        = () => <PageWrapper initialPage="cart" />
export const Account     = () => <PageWrapper initialPage="account" />
