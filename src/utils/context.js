import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "./db_pfofile";


const AppContext = createContext()

export const useApp = () => {
    return useContext(AppContext)
}

export const AppProvider = ({children}) => {
    const [globalState, setGlobalState] = useState([])
    const [globalNews, setGlobalNewsState] = useState([])
    
    const get_Data = async (...objValue) => {
        
        const searchValue = objValue[0] || "ukraine"
            try {
                const response = await fetch(`${BASE_URL.apiNews}/${BASE_URL.path}?q=${searchValue}&${BASE_URL.apiKey}`);
                const data = await response.json();
                setGlobalState(data)
                return data
            } catch (error) {
                console.error(error);
            }
    }
    useEffect(() => {
        get_Data()
    }, []) 
    const updateNews = async (params) => {
        try {
            await get_Data()
            const filteredNews = globalState.articles.filter(
                (item) => item.title === params
                )
                setGlobalNewsState(filteredNews)
            } catch (error){
            console.error(error)
        }
    }
    return (
        <AppContext.Provider value={{globalState, get_Data, globalNews, updateNews}}>
            {children}
        </AppContext.Provider>
    )
}