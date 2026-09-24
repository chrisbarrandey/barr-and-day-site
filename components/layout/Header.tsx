export function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-header__brand" aria-label="Barr & Day Coffee Co. — Home">
        <img
          src="/logo.png"
          alt="Barr & Day Coffee Co."
          className="site-header__logo"
          width={40}
          height={40}
        />
      </a>
      <nav className="site-header__nav">
        <a href="#menu">Menu</a>
        <a href="#location">Location</a>
        <a href="#events">Events</a>
      </nav>
    </header>
  );
}
