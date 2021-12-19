import React, { useState, createContext } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
      const [token, setToken] = useState(null)

      const value = { token, setToken }

      return <AuthContext.Provider value={value}>
            { children }
      </AuthContext.Provider>
};


