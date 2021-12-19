import React, { useContext } from 'react';

import './App.css';

// COMPONENTS
import { Header } from './components/Header/Header';
import { BooksList } from './components/BooksList/BooksList';
import { BookForm } from './components/BookForm/BookForm';
import { AuthForm } from './components/AuthForm/AuthForm'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { AuthContext } from "./context/AuthContext"

function App() {
  const { token } = useContext(AuthContext)

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="container">
          <Routes>
            <Route path='/' element={<Navigate to='/sign-in' />}/>

            <Route path='sign-in' element={<AuthForm type="Sign In" />} />
            <Route path='sign-up' element={<AuthForm type="Sign Up" />} />

            <Route path='/books' element={<BooksList />} />
            <Route path='/books/add-book' element={<BookForm />} />
            <Route path='/books/edit-book/:id' element={<BookForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
