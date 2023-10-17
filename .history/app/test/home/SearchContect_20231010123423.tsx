import React from "react";

export const SearchContext = React.createContext({
  isSearchOpen: false,
  openSearch: () => {},
  closeSearch: () => {},
});
