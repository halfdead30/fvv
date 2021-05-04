import FooterAddress from "../footer-address/footer-address.component";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <FooterAddress />
        <ul className="footer-social">
          <li className="footer-social__link">
            <a
              href="https://www.facebook.com/fvvbarber/"
              className="footer-social__anchor"
            >
              Facebook
            </a>
          </li>
          <li className="footer-social__link">
            <a
              href="https://www.instagram.com/fvvbarbershop/"
              className="footer-social__anchor"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
