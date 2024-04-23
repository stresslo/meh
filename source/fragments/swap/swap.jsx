import React from 'react'

const Swap = () => {

    const hideSidebar = () => {
        const path = location.pathname
        const swap = document.querySelector('.swap')
        const homepage = document.querySelector('.homepage')
        const page = document.querySelector('.page')
        swap.classList.remove('show')
        path == '/' ? homepage.classList.remove('blur') : page.classList.remove('blur')
    }

    return (
        <div className='swap'>
            <div className="side-logo">
                <img className='nav-logo' src="/assets/Logo.png" alt="Navbar Logo" />
                <div className="fa-solid fa-close fa-2xl" onClick={() => hideSidebar()}/>
            </div>
            <div className='side-menu'>
            <iframe src="https://ociswap.com/widgets/swap?from=resource_rdx1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxradxrd&to=resource_rdx1t5rwvw6sylv69kj29dpgd9f5a352kxgc7gs08t0vahp03ztdxuwfn4&theme=oci&with_container&fix_from&fix_to" style={{border: 'none', borderRadius: "10px"}} height="500px" width="100%" />
            </div>
        </div>
    )
}

export default Swap