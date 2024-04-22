import { NavLink } from 'react-router-dom';
import css from './Header.module.css'
const Header = ()=>{
    return (
        <header>
        <nav>
          <ul  className={css.header}>
            <li>
              <NavLink className="header-link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="header-link" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="header-link" to="/contact">Contact</NavLink>
            </li>
          
          </ul>
        </nav>
        </header>
    )
}
export default Header;