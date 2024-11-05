/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const initialState = {
  id: null,
  Username: null,
  Email: null,
  AccountType: null,
  ProfilePicture: null,
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    // Load user data from localStorage on initial render
    const storedUser = {
      id: localStorage.getItem('id'),
      Username: localStorage.getItem('username'),
      Email: localStorage.getItem('email'),
      AccountType: localStorage.getItem('accountType'),
      Photo: localStorage.getItem('photo'),
    };

    setUser(prevUser => ({
      ...prevUser,
      ...storedUser,
    }));
  }, []);

  const updateUser = (newData) => {
    setUser(prevUser => ({
      ...prevUser,
      ...newData,
    }));

    // Store updated values in localStorage
    Object.keys(newData).forEach(key => {
      localStorage.setItem(key, newData[key]);
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
