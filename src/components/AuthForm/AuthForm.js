import React, { useState, useContext } from 'react'

import './AuthForm.css'

import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

export const AuthForm = ({ type }) => {
      const [form, setForm] = useState(null)

      const navigate = useNavigate();
      const { setToken } = useContext(AuthContext)

      const signIn = async (e) => {
            let url = "http://localhost:9500/api/auth/signin";

            const response = await fetch(url, {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(form)
            })
            const { token } = await response.json();

            setToken(token)
            navigate('/books')
      }

      const signUp = () => {

      }

      const handleChange = e => {
            setForm({ ...form, [e.target.name]: e.target.value })
      }

      const handleSubmit = (e) => {
            e.preventDefault();

            type == 'Sign In' && signIn(e)

            type == 'Sign Up' && signUp()
      }

      return (
            <form className="form p-4 d-flex flex-column" onSubmit={handleSubmit}>
                  <h2 className="text-center">{ type }</h2>

                  {
                        type == "Sign Up" && (
                              <div className="form-group mb-3">
                                    <label htmlFor="email">Username</label>
                                    <input onChange={handleChange} className="form-control" type="text" name="username" placeholder="Username" />
                              </div>
                        )
                  }

                  <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input onChange={handleChange} className="form-control" type="text" name="email" placeholder="Email" />
                  </div>

                  <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange} className="form-control" type="password" name="password" placeholder="Password" />
                  </div>

                  {
                        type == "Sign Up" && (
                              <div className="form-group mb-3">
                                    <label htmlFor="email">Roles</label>
                                    <input onChange={handleChange} className="form-control" type="text" name="username" placeholder="Username" />
                              </div>
                        )
                  }

                  <div className="form-group">
                        <input className="form-control btn-success" type="submit" value={ type } />
                  </div>
            </form>
      )
}
