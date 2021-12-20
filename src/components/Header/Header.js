import React, { useContext } from 'react'

import './Header.css'

import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

export const Header = () => {
      const { token } = useContext(AuthContext)

      return (
            <header className="header bg-dark text-white">
                  <div className="container d-flex justify-content-between py-3">
                        <h2 to="/books" className="h2" >Library App</h2>

                        <ul className="navbar">
                              {
                                    token && (
                                          <>
                                                <li className="navbar__item mx-3"><Link className="navbar__link" to='/books'>All Books</Link></li>
                                                <li className="navbar__item"><Link className="navbar__link" to='/books/add-book'>Add Book</Link></li>
                                          </>
                                    )
                              }
                        </ul>
                  </div>
            </header>
      )
}
