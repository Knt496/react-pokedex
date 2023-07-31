import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <ul className="menu">
          <li>
            <Link to="/" className="menu-item">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="menu-item">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout;