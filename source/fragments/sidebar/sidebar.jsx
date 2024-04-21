import { NavLink, useNavigate } from "react-router-dom"
import swalert from "../../../utils/swalert"
import "./sidebar.css"

const Sidebar = () => {

    const hideSidebar = () => {
        const path = location.pathname
        const sidebar = document.querySelector('.sidebar')
        const homepage = document.querySelector('.homepage')
        const page = document.querySelector('.page')
        sidebar.classList.remove('show')
        path == '/' ? homepage.classList.remove('blur') : page.classList.remove('blur')
    }

    return (
        <div className="sidebar">
            <div className="side-logo">
                <img className='nav-logo' src="/assets/Logo.png" alt="Navbar Logo" />
                <div className="fa-solid fa-close fa-2xl" onClick={() => hideSidebar()}/>
            </div>
            <div className="side-menu">
                <NavLink className='sidelink' to='/play'>MEH POP</NavLink>
                {/* <div className='sidelink' onClick={() => navigate('/play')}>MEH POP</div> */}
                <NavLink className='sidelink' to='/p'>MERCHANDISE</NavLink>
                <NavLink className='sidelink' to='/p'>ABOUT</NavLink>
                <NavLink className='sidelink' to='/p'>INFO TOKEN</NavLink>
                <NavLink className='sidelink' to='mailto:meh@mehguy.click'>CONTACT US</NavLink>
            </div>
        </div>
    )
}

export default Sidebar