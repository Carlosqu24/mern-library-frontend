import React from 'react'

import './Header.css'

import { Link } from 'react-router-dom'

export const Header = () => {
      return (
            <header className="header bg-dark text-white">
                  <div className="container d-flex justify-content-between py-3">
                        <Link to="/" className="h2" >Library App</Link>

                        <ul className="navbar">
                              <li className="navbar__item mx-3"><Link className="navbar__link" to='/'>All Books</Link></li>
                              <li className="navbar__item"><Link className="navbar__link" to='/add-book'>Add Book</Link></li>
                        </ul>
                  </div>
            </header>
      )
}
