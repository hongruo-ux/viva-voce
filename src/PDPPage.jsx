import { useState } from 'react'
import './pages.css'

export function PDPPage({ setPage }) {
  const [activeTab, setActiveTab] = useState('desc')
  const [activeSize, setActiveSize] = useState('S')
  const [qty, setQty] = useState(1)

  const tabs = [
    { id: 'desc', label: 'Description' },
    { id: 'details', label: 'Details & Care' },
    { id: 'delivery', label: 'Delivery & Returns' },
    { id: 'reviews', label: 'Reviews (47)' },
  ]

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div className="breadcrumb">
        <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontFamily: 'var(--font)', fontSize: 12 }}>Home</button>
        <span>/</span>
        <button onClick={() => setPage('plp')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontFamily: 'var(--font)', fontSize: 12 }}>Women</button>
        <span>/</span><span>La Robe Murano</span>
      </div>

      <div className="pdp-layout">
        {/* Gallery */}
        <div className="pdp-gallery">
          <div className="pdp-thumbs">
            {[0,1,2,3,4].map(i => (
              <button key={i} className={`pdp-thumb ${i===0?'active':''}`}>
                <div className="wf-img" style={{ width: '100%', height: '100%' }} />
              </button>
            ))}
          </div>
          <div className="pdp-main-img wf-img" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', flexDirection: 'column', gap: 6, zIndex: 2 }}>
              <button className="icon-btn" style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-full)', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-icons" style={{ fontSize: 18 }}>favorite_border</span>
              </button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="pdp-info">
          <div>
            <button className="pdp-brand" onClick={() => setPage('brands')}>JACQUEMUS</button>
            <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, marginTop: 8 }}>La Robe Murano<br/>Asymmetric Linen Dress</h1>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="pdp-price">$595</span>
              <span className="pdp-price-old">$750</span>
              <span className="badge sale">−20%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <span className="stars">★★★★☆</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'underline', cursor: 'pointer' }}>47 reviews</span>
            </div>
          </div>

          <hr className="divider" />

          {/* Size */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 10 }}>
              <span>Size: <strong>{activeSize}</strong></span>
              <span style={{ textDecoration: 'underline', cursor: 'pointer', color: 'var(--text-muted)' }}>Size Guide</span>
            </div>
            <div className="size-grid">
              {['XS','S','M','L','XL','34','36','38'].map(s => (
                <button key={s} className={`size-btn ${activeSize===s?'active':''} ${s==='XS'||s==='XL'?'oos':''}`} onClick={() => setActiveSize(s)}>{s}</button>
              ))}
            </div>
            <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 8 }}>⚠ Only 3 left in size S</p>
          </div>

          {/* Add to cart */}
          <div className="pdp-add-row">
            <div className="qty-ctrl">
              <button className="qty-btn" onClick={() => setQty(Math.max(1, qty-1))}>−</button>
              <div className="qty-val">{qty}</div>
              <button className="qty-btn" onClick={() => setQty(qty+1)}>+</button>
            </div>
            <button className="btn filled lg full" onClick={() => setPage('cart')}>Add to Bag — $595</button>
          </div>

          <button className="btn full">
            <span className="material-icons" style={{ fontSize: 16 }}>favorite_border</span>
            Save to Wishlist
          </button>

          <div className="pdp-usps">
            {['✓ Free shipping on orders over $150','✓ Free returns within 30 days','✓ Authenticity guaranteed','✓ Pay with Klarna · Afterpay · AMEX'].map(u => (
              <div key={u}>{u}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tab-bar" style={{ marginTop: 40 }}>
        {tabs.map(t => (
          <button key={t.id} className={`tab ${activeTab===t.id?'active':''}`} onClick={() => setActiveTab(t.id)}>{t.label}</button>
        ))}
      </div>
      <div style={{ padding: '24px 0', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 680 }}>
        {activeTab === 'desc' && <p>The La Robe Murano is a signature piece from Jacquemus' SS25 collection. Crafted from 100% washed linen, it features a draped asymmetric neckline and a relaxed midi silhouette. The adjustable waist tie creates a flattering fit that can be worn loose or belted.</p>}
        {activeTab === 'details' && <div><p><strong>Material:</strong> 100% Washed Linen</p><p><strong>Fit:</strong> Relaxed, Midi</p><p><strong>Country of Origin:</strong> France</p><p style={{marginTop:12}}>Care: Hand wash cold. Do not tumble dry. Iron on low.</p></div>}
        {activeTab === 'delivery' && <div><p><strong>Standard Shipping:</strong> 3–5 days · Free over $150</p><p><strong>Express:</strong> 1–2 days · $19.95</p><p style={{marginTop:12}}><strong>Returns:</strong> Free within 30 days.</p></div>}
        {activeTab === 'reviews' && <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {[{name:'Sophie M.',stars:'★★★★★',body:'Absolutely stunning. The linen is soft and drapes beautifully.'},{name:'Claire D.',stars:'★★★★☆',body:'Beautiful dress, fast shipping. Runs slightly small in the bust.'}].map(r => (
            <div key={r.name} style={{border:'1px solid var(--border)',borderRadius:'var(--r)',padding:18}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}><strong>{r.name}</strong><span className="stars" style={{fontSize:12}}>{r.stars}</span></div>
              <p style={{fontSize:13,color:'var(--text-muted)'}}>{r.body}</p>
            </div>
          ))}
        </div>}
      </div>
    </div>
  )
}

export function BrandsPage({ setPage }) {
  const brandGroups = {
    A: [['AMI Paris',143,'Contemporary'],['A.P.C.',210,'Minimalist'],['Acne Studios',186,'Scandinavian']],
    B: [['Balmain',95,'Luxury'],['Bottega Veneta',112,'Luxury'],['Burberry',134,'British']],
    J: [['Jacquemus',234,'French'],['JW Anderson',76,'Contemporary']],
    S: [['Sandro',198,'Contemporary'],['Stella McCartney',124,'Sustainable']],
    T: [['Toteme',178,'Minimalist'],['The Row',92,'Luxury']],
  }

  return (
    <div>
      <div className="brands-hero">
        <div className="container">
          <p style={{fontSize:11,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'.08em',marginBottom:8}}>Discover</p>
          <h1 style={{fontSize:36,fontWeight:700,marginBottom:16}}>All Brands</h1>
          <p style={{fontSize:13,color:'var(--text-muted)',maxWidth:480,margin:'0 auto 24px'}}>Over 200 carefully selected fashion brands.</p>
          <div className="alpha-nav">
            {['All','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W'].map(l => (
              <button key={l} className={`alpha-btn ${l==='All'?'active':''}`}>{l}</button>
            ))}
          </div>
          <div style={{display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap'}}>
            {['All','Luxury','Contemporary','Sustainable','Emerging'].map(t => (
              <span key={t} className={`tag ${t==='All'?'active':''}`} style={{cursor:'pointer'}}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{paddingBottom:56}}>
        {Object.entries(brandGroups).map(([letter, brands]) => (
          <div key={letter} style={{marginTop:36}}>
            <div style={{fontSize:28,fontWeight:700,borderBottom:'1px solid var(--border)',paddingBottom:10,marginBottom:18}}>{letter}</div>
            <div className="brand-list-grid">
              {brands.map(([name, count, tag]) => (
                <button key={name} className="brand-list-card" onClick={() => setPage('plp')}>
                  <div className="wf-img" style={{width:100,height:32,borderRadius:'var(--r-sm)'}} />
                  <div style={{fontSize:13,fontWeight:700}}>{name}</div>
                  <div style={{fontSize:11,color:'var(--text-muted)'}}>{count} products</div>
                  <span className="tag">{tag}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BlogPage({ setPage }) {
  const posts = [
    {cat:'Style Guide',title:'How to Build a Capsule Wardrobe for Spring 2025',excerpt:'Ten essential pieces that will take you from work to weekend.',date:'Apr 8',read:'5 min'},
    {cat:'Brand Spotlight',title:'Inside Jacquemus: Sun, Sea and Linen',excerpt:'Simon Porte Jacquemus has built more than a brand — he\'s built a feeling.',date:'Apr 5',read:'4 min'},
    {cat:'How To Wear',title:'5 Ways to Wear a Blazer This Season',excerpt:'From casual to boardroom — every occasion covered.',date:'Apr 1',read:'3 min'},
    {cat:'Sustainability',title:'Our 2025 Sustainability Report',excerpt:'An honest look at our environmental footprint and initiatives.',date:'Mar 28',read:'10 min'},
    {cat:'Trend Report',title:'The New Minimalism: Clean Lines for a New Era',excerpt:'Fashion is returning to a refined, considered approach.',date:'Mar 22',read:'6 min'},
  ]

  return (
    <div className="container" style={{paddingTop:24}}>
      <div style={{padding:'32px 0 24px'}}>
        <p style={{fontSize:11,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'.08em',marginBottom:8}}>ARC. Journal</p>
        <h1 style={{fontSize:36,fontWeight:700}}>Editorial</h1>
      </div>
      <div className="tab-bar" style={{marginBottom:28}}>
        {['All','Style Guide','Brand Spotlight','Trend Report','How To Wear','Sustainability'].map(t => (
          <button key={t} className={`tab ${t==='All'?'active':''}`}>{t}</button>
        ))}
      </div>

      <div className="blog-layout">
        <div>
          <button className="blog-featured">
            <div className="blog-featured-img wf-img" style={{height:380,position:'relative'}}>
              <div className="blog-featured-meta">
                <div style={{fontSize:10,color:'#aaa',textTransform:'uppercase',letterSpacing:'.08em',fontWeight:700,marginBottom:4}}>Trend Report</div>
                <div style={{fontFamily:'var(--font)',fontSize:22,fontWeight:700,lineHeight:1.3}}>The Return of Quiet Luxury: Why Less is the New More for SS25</div>
                <div style={{fontSize:11,color:'#aaa',marginTop:8}}>Apr 12, 2025 · 8 min read · By Amélie Fontaine</div>
              </div>
            </div>
          </button>

          {posts.map((p,i) => (
            <button key={i} className="blog-card">
              <div className="blog-card-img wf-img" />
              <div className="blog-card-body">
                <div className="blog-cat">{p.cat}</div>
                <div className="blog-title">{p.title}</div>
                <div className="blog-excerpt">{p.excerpt}</div>
                <div className="blog-meta">{p.date} · {p.read} read</div>
              </div>
            </button>
          ))}
        </div>

        <aside>
          <div className="sidebar-widget">
            <div className="widget-title">Categories</div>
            <div className="widget-body">
              {[['Style Guide',18],['Brand Spotlight',14],['Trend Report',11],['How To Wear',9]].map(([c,n]) => (
                <div key={c} style={{display:'flex',justifyContent:'space-between',fontSize:12,padding:'6px 0',borderBottom:'1px solid var(--border)',cursor:'pointer'}}>{c}<span style={{color:'var(--text-muted)'}}>{n}</span></div>
              ))}
            </div>
          </div>
          <div className="sidebar-widget">
            <div className="widget-title">Newsletter</div>
            <div className="widget-body">
              <p style={{fontSize:12,color:'var(--text-muted)',marginBottom:10}}>Weekly editorial in your inbox.</p>
              <input placeholder="your@email.com" style={{marginBottom:8}} />
              <button className="btn filled full">Subscribe</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export function CartPage({ setPage }) {
  const items = [
    {brand:'Jacquemus',name:'La Robe Murano Asymmetric Linen Dress',meta:'Size: S · Natural Linen',price:'$595',old:'$750',disc:'−20%'},
    {brand:'A.P.C.',name:'Wool Blazer — Marine',meta:'Size: M · Marine',price:'$434',old:'$620',disc:'−30%'},
    {brand:'Jacquemus',name:'Le Bambino Small Leather Bag',meta:'Colour: Brown',price:'$595'},
  ]

  return (
    <div className="container" style={{paddingTop:24}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24}}>
        <h1 style={{fontSize:28,fontWeight:700}}>Your Bag <span style={{fontSize:16,color:'var(--text-muted)',fontWeight:400}}>(3 items)</span></h1>
        <button className="btn sm" onClick={() => setPage('plp')}>← Continue Shopping</button>
      </div>

      <div className="checkout-steps" style={{marginBottom:28}}>
        <div className="step-item active">1. Bag</div>
        <div className="step-arrow active" />
        <div className="step-item">2. Checkout</div>
        <div className="step-arrow idle" />
        <div className="step-item">3. Payment</div>
        <div className="step-arrow idle" />
        <div className="step-item">4. Confirm</div>
      </div>

      <div className="cart-layout">
        <div>
          {items.map((item, i) => (
            <div key={i} className="cart-item">
              <div className="cart-item-img wf-img" />
              <div>
                <div style={{fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'.08em',color:'var(--text-muted)',marginBottom:3}}>{item.brand}</div>
                <div style={{fontSize:14,fontWeight:600,marginBottom:4}}>{item.name}</div>
                <div style={{fontSize:12,color:'var(--text-muted)'}}>{item.meta}</div>
                <div style={{display:'flex',alignItems:'center',gap:8,marginTop:10}}>
                  <div className="qty-ctrl" style={{height:36}}>
                    <button className="qty-btn" style={{height:36}}>−</button>
                    <div className="qty-val" style={{height:36,minWidth:32}}>1</div>
                    <button className="qty-btn" style={{height:36}}>+</button>
                  </div>
                  <button className="btn sm">Remove</button>
                </div>
              </div>
              <div style={{textAlign:'right'}}>
                {item.old && <div style={{fontSize:12,textDecoration:'line-through',color:'var(--text-muted)'}}>{item.old}</div>}
                <div style={{fontSize:16,fontWeight:700}}>{item.price}</div>
                {item.disc && <span className="badge sale">{item.disc}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <div style={{fontSize:14,fontWeight:700,marginBottom:18}}>Order Summary</div>
          <div className="summary-row"><span>Subtotal (3 items)</span><span>$1,624</span></div>
          <div className="summary-row"><span>Discount</span><span style={{color:'#43a047'}}>−$162</span></div>
          <div className="summary-row"><span>Shipping</span><span style={{color:'var(--text-muted)'}}>Free</span></div>
          <div className="summary-row total"><span>Total</span><span>$1,462</span></div>
          <div style={{display:'flex',gap:8,margin:'18px 0'}}>
            <input placeholder="Promo code" style={{flex:1}} />
            <button className="btn sm">Apply</button>
          </div>
          <button className="btn filled lg full">Proceed to Checkout →</button>
          <div style={{textAlign:'center',fontSize:11,color:'var(--text-muted)',marginTop:10}}>🔒 Secure checkout · SSL encrypted</div>
        </div>
      </div>
    </div>
  )
}

export function AccountPage({ setPage }) {
  const [activePanel, setActivePanel] = useState('orders')

  const navItems = [
    {id:'orders',icon:'inventory_2',label:'My Orders'},
    {id:'wishlist',icon:'favorite_border',label:'Wishlist'},
    {id:'addresses',icon:'location_on',label:'Addresses'},
    {id:'profile',icon:'person_outline',label:'Profile'},
    {id:'payment',icon:'credit_card',label:'Payment Methods'},
    {id:'loyalty',icon:'star_outline',label:'Loyalty Points'},
    {id:'prefs',icon:'settings',label:'Preferences'},
  ]

  const orders = [
    {id:'#VV-2025-0412',items:'3 items · $1,624',date:'Apr 10, 2025',status:'shipped'},
    {id:'#VV-2025-0389',items:'1 item · $485',date:'Mar 28, 2025',status:'delivered'},
    {id:'#VV-2025-0301',items:'2 items · $870',date:'Feb 14, 2025',status:'delivered'},
  ]

  return (
    <div className="container" style={{paddingTop:24}}>
      <div className="breadcrumb"><span>Home</span><span>/</span><span>My Account</span></div>
      <div className="account-layout" style={{marginTop:16}}>
        <aside className="account-sidebar">
          <div style={{padding:22,borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:48,height:48,background:'var(--placeholder)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>👤</div>
            <div>
              <div style={{fontSize:13,fontWeight:700}}>Sophie Martin</div>
              <div style={{fontSize:11,color:'var(--text-muted)'}}>Member since 2022</div>
            </div>
          </div>
          {navItems.map(n => (
            <button key={n.id} className={`account-nav-item ${activePanel===n.id?'active':''}`} onClick={() => setActivePanel(n.id)}>
              <span className="material-icons" style={{fontSize:18}}>{n.icon}</span>
              {n.label}
            </button>
          ))}
          <button className="account-nav-item" style={{borderTop:'1px solid var(--border)'}}>
            <span className="material-icons" style={{fontSize:18}}>logout</span>
            Sign Out
          </button>
        </aside>

        <div>
          {activePanel === 'orders' && (
            <div className="account-section">
              <div className="account-section-head">
                <div className="account-section-title">Order History</div>
                <span className="tag">12 orders</span>
              </div>
              <div>
                {orders.map(o => (
                  <div key={o.id} className="order-row">
                    <div><div style={{fontWeight:700}}>{o.id}</div><div style={{fontSize:11,color:'var(--text-muted)'}}>{o.items}</div></div>
                    <span style={{fontSize:11,color:'var(--text-muted)'}}>{o.date}</span>
                    <span className={`order-status ${o.status==='delivered'?'status-delivered':'status-shipped'}`}>{o.status}</span>
                    <button className="btn sm">View</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activePanel === 'profile' && (
            <div className="account-section">
              <div className="account-section-head"><div className="account-section-title">Personal Details</div></div>
              <div className="account-section-body">
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}}>
                  <div><div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--text-muted)',marginBottom:6}}>First Name</div><input defaultValue="Sophie" /></div>
                  <div><div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--text-muted)',marginBottom:6}}>Last Name</div><input defaultValue="Martin" /></div>
                  <div><div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--text-muted)',marginBottom:6}}>Email</div><input defaultValue="sophie@email.com" /></div>
                  <div><div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--text-muted)',marginBottom:6}}>Phone</div><input defaultValue="+33 6 12 34 56 78" /></div>
                </div>
                <button className="btn filled">Save Changes</button>
              </div>
            </div>
          )}

          {activePanel === 'loyalty' && (
            <div className="account-section">
              <div className="account-section-head"><div className="account-section-title">Viva Voce Rewards</div></div>
              <div className="account-section-body">
                <div style={{border:'1px solid var(--border)',borderRadius:'var(--r-lg)',background:'var(--bg-soft)',padding:28,display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
                  <div>
                    <div style={{fontSize:11,textTransform:'uppercase',letterSpacing:'.1em',color:'var(--text-muted)',marginBottom:4}}>Your Points</div>
                    <div style={{fontSize:40,fontWeight:700}}>3,240 pts</div>
                    <div style={{fontSize:12,color:'var(--text-muted)',marginTop:4}}>≈ $32.40 in rewards</div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    <span className="badge" style={{fontSize:12,padding:'6px 12px'}}>Gold Member</span>
                    <div style={{fontSize:11,color:'var(--text-muted)',marginTop:8}}>1,760 pts to Platinum</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!['orders','profile','loyalty'].includes(activePanel) && (
            <div className="account-section">
              <div className="account-section-head"><div className="account-section-title">{navItems.find(n=>n.id===activePanel)?.label}</div></div>
              <div className="account-section-body">
                <p style={{color:'var(--text-muted)',fontSize:13}}>Content for {navItems.find(n=>n.id===activePanel)?.label} goes here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PDPPage
