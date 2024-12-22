/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBarEm = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='nav-logo'>
      <svg width="98" height="91" viewBox="0 0 98 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_ddd_69_2892)">
<rect x="4" width="89.3" height="82.4" rx="41.2" fill="white"/>
<rect x="4.5" y="0.5" width="88.3" height="81.4" rx="40.7" stroke="white"/>
<path d="M48.6 19.7V41.2L43.7 38.4C35 33.4 29.6 24.1 29.6 14H26V38.6C26 46.6 30.6 54 37.9 57.5L48.7 62.7V41.2L53.6 44C62.3 49 67.7 58.3 67.7 68.4H71.3V43.8C71.3 35.8 66.7 28.4 59.4 24.9L48.6 19.7Z" fill="black"/>
</g>
<defs>
<filter id="filter0_ddd_69_2892" x="0" y="0" width="97.3" height="90.3999" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_69_2892"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_69_2892" result="effect2_dropShadow_69_2892"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_69_2892" result="effect3_dropShadow_69_2892"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_69_2892" result="shape"/>
</filter>
</defs>
</svg>
</div>

        <div className="navbar-links">
            <Link to='/Dashboard' className='navbar-link'>Dashboard</Link>
          <Link to="/vacations" className="navbar-link">Vacations Management</Link>
          <Link to="/assignments" className="navbar-link">Assignments</Link>

        </div>          
        <Link to="/profile" className="navbar-link">
            <button className="profile">Profile</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBarEm;