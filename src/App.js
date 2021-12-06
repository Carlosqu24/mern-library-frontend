import React from 'react';

import './App.css';

// COMPONENTS
import { Header } from './components/Header/Header';
import { BooksList } from './components/BooksList/BooksList';
import { BookForm } from './components/BookForm/BookForm';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="container">
          <Routes>
            <Route path='/' element={<BooksList />} />
            <Route path='/add-book' element={<BookForm />} />
            <Route path='/edit-book/:id' element={<BookForm />} />

            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
