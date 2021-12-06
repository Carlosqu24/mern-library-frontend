import React from 'react'

export const SignUp = () => {
      return (
            <form className="w-50 bg-light p-3 my-5 m-auto">
                  <h2>Create Account</h2>

                  <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Carlos123"/>
                  </div>

                  <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="some@example.com"/>
                  </div>

                  <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="12345678"/>
                  </div>
                  
                  <button type="submit" class="btn btn-primary">Create Account</button>
            </form>
      )
}
