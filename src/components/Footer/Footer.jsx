import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white p-6">
      <div className="footer-content">
        <p>&copy; 2024 LP</p>

        <div className='logofooter'>
          <img src="/logo.png" alt="Logo" />
        </div>

        <ul className="footer-links">
          <li><a href="#about" className="hover:text-gray-500 dark:hover:text-gray-300">Sobre Nosotros</a></li>
          <li><a href="#services" className="hover:text-gray-500 dark:hover:text-gray-300">Servicios</a></li>
          <li><a href="#services" className="hover:text-gray-500 dark:hover:text-gray-300">Seguridad de la Empresa</a></li>
          <li><a href="#contact" className="hover:text-gray-500 dark:hover:text-gray-300">Más información</a></li>
        </ul>

        <div className="footer-section">
          <h3 className="text-gray-900 dark:text-white">Métodos de Pago</h3>
          <div className="payment-methods">
            <img src="../../../Public/visa.png" alt="Visa" className="payment-icon" />
            <img src="../../../Public/card.png" alt="MasterCard" className="payment-icon" />
            <img src="../../../Public/paypal.png" alt="PayPal" className="payment-icon" />
            <img src="../../../Public/apple-pay.png" alt="Apple Pay" className="payment-icon" />
          </div>
        </div>

        <div className="footer-section">
          <h3 className="text-gray-900 dark:text-white">Contacto</h3>
          <p className="text-gray-900 dark:text-white">Email: contactolp@gmail.com</p>
          <p className="text-gray-900 dark:text-white">Teléfono: +56 9 1122 3344</p>  
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link text-gray-900 dark:text-white hover:text-yellow-400 dark:hover:text-yellow-300">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link text-gray-900 dark:text-white hover:text-yellow-400 dark:hover:text-yellow-300">X</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link text-gray-900 dark:text-white hover:text-yellow-400 dark:hover:text-yellow-300">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
