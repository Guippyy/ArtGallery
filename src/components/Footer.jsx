import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-mark">
        <span>devotee's Art Gallery</span>
      </div>
      <small>&copy; {year} &middot; Totus tuus.</small>
    </footer>
  );
}
