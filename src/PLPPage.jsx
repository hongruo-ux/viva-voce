import './pages.css'

const products = [
  { brand: 'Jacquemus', name: 'La Robe Murano', price: '$595', badge: 'new' },
  { brand: 'Toteme', name: 'Strapless Midi Dress', price: '$485' },
  { brand: 'Sandro', name: 'Wrap Midi Dress', price: '$285', oldPrice: '$380', badge: 'sale' },
  { brand: 'A.P.C.', name: 'Cotton Midi Dress', price: '$320' },
  { brand: 'AMI Paris', name: 'Floral Slip Dress', price: '$340', badge: 'new' },
  { brand: 'Isabel Marant', name: 'Peasant Dress', price: '$565' },
  { brand: 'Sandro', name: 'Broderie Dress', price: '$252', oldPrice: '$420', badge: 'sale' },
  { brand: 'Jacquemus', name: 'La Robe Jean', price: '$475' },
  { brand: 'Toteme', name: 'Linen Shirt Dress', price: '$390' },
  { brand: 'A.P.C.', name: 'Striped Dress', price: '$295', badge: 'new' },
  { brand: 'Isabel Marant', name: 'Velvet Mini Dress', price: '$620' },
  { brand: 'AMI Paris', name: 'Pleated Midi', price: '$312', oldPrice: '$390', badge: 'sale' },
]

const filters = [
  { label: 'Category', options: [['Dresses',324],['Tops',289],['Trousers',201],['Skirts',167],['Outerwear',145]] },
  { label: 'Brand', options: [['Toteme',84],['Jacquemus',72],['A.P.C.',65],['Sandro',58],['AMI Paris',43]] },
  { label: 'Price', options: [['Under $100',198],['$100–$300',445],['$300–$600',312],['$600+',154]] },
]

export default function PLPPage({ setPage }) {
  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div className="breadcrumb">
        <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontFamily: 'var(--font)', fontSize: 12 }}>Home</button>
        <span>/</span><span>Women</span><span>/</span><span>All</span>
      </div>

      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700 }}>Women's Collection</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 6 }}>1,420 products from 200+ brands</p>
      </div>

      <div className="plp-layout">
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <div className="filter-header">
            <span>Filters</span>
            <button className="btn sm">Clear All</button>
          </div>
          {filters.map(f => (
            <div className="filter-group" key={f.label}>
              <button className="filter-group-title">{f.label} <span>▾</span></button>
              <div className="filter-group-body">
                {f.options.map(([label, count]) => (
                  <label className="filter-option" key={label}>
                    <input type="checkbox" style={{ width: 15, height: 15, accentColor: 'var(--text)' }} />
                    {label}
                    <span className="filter-count">{count}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Products */}
        <div>
          <div className="plp-toolbar">
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Showing 1–12 of <strong>1,420</strong></span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Sort:</span>
              <select style={{ width: 'auto', padding: '4px 8px', fontSize: 12 }}>
                <option>Relevance</option>
                <option>New In</option>
                <option>Price: Low–High</option>
                <option>Price: High–Low</option>
              </select>
            </div>
          </div>

          <div className="active-filters">
            <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Active:</span>
            {['Dresses','Jacquemus','S/L','$100–$300'].map(f => (
              <button key={f} className="active-filter">{f} ✕</button>
            ))}
          </div>

          <div className="grid-3" style={{ gap: 12 }}>
            {products.map((p, i) => (
              <button key={i} className="product-card" onClick={() => setPage('pdp')} style={{ textAlign: 'left', border: 'none', padding: 0, background: 'none', cursor: 'pointer' }}>
                <div className="product-card-img">
                  <div className="wf-img" style={{ aspectRatio: '3/4' }} />
                  {p.badge && <div className="product-card-badge"><span className={`badge ${p.badge}`}>{p.badge === 'new' ? 'New' : 'Sale'}</span></div>}
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

          <div className="pagination">
            {['‹','1','2','3','…','59','›'].map((p,i) => (
              <button key={i} className={`page-btn ${p==='1'?'active':''}`}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
