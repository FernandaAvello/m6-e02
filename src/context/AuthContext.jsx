import React, { createContext, useContext, useState, useEffect } from 'react';
import { encryptData } from '../utils/encryption';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('../../db.json')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);
  const login = async (username, password, role) => {
    const foundUser = users.find(
      user => user.username === username && user.password === password && user.role === role
    );
    if (foundUser) {
      const encryptedUser = encryptData(foundUser);
      setUser({ username, role, token: encryptedUser });
      localStorage.setItem('user', JSON.stringify({ username, role, token: encryptedUser }));
      return true;
    } else {
      console.error('Invalid credentials');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};