"use client";
import React, { createContext, useContext, useState } from 'react';

interface SearchContextType {
  openSearch: boolean;
  setOpenSearch: (open: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <SearchContext.Provider value={{ openSearch, setOpenSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}