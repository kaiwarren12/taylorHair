import React from 'react'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        Reviews
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        Schedule with me!
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sign">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
