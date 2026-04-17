import './pages.css'

const products = [
  { brand: 'Toteme', name: 'Draped Silk Midi Dress', price: '$485', badge: 'new' },
  { brand: 'A.P.C.', name: 'Wool Blazer — Marine', price: '$434', oldPrice: '$620', badge: 'sale' },
  { brand: 'Sandro', name: 'Floral Print Blouse', price: '$265', badge: 'new' },
  { brand: 'Jacquemus', name: 'Le Bambino Bag', price: '$595' },
]

const categories = ['Tops', 'Dresses', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories']
const brands = ['Toteme', 'Jacquemus', 'A.P.C.', 'Sandro', 'AMI Paris', 'Marant']

export default function HomePage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <div className="hero-left">
          <span className="hero-eyebrow">Spring / Summer 2025 Collection</span>
          <h1 className="hero-title">Dress for<br/>the World<br/>You Want.</h1>
          <p className="hero-sub">Curated fashion from over 200 independent and luxury brands. Free returns. Worldwide shipping.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn filled lg" onClick={() => setPage('plp')}>Shop Women →</button>
            <button className="btn lg" onClick={() => setPage('plp')}>Shop Men →</button>
          </div>
        </div>
        <div className="hero-right wf-img" />
      </div>

      {/* Marquee */}
      <div className="marquee-bar">
        <div className="marquee-inner">
          {['Free Returns','200+ Brands','Sustainable Fashion','New Arrivals Daily','Authenticated Luxury','Free Shipping $150+',
            'Free Returns','200+ Brands','Sustainable Fashion','New Arrivals Daily','Authenticated Luxury','Free Shipping $150+'].map((t,i) => (
            <span key={i} className="marquee-item">{t} <span style={{opacity:.3}}>·</span></span>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Categories */}
        <div className="section">
          <div className="section-header">
            <div><div className="section-eyebrow">Browse</div><div className="section-title">Shop by Category</div></div>
          </div>
          <div className="grid-6">
            {categories.map(c => (
              <button key={c} className="category-card" onClick={() => setPage('plp')}>
                <div className="wf-img" style={{ aspectRatio: '1' }} />
                <div className="category-label">{c}</div>
              </button>
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        <div className="section">
          <div className="section-header">
            <div><div className="section-eyebrow">Just Dropped</div><div className="section-title">New Arrivals</div></div>
            <button className="btn sm" onClick={() => setPage('plp')}>View All →</button>
          </div>
          <div className="grid-4">
            {products.map((p, i) => (
              <button key={i} className="product-card" onClick={() => setPage('pdp')} style={{ textAlign: 'left', border: 'none', padding: 0, background: 'none' }}>
                <div className="product-card-img">
                  <div className="wf-img" style={{ aspectRatio: '3/4' }} />
                  {p.badge && <div className="product-card-badge"><span className={`badge ${p.badge}`}>{p.badge === 'new' ? 'New' : '−30%'}</span></div>}
                </div>
                <div className="product-card-info">
                  <div className="product-brand">{p.brand}</div>
                  <div className="product-name">{p.name}</div>
                  <div className="product-price">
                    {p.oldPrice && <span className="old">{p.oldPrice}</span>}
                    {p.price}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="section">
          <div className="promo-banner">
            <div className="wf-img" style={{ minHeight: 300 }} />
            <div className="promo-content">
              <span className="tag">Limited Time</span>
              <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15 }}>End of<br/>Season Sale</div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>Up to 50% off across all categories.</p>
              <button className="btn filled" onClick={() => setPage('plp')}>Shop Sale →</button>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="section">
          <div className="section-header">
            <div><div className="section-eyebrow">Partners</div><div className="section-title">Featured Brands</div></div>
            <button className="btn sm" onClick={() => setPage('brands')}>All Brands →</button>
          </div>
          <div className="brand-strip">
            {brands.map(b => (
              <button key={b} className="brand-strip-item" onClick={() => setPage('brands')}>
                <div className="brand-logo-wf">{b}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
