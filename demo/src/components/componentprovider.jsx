



import { createContext , useState } from 'react';

const commentContext = createContext();
export function CommentProvider({children}){
    const[comment,setComment]=useState("this is default comment")
    return(
        <>
        <commentContext.Provider value={{comment,setComment}} >
            {children}
        </commentContext.Provider>
        </>
    )
}
export default commentContext;