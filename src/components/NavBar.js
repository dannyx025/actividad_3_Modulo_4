import '../assets/css/NavBar.css'
import logo from '../assets/img/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ name, avatar }) {



    return (

        <header>


            {/* nav desktop  */}
            <nav className="nav-wrapper hide-on-med-and-down show-on-large">
                <span >

                    <img id="logo" src={logo} alt="logo" />

                    <span id="username"> ¡Hola {name}!</span>

                </span>

                <ul className="right">

                    <li className="pt-2">
                        <Link to='/'><i className="material-icons">home</i></Link>
                    </li>
                    <li className="pt-2">
                        <Link to='/about'><i className="material-icons">report</i></Link>
                    </li>
                    <li >
                        <Link to='/profile'>
                            <div className="container">
                                <div className="d-flex justify-content-center h-100">
                                    <div className="image_outer_container">
                                        <div className="green_icon"></div>
                                        <div className="image_inner_container">
                                            <img src={avatar} alt="avatar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>

                </ul>
            </nav>


            {/* nav mobile */}
            <nav className="show-on-medium-and-down hide-on-med-and-up">

                <div className="nav-wrapper">
                    <span className="brand-logo">
                        <img src={logo} id="logo" alt="logo" />
                    </span>

                    <a href="#" className="sidenav-trigger p-2">
                        <i className="material-icons" onClick={() => window.location.replace('/')}>home</i>
                    </a>
                    <Link to="/profile">
                        <div className="right">
                            <div className="d-flex justify-content-center h-100">
                                <div className="image_outer_container">
                                    <div className="green_icon"></div>
                                    <div className="image_inner_container">
                                        <img src={avatar} alt="avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>

            </nav>

        </header>

    )



}

export default NavBar