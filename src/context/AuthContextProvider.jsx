import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [shouldRender, setShouldRender] = useState(false);

  

  return (
    <AuthContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        setSearchResults,
        isLoggedIn,
        setIsLoggedIn,
        // shouldRender, setShouldRender
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
