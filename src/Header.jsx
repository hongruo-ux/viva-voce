import { useState, useEffect, useRef } from 'react';
import './Header.css';

const NAV_ITEMS = [
  { label: "What's New", href: '/whats-new', megaMenu: null },
  { label: 'Summer', megaMenu: { cols: [
    { title: 'Shop by Category', links: ['Dresses','Tops','Shorts','Swimwear','Sandals'] },
    { title: 'Summer Edits', links: ['Resort Wear','Beach Essentials','Sun Dresses','Linen Collection'] },
    { title: 'Trending Now', links: ['Coastal Chic','Maximalist Prints','Sheer Layers','Bold Colour'] },
  ]}},
  { label: 'Brands', href: '/brands', megaMenu: null },
  { label: 'Clothing', megaMenu: { cols: [
    { title: 'Tops', links: ['Blouses','T-Shirts','Knitwear','Shirts','Bodysuits'] },
    { title: 'Bottoms', links: ['Trousers','Jeans','Skirts','Shorts','Leggings'] },
    { title: 'Outerwear', links: ['Coats','Jackets','Blazers','Gilets'] },
  ]}},
  { label: 'Dresses', megaMenu: { cols: [
    { title: 'Style', links: ['Midi','Maxi','Mini','Wrap','Slip'] },
    { title: 'Occasion', links: ['Party','Wedding Guest','Casual','Work'] },
    { title: 'Edit', links: ['New Arrivals','Under £100','Designer','Sustainable'] },
  ]}},
  { label: 'Shoes', megaMenu: { cols: [
    { title: 'Type', links: ['Heels','Flats','Boots','Sandals','Trainers'] },
    { title: 'Shop', links: ['New In','Sale','Designer','Under £50'] },
  ]}},
  { label: 'Bags', href: '/bags', megaMenu: null },
  { label: 'Accessories', href: '/accessories', megaMenu: null },
  { label: 'Beauty', href: '/beauty', megaMenu: null },
  { label: 'Editorial', href: '/editorial', megaMenu: null },
];

const SEARCH_RESULTS = [
  { name: 'Silk Slip Dress', price: '$285.00' },
  { name: 'Linen Blazer', price: '$390.00' },
  { name: 'Cashmere Crew Knit', price: '$420.00' },
  { name: 'Wide-Leg Trousers', price: '$175.00' },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [signinOpen, setSigninOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClick = e => { if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null); };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) setTimeout(() => searchInputRef.current.focus(), 50);
  }, [searchOpen]);

  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') { setOpenMenu(null); setSearchOpen(false); setSigninOpen(false); } };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (searchOpen || signinOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [searchOpen, signinOpen]);

  return (
    <>
      <header className="header">
        <div className="utility-bar">
          <div className="utility-left">
            <button className="utility-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg><span>Account</span></button>
            <button className="utility-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg><span>Menu</span></button>
          </div>
          <a href="/" className="utility-logo">Viva Voce</a>
          <div className="utility-right">
            <button className="icon-btn" aria-label="Search" onClick={() => { setSearchOpen(true); setSigninOpen(false); setOpenMenu(null); }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg></button>
            <button className="icon-btn" aria-label="Account" onClick={() => { setSigninOpen(s => !s); setSearchOpen(false); setOpenMenu(null); }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></button>
            <button className="icon-btn" aria-label="Cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><span className="cart-badge">2</span></button>
          </div>
        </div>
        <nav className="main-nav" ref={navRef}>
          {NAV_ITEMS.map(item => {
            if (!item.megaMenu) return <div key={item.label} className="nav-item"><a href={item.href} className={`nav-btn${item.label==="What's New"?' is-active':''}`}>{item.label}</a></div>;
            const isOpen = openMenu === item.label;
            return (<div key={item.label} className="nav-item">
              <button className="nav-btn" aria-expanded={isOpen} onClick={() => setOpenMenu(isOpen ? null : item.label)}>
                {item.label}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className={`mega-menu${isOpen?' is-open':''}`}>
                <div className="mega-menu-inner">
                  {item.megaMenu.cols.map(col => <div key={col.title} className="mega-col">
                    <div className="mega-col-title">{col.title}</div>
                    {col.links.map(l => <a key={l} href="#" className="mega-link">{l}</a>)}
                  </div>)}
                </div>
              </div>
            </div>);
          })}
        </nav>
      </header>

      <div className={`search-overlay${searchOpen?' is-open':''}`} role="dialog" aria-modal="true">
        <div className="search-mask" onClick={() => setSearchOpen(false)} />
        <div className="search-panel">
          <div className="search-input-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
            <input ref={searchInputRef} className="search-input" type="search" placeholder="Search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            <button className="search-close-btn" onClick={() => setSearchOpen(false)} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div className="search-results">
            <div className="search-results-label">Products</div>
            <div className="search-results-grid">
              {SEARCH_RESULTS.map(item => (
                <a key={item.name} href="#" className="search-result-card">
                  <div className="search-result-image" />
                  <div className="search-result-name">{item.name}</div>
                  <div className="search-result-price">{item.price}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`signin-overlay${signinOpen?' is-open':''}`} role="dialog" aria-modal="true">
        <div className="signin-mask" onClick={() => setSigninOpen(false)} />
        <div className="signin-panel">
          <div className="signin-panel-inner">
            <div className="signin-title">Account</div>
            <a href="/account/login" className="signin-btn-shop">Sign in to Viva Voce</a>
            <a href="/account/login/other" className="signin-btn-other">Other sign in options</a>
            <div className="signin-divider">
              <a href="/account/orders" className="signin-btn-secondary">Orders</a>
              <a href="/account/profile" className="signin-btn-secondary">Profile</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
