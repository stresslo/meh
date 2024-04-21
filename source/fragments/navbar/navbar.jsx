import { NavLink } from 'react-router-dom'
import './navbar.css'
import swalert from '../../../utils/swalert'

const Navbar = () => {

    const showSidebar = () => {
        const path = location.pathname
        const sidebar = document.querySelector('.sidebar')
        const homepage = document.querySelector('.homepage')
        const page = document.querySelector('.page')
        sidebar.classList.add('show')
        path == '/' ? homepage.classList.add('blur') : page.classList.add('blur')
    }

    return (
        <div className='navbar'>
            <img className='nav-logo' src="/assets/Logo.png" alt="Navbar Logo" />
            <div className='nav-menu'>
                <NavLink className='navlink' to='/play'>MEH POP</NavLink>
                {/* <div className='navlink' onClick={() => swalert('Coming Soon!')}>MEH POP</div> */}
                <NavLink className='navlink' to='/p'>MERCHANDISE</NavLink>
                <NavLink className='navlink' to='/p'>ABOUT</NavLink>
                <NavLink className='navlink' to='/p'>INFO TOKEN</NavLink>
                <NavLink className='navlink' to='mailto:meh@mehguy.click'>CONTACT US</NavLink>
            </div>
            <div className='nav-mobile' onClick={() => showSidebar()}><div className='i fa-solid fa-bars fa-xl'/></div>
        </div>
    )
}

export default Navbar;