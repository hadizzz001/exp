"use client"

import React, { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const useMenu = () => {
  return useContext(MenuContext);
};

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

