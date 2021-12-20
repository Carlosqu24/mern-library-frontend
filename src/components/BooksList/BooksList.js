import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import './BooksList.css'

export const BooksList = () => {
      const [booksList, setBooksList] = useState([]);

      const navigate = useNavigate();

      const { token } = useContext(AuthContext)

      useEffect(() => {
            const getBooks = async () => {
                  const res = await fetch('http://localhost:9500/api/books');
                  const data = await res.json();

                  setBooksList(data);
            };

            getBooks();
      }, []);

      const handleDelete = async (id) => {
            const deletedBook = await fetch(`http://localhost:9500/api/books/delete/${id}`, {
                  method: 'DELETE',
                  headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': token
                  }
            });

            navigate('/books')
      };

      return (
            <>
                  <h2>Books List</h2>

                  <div className="books-container container">
                        <div className="row g-3">
                              {
                                    booksList.map(book => (
                                          <div key={book._id} className="col-lg-3 col-md-4 col-sm-12">
                                                <div className="book-card card">
                                                      <img src={book.imageURL} className="card-img-top" alt={book.name} />
                                                      <div className="card-body">
                                                            <h4 className="card-title">{book.name}</h4>
                                                            <p className="card-text">{book.description}</p>
                                                            <p className="card-text">{book.gender}</p>
                                                            <div className="card-actions">
                                                                  <Link to={`/edit-book/${book._id}`} className="btn btn-dark">Edit book</Link>
                                                                  <button className="btn btn-danger" onClick={() => handleDelete(book._id)}>Delete book</button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </>
      )
}
