import React from 'react'

export const SignIn = () => {
      return (
            <form className="w-50 bg-light p-3 my-5 m-auto">
                  <h2>Sign In</h2>

                  <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Carlos123"/>
                  </div>

                  <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="12345678"/>
                  </div>
                  
                  <button type="submit" class="btn btn-primary">Sign In</button>
            </form>
      )
}
