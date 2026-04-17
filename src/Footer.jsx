import './Footer.css'

export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-grid container">
        <div>
          <div className="footer-brand">Viva Voce</div>
          <p className="footer-desc">A curated fashion marketplace connecting you with the world's most exciting brands.</p>
        </div>
        <div>
          <div className="footer-col-title">Shop</div>
          <button className="footer-link" onClick={() => setPage('plp')}>Women</button>
          <button className="footer-link" onClick={() => setPage('plp')}>Men</button>
          <button className="footer-link" onClick={() => setPage('plp')}>New In</button>
          <button className="footer-link" onClick={() => setPage('plp')}>Sale</button>
          <button className="footer-link" onClick={() => setPage('brands')}>Brands</button>
        </div>
        <div>
          <div className="footer-col-title">Info</div>
          <button className="footer-link">About Us</button>
          <button className="footer-link">Sustainability</button>
          <button className="footer-link" onClick={() => setPage('blog')}>Editorial</button>
          <button className="footer-link">Careers</button>
        </div>
        <div>
          <div className="footer-col-title">Help</div>
          <button className="footer-link">Shipping & Returns</button>
          <button className="footer-link">Size Guide</button>
          <button className="footer-link">Contact Us</button>
          <button className="footer-link" onClick={() => setPage('account')}>My Account</button>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2025 Viva Voce Fashion Marketplace</span>
        <span>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  )
}
