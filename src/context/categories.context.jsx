import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { createContext, useEffect, useState } from "react";


export const CategoriesContext = createContext({
    categoriesMap: [],
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState([]);
    // can only access documents not whole collection?
    useEffect( () => {
        const getCategoriesData = async () => {
            const categoriesData = await getCategoriesAndDocuments();
            console.log("CONTEXT", categoriesData);

            setCategoriesMap(categoriesData);
        }
        getCategoriesData();
    }, []);
    console.log("CONTEXT MAP", categoriesMap);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value = {value}>
            {children}
        </CategoriesContext.Provider>
    )
}

