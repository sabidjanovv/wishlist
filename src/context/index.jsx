import { useContext, createContext, useState } from "react";

const Context = createContext()

export const ContextProvider = ({children})=>{
    const [count, setCount] = useState(1)
    const [auth, setAuth] = useState(null)
    const [wishlist , setwishlist] = useState([])
    return <Context.Provider value={{count, setCount,wishlist, setwishlist}}>{children}</Context.Provider>
}

export const useStateValue = ()=> useContext(Context) 