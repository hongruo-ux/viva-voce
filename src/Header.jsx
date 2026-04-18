import { useState } from 'react'
import './Header.css'

const megaMenuData = {
  "What's New": {
    categories: [
      { title: "WHAT ARE YOU LOOKING FOR?", items: ["Going-Out Edit","Modern Workwear","Spring Arrivals","The Capsule Edit","Under $100"] },
      { title: "OUR EDITS",                 items: ["Clothing Staples","Designer Boutique","Editors' Picks","Fashion Finds Under $200"] },
      { title: "NOW TRENDING",              items: ["Iconic Minimalism","Pastel Palette","Primary Colors","Sheer Dressing","Relaxed Tailoring"] },
    ],
    featured: { title: "Most Hearted" },
  },
  Summer: {
    categories: [
      { title: "SUMMER ESSENTIALS", items: ["All Summer","Resort Wear","Swimwear","Cover-Ups","Beach Bags","Sun Protection"] },
      { title: "BY DESTINATION",    items: ["Tropical Getaway","European Summer","Beach Vacation","City Escape","Mountain Weekend"] },
      { title: "SHOP BY STYLE",     items: ["Bohemian","Minimalist","Luxe Resort","Sporty Chic","Vintage-Inspired"] },
    ],
    featured: { title: "Resort Ready" },
  },
  Clothing: {
    categories: [
      { title: "CLOTHING",   items: ["All Clothing","Blazers","Coats & Jackets","Jeans","Jumpsuits & Rompers","Knitwear","Lingerie & Bodysuits","Blouses","Tops","Cardigans"] },
      { title: "",           items: ["Leather Jackets","Trench Coats","Trousers","Straight Leg Jeans","Skirts","Pencil Skirts","Shorts","Suits","Matching Sets"] },
      { title: "ESSENTIALS", items: ["Swimwear","Sport","Lingerie","Shapewear","Sleepwear","Loungewear"] },
    ],
    featured: { title: "Spring Essentials" },
  },
  Dresses: {
    categories: [
      { title: "SHOP BY STYLE",    items: ["All Dresses","Midi Dresses","Maxi Dresses","Mini Dresses","Shirt Dresses","Wrap Dresses","Slip Dresses","Bodycon Dresses"] },
      { title: "SHOP BY OCCASION", items: ["Casual","Work","Evening","Wedding Guest","Vacation","Brunch"] },
      { title: "FEATURED",         items: ["Best Sellers","New In","Designer Dresses","Under $200","Under $500"] },
    ],
    featured: { title: "Dress Edit" },
  },
  Brands: {
    categories: [
      { title: "LUXURY",       items: ["The Row","Bottega Veneta","Celine","Loro Piana","Brunello Cucinelli","Valentino","Loewe"] },
      { title: "CONTEMPORARY", items: ["Toteme","Jacquemus","A.P.C.","Sandro","Maje","AMI Paris","Isabel Marant","Acne Studios"] },
      { title: "SUSTAINABLE",  items: ["Stella McCartney","Reformation","Eileen Fisher","Nanushka","Veja","Ganni","Staud"] },
    ],
    featured: { title: "Brand Directory" },
  },
  Active: {
    categories: [
      { title: "ACTIVEWEAR",   items: ["All Activewear","Sports Bras","Leggings","Shorts","Tops","Jackets","Sets"] },
      { title: "BY ACTIVITY",  items: ["Running","Yoga","Gym","Tennis","Swimming","Hiking"] },
      { title: "BRANDS",       items: ["Lululemon","Alo Yoga","Sweaty Betty","Varley","Year of Ours","Vuori"] },
    ],
    featured: { title: "Active Edit" },
  },
  Shoes: {
    categories: [
      { title: "SHOP BY TYPE",   items: ["All Shoes","Heels","Boots","Trainers","Loafers","Sandals","Mules","Ballet Flats","Platforms"] },
      { title: "SHOP BY BRAND",  items: ["Manolo Blahnik","Jimmy Choo","Bottega Veneta","Toteme","The Row","Jacquemus","Gianvito Rossi"] },
      { title: "TRENDING NOW",   items: ["Ballet Flats","Western Boots","Kitten Heels","Chunky Trainers","Mule Sandals"] },
    ],
    featured: { title: "Shoe Edit" },
  },
  Bags: {
    categories: [
      { title: "SHOP BY TYPE",  items: ["All Bags","Tote Bags","Shoulder Bags","Crossbody Bags","Clutches","Mini Bags","Backpacks","Belt Bags"] },
      { title: "SHOP BY BRAND", items: ["Bottega Veneta","Jacquemus","Loewe","The Row","Celine","Polène","Mansur Gavriel","Staud"] },
      { title: "TRENDING",      items: ["The Woven Bag","Mini Bags","East-West Styles","Raffia","Leather Classics"] },
    ],
    featured: { title: "Bag Edit" },
  },
  Accessories: {
    categories: [
      { title: "JEWELLERY",   items: ["All Jewellery","Rings","Earrings","Necklaces","Bracelets","Fine Jewellery"] },
      { title: "ACCESSORIES", items: ["Sunglasses","Scarves","Belts","Hats","Hair Accessories","Wallets & Cardholders"] },
      { title: "BRANDS",      items: ["Bottega Veneta","The Row","Loewe","Sophie Buhai","Completedworks","Alighieri"] },
    ],
    featured: { title: "Accessories Edit" },
  },
  Beauty: {
    categories: [
      { title: "SKINCARE",  items: ["Moisturisers","Serums","Cleansers","SPF","Eye Care","Masks","Toners"] },
      { title: "MAKEUP",    items: ["Foundation","Blush","Lip","Eye","Bronzer","Primers","Setting Sprays"] },
      { title: "FRAGRANCE", items: ["Perfume","Eau de Toilette","Body Mist","Candles","Discovery Sets","Niche Brands"] },
    ],
    featured: { title: "Beauty Edit" },
  },
}

const editorialStories = [
  { category: "FASHION",   title: "Most Wanted",                                        time: "8 HRS AGO" },
  { category: "LIFESTYLE", title: "The Must-See Movies To Add To Your Watch List",      time: "8 HRS AGO" },
  { category: "FASHION",   title: "How To Master Off-Duty Style Like Zoë, Kendall & Co.", time: "16 APR '26" },
  { category: "BEAUTY",    title: "The Spring Skincare Edit You Need Right Now",         time: "15 APR '26" },
]

const navLinks = ["What's New","Summer","Brands","Clothing","Dresses","Active","Shoes","Bags","Accessories","Beauty","Editorial"]

export default function Header({ setPage }) {
  const [activeMenu, setActiveMenu] = useState(null)

  const pageMap = {
    "What's New":'plp', Summer:'plp', Brands:'brands', Clothing:'plp',
    Dresses:'plp', Active:'plp', Shoes:'plp', Bags:'plp',
    Accessories:'plp', Beauty:'plp', Editorial:'blog',
  }

  const handleNav = (label) => { setPage(pageMap[label] || 'plp'); setActiveMenu(null) }

  const menuData = activeMenu ? megaMenuData[activeMenu] : null
  const isEditorial = activeMenu === 'Editorial'
  const showMenu = activeMenu && (menuData || isEditorial)

  return (
    <header className="header" onMouseLeave={() => setActiveMenu(null)}>

      {/* Utility Bar */}
      <div className="utility-bar">
        <div className="utility-left">
          <button className="utility-btn"><span className="material-icons" style={{fontSize:15,verticalAlign:'middle'}}>language</span> EN</button>
          <button className="utility-btn">USD</button>
          <button className="utility-btn">Need Help?</button>
        </div>
        <button className="logo" onClick={() => { setPage('home'); setActiveMenu(null) }}>
          viva voce
        </button>
        <div className="utility-right">
          <span className="utility-shipping">FREE Shipping &amp; Returns.</span>
          <button className="utility-btn" onClick={() => setPage('account')}>Sign In / Register</button>
          <button className="icon-btn" onClick={() => setPage('account')} title="Wishlist">
            <span className="material-icons">favorite_border</span>
          </button>
          <div className="cart-wrap">
            <button className="icon-btn" onClick={() => setPage('cart')} title="Shopping Bag">
              <span className="material-icons">shopping_bag</span>
            </button>
            <span className="cart-count">3</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="main-nav">
        {navLinks.map(label => (
          <button
            key={label}
            className={`nav-link ${activeMenu === label ? 'active' : ''}`}
            onMouseEnter={() => setActiveMenu(label)}
            onClick={() => handleNav(label)}
          >
            {label.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Mega Menu */}
      {showMenu && (
        <div className="mega-menu">
          {isEditorial ? (
            <div className="mega-editorial">
              <div className="mega-ed-left">
                <div className="mega-ed-img wf-img" />
                <p className="mega-ed-headline">Your daily dose of style inspiration, Incredible Women and more</p>
                <button className="mega-ed-cta" onClick={() => handleNav('Editorial')}>Discover Editorial</button>
              </div>
              <div className="mega-ed-right">
                <div className="mega-stories-title">LATEST STORIES</div>
                {editorialStories.map((s,i) => (
                  <button key={i} className="mega-story" onClick={() => handleNav('Editorial')}>
                    <div className="mega-story-img wf-img" />
                    <div className="mega-story-body">
                      <div className="mega-story-cat">{s.category}</div>
                      <div className="mega-story-title">{s.title}</div>
                      <div className="mega-story-time">{s.time}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mega-standard">
              <div className="mega-cols">
                {menuData.categories.map((col,i) => (
                  <div key={i} className="mega-col">
                    {col.title && <div className="mega-col-title">{col.title}</div>}
                    {col.items.map(item => (
                      <button key={item} className="mega-link" onClick={() => handleNav(activeMenu)}>{item}</button>
                    ))}
                  </div>
                ))}
              </div>
              <div className="mega-featured">
                <div className="mega-featured-img wf-img" />
                <div className="mega-featured-label">{menuData.featured?.title}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
