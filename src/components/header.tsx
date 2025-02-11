type HeaderProps = {
  logo: string;
  h1: string;
  buttonText: string;
};

export function Header({ logo, h1, buttonText }: HeaderProps) {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="Logo" />
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#how-to">HOW TO</a></li>
          <li><a href="#faq">FAQS</a></li>
          <li><a href="#contact" className="btn">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="hero-text">
        <h1>{h1}</h1>
        <button className="btn">{buttonText}</button>
      </div>
    </header>
  );
}
