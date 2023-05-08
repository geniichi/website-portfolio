import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? 'activeLink' : '';
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-0 bg-info" id="navBar-main">
        <a className="navbar-brand d-flex align-items-center justify-content-center" href="/">Nobody</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <div className={`d-flex nav-item ${isActive('/')}`} >
                <Link to="/" className="link text-dark">About Me</Link> &nbsp;
            </div>
            <div className={`d-flex nav-item ${isActive('/projects')}`}>
                <Link to="/projects" className="link text-dark">Projects</Link> &nbsp;
            </div>
            <div className={`d-flex nav-item ${isActive('/contact')}`}>
                <Link to="/contact" className="link text-dark">Contact Me</Link> &nbsp;
            </div>
            <div className={`d-flex nav-item ${isActive('/books')}`}>
              <Link to="/books" className="link text-dark">Books</Link>
            </div>
          </div>
          {/* {userVerify ? (
              <section id="profile-header-container" className="d-flex align-items-center justify-content-around">
                <div className="d-flex">
                  <p className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">Welcome</p>
                  <h6>{userEmail.slice(0,8)}</h6>
                </div>
                <a href="#" className="d-block link-dark text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <button onClick={userSignOut} className="btn btn-primary">Sign Out</button>
              </section>
            ) : (
              <div className="d-flex justify-content-around" id="authentication-container">
                <Link to="/login" className="btn btn-outline-info my-2 my-sm-0 shadow-none">Login</Link>
                <Link to="/signUp" className="btn btn-outline-light my-2 my-sm-0 shadow-none">Sign Up</Link>
              </div>
            )
          } */}
        </div>
      </nav>
  )
}

export default Navbar
