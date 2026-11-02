const Footer = () => {
  return (
    <footer className="site-footer" id="footer">
      <div className="content-container">
        <div className="footer-body">
          <p className="footer-connect">Connect with me</p>
          <a className="footer-email" href="mailto:thanhngocbao0304@gmail.com">
            thanhngocbao0304@gmail.com
            <span aria-hidden="true">↗</span>
          </a>

          <div className="footer-socials" aria-label="Contact links">
            <a href="tel:+8470471126">
              <span className="footer-social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M7.4 3.8 5.3 5.3c-.8.6-.9 1.7-.5 2.6 2 4.8 5.8 8.6 10.6 10.6.9.4 2 .3 2.6-.5l1.5-2.1-3.1-2.6-1.8 1.3a13.5 13.5 0 0 1-4.8-4.8l1.3-1.8-2.6-3.1Z" />
                </svg>
              </span>
              +84 704 711 126
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <span className="footer-social-icon footer-in-icon" aria-hidden="true">in</span>
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <span className="footer-social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7 0 0 .8-.3 2.8 1a9.8 9.8 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.4.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
                </svg>
              </span>
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Huynh Thanh Bao Ngoc</span>
          {/* <span>Made with curiosity &amp; code</span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
