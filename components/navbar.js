import Link from "next/link";
import {useEffect, useState} from "react";

const Navbar = () => {

    const [isNavBurgerActive, setNavBurgerState] = useState(false)
    const [isDropDownActive, setDropDownState] = useState(false)

    const burgerHandler = () => {
        setNavBurgerState(!isNavBurgerActive)
    }

    const dropDownHandler = () => {
        setDropDownState(!isDropDownActive)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Movie DB</a>
                <button onClick={burgerHandler}
                        className={`navbar-toggler ${!isNavBurgerActive ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isNavBurgerActive}
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={`collapse navbar-collapse ${isNavBurgerActive ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                             <Link legacyBehavior href="/">
                                 <a className="nav-link" href="#">Home</a>
                             </Link>
                        </li>
                        <li className="nav-item">
                            <Link legacyBehavior href="/about">
                                <a className="nav-link" href="#">About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link legacyBehavior href="/contact">
                                <a className="nav-link" href="#">Contact</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link legacyBehavior href="/posts">
                                <a className="nav-link" href="#">Posts</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${isDropDownActive ? 'show' : ''}`}
                                href="#"
                                role="button"
                                onClick={dropDownHandler}
                                data-bs-toggle="dropdown"
                                aria-expanded={isDropDownActive}
                            >
                                Dropdown
                            </a>
                            <ul className={`dropdown-menu ${isDropDownActive ? 'show' : ''}`}>
                                <li><a className="dropdown-item" href="#">Movies</a></li>
                                <li><a className="dropdown-item" href="#">Series</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-block">
        //     <div className="container">
        //         <a className="navbar-brand" href="#">Movie cinema</a>
        //         <button onClick={burgerHandler} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        //                 aria-controls="navbarResponsive" aria-expanded={isNavBurgerActive} aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"/>
        //         </button>
        //         <div className={isNavBurgerActive === false ? "collapse navbar-collapse" : "navbar-collapse collapse show"} id="navbarResponsive">
        //             <ul className="navbar-nav ml-auto">
        //                 <li className="nav-item active">
        //                     <Link legacyBehavior href="/">
        //                         <a className="nav-link" href="#">Home
        //                             <span className="sr-only">(current)</span>
        //                         </a>
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link legacyBehavior href="/about">
        //                         <a className="nav-link" href="#">About</a>
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link legacyBehavior href="/services">
        //                         <a className="nav-link" href="#">Services</a>
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link legacyBehavior href="/contact">
        //                         <a className="nav-link" href="#">Contact</a>
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar