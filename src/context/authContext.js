import React, {useState, createContext, useContext} from 'react';


export const authContext = createContext({})

function AuthProvider({children}) {
    const [click, setClick] = useState(false)

  return (
      <authContext.Provider value={{click, setClick}}>
          {children}
      </authContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
    const context = useContext(authContext)
    const {click, setClick} = context;
    return {click, setClick}
}