import './Header.css'

export default function Header({ page, setPage }) {
  const links = [
    { label: 'Home',      page: 'home' },
    { label: 'Women',     page: 'plp' },
    { label: 'Men',       page: 'plp' },
    { label: 'New In',    page: 'plp' },
    { label: 'Brands',    page: 'brands' },
    { label: 'Sale',      page: 'plp' },
    { label: 'Editorial', page: 'blog' },
  ]

  return (
    <header className="header">
      <div className="header-announce">
        Free Shipping on Orders Over $150 · Use Code NEWSEASON25 · Shop Now
      </div>
      <div className="header-main">
        <div className="header-inner">
          <button className="logo" onClick={() => setPage('home')}>
            Viva Voce
          </button>
          <nav className="main-nav">
            {links.map(l => (
              <button
                key={l.label}
                className={`nav-link ${page === l.page && l.label !== 'Men' && l.label !== 'New In' && l.label !== 'Sale' ? 'active' : ''}`}
                onClick={() => setPage(l.page)}
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div className="header-actions">
            <button className="icon-btn" title="Search">
              <span className="material-icons">search</span>
            </button>
            <button className="icon-btn" onClick={() => setPage('account')} title="Account">
              <span className="material-icons">person_outline</span>
            </button>
            <button className="icon-btn cart-btn" onClick={() => setPage('cart')} title="Bag">
              <span className="material-icons">shopping_bag</span>
              <span className="cart-count">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
