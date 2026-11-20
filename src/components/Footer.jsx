export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container--wide">
        <div className="footer__inner">
          <p className="footer__copy">
            © {year} &nbsp;<strong>Vishal R</strong>. Designed and developed by Vishal R.
          </p>
          <div className="footer__links">
            <a
              href="https://github.com/vishalr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="GitHub (placeholder — update URL)"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vishalr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="LinkedIn (placeholder — update URL)"
            >
              LinkedIn
            </a>
            <a
              href="mailto:vishalyaschu@gmail.com"
              className="footer__link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
