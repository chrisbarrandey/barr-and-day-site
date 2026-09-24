const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img
            src="/logo.png"
            alt="Barr & Day Coffee Co."
            className="site-footer__logo"
            width={40}
            height={40}
          />
          <p className="site-footer__tagline">Real coffee, at an everyday price.</p>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__heading">Explore</span>
          <a href="#menu">Menu</a>
          <a href="#location">Location</a>
          <a href="#events">Events</a>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__heading">Contact</span>
          <a href="mailto:chris@barranddaycoffee.com">chris@barranddaycoffee.com</a>
          <a href="tel:+19159772655">(915) 977-2655</a>
          <span className="site-footer__muted">Horizon City, TX</span>
        </div>

        <div className="site-footer__col">
          <span className="site-footer__heading">Follow</span>
          <a href="https://www.instagram.com/barranddaycoffee" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/barranddaycoffee" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.tiktok.com/@barranddaycoffee" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        © {YEAR} Barr &amp; Day Coffee Co. All rights reserved.
      </div>
    </footer>
  );
}
