import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({balance}) => {
 
  return (
    <nav className="navbar-container"> 
      <Link to="/">Home</Link>
      <Link to="/operations">Operations</Link>
      <Link to="/breakdown">Breakdown</Link>
      <div className="balance">
       
      <div style={{ color: balance < 500 ? 'red' : 'green' }}>
        Balance: {balance}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
