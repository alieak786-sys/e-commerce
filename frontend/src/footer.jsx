
const Footer = () => {
  return (
    <div className="footer">

      {/* Newsletter */}
      <div className="newsletter">
        <h2>Subscribe now & get 20% off</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="newsletter__form">
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer__content">
        <div className="footer__col">
          <h3>⬡ SHOPORA</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        </div>

        <div className="footer__col">
          <h4>COMPANY</h4>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>GET IN TOUCH</h4>
          <ul>
            <li>+1-000-000-0000</li>
            <li>shopora@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p>Copyright 2025 © Shopora.com - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer