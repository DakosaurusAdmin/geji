import './style.css'

export default function Home() {
  return (
    <main className="">
      <header>
        <div className="logo">
            <h1>BrandLogo</h1>
        </div>
        <nav>
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Deals</a>
            <a href="#">Contact</a>
            <a href="#">Account</a>
        </nav>
        <div className="cart">
            <span>Cart (0)</span>
        </div>
    </header>
    <div className="search-container">
        <input type="text" placeholder="Search for products..."/>
    </div>
    <footer>
        <div className="customer-service">
            <a href="#">Contact Us</a>
            <a href="#">FAQs</a>
            <a href="#">Returns Policy</a>
        </div>
        <div className="company-info">
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
        </div>
        <div className="social-media">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
        </div>
        <div className="newsletter">
            <input type="email" placeholder="Subscribe to our newsletter"/>
            <button>Subscribe</button>
        </div>
    </footer>
    </main>
  );
}
