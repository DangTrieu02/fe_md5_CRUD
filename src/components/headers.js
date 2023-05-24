import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, navigate, useNavigate } from 'react-router-dom';
import './css/headerCss.css'
import Sidebar from './sidebar';

function Header(porps) {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    navigate('/')
  }


  return (
    <>
      <div className='nav-box'>
        <ul>
          <li><a onClick={() => { porps.setIsShow(!porps.isShow) }}>|||</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#"><Link to={"/create"}>Create</Link></a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Team</a></li>
          <li><a onClick={() => { logout()}}>Logout</a></li>
        </ul>
      </div>

    </>
  );
}

export default Header;