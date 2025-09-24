import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul className="menu flex gap-4">
        <li>
          <Link to="/" className="text-gray-900 dark:text-white hover:text-yellow-400 dark:hover:text-yellow-300">Home</Link>
        </li>
        <li>
          <Link to="/Products" className="text-gray-900 dark:text-white hover:text-yellow-400 dark:hover:text-yellow-300">Products</Link>
        </li>
        <li>
          <Link to="/Contact" className="text-gray-900 dark:text-white hover:text-yellow-400 dark:hover:text-yellow-300">Contact</Link>
        </li>
        <li>
          <Link to="/About" className="text-gray-900 dark:text-white hover:text-yellow-400 dark:hover:text-yellow-300">About</Link>
        </li>
      </ul>
    </nav>
  );
}
