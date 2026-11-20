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
              href="https://github.com/vishal21-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vishalr11"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="LinkedIn Profile"
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
