const YEAR = new Date().getFullYear();

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M15.5 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2h3.3l-.5 3H12v7h-3v-7H7v-3h2v-2.3A4.2 4.2 0 0 1 13.5 5h2v3.5z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 4v10.2a3.3 3.3 0 1 1-3.3-3.3c.3 0 .6 0 .9.1" />
      <path d="M14 4c.3 2 1.8 3.6 3.8 3.9" />
    </svg>
  );
}

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
          <a
            href="https://www.instagram.com/barranddaycoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__social"
          >
            <InstagramIcon />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/barranddaycoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__social"
          >
            <FacebookIcon />
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@barranddaycoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__social"
          >
            <TikTokIcon />
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
