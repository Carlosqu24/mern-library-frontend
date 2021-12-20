import React, { useState, useContext } from 'react'

import { useNavigate, useParams } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

export const BookForm = () => {
      const [form, setForm] = useState({})

      const navigate = useNavigate();
      const { id } = useParams();

      const { token } = useContext(AuthContext)

      const handleChange = (e) => {
            setForm({
                  ...form,
                  [e.target.id]: e.target.value
            })
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            const saveBook = async () => {
                  const res = await fetch('http://localhost:9500/api/books/new-book', {
                  method: 'POST',
                  headers: {
                              'Content-Type': 'application/json',
                              'x-access-token': token
                        },
                        body: JSON.stringify(form)
                  });

                  const data = await res.json();
            }

            const editBook = async (id) => {
                  const res = await fetch('http://localhost:9500/api/books/edit/' + id, {
                  method: 'PUT',
                  headers: {
                              'Content-Type': 'application/json',
                              'x-access-token': token
                        },
                        body: JSON.stringify(form)
                  });

                  const data = await res.json();
            };

            id ? editBook(id) : saveBook() 

            navigate('/books')
      }

      return (
            <form className="w-50 bg-light p-3 my-5 m-auto" onSubmit={handleSubmit}>
                  <h2>{ id ? 'Edit Book' : 'Add Book'}</h2>
                  <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onChange={handleChange}/>
                  </div>

                  <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" onChange={handleChange}/>
                  </div>

                  <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input type="text" className="form-control" id="author" onChange={handleChange}/>
                  </div>

                  <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <input type="text" className="form-control" id="gender" onChange={handleChange}/>
                  </div>

                  <div className="mb-3">
                        <label htmlFor="imageURL" className="form-label">Image URL</label>
                        <input type="text" className="form-control" id="imageURL" onChange={handleChange}/>
                  </div>

                  <button type="submit" className="btn btn-dark">{ id ? 'Edit Book' : 'Add Book'}</button>
          </form>
      )
}
