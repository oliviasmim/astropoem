import { createContext, useEffect, useState, useContext } from "react";
import { poemistAPI } from "../../services/poemistAPI";

const GetPoemContext = createContext();

export const GetPoemProvider = ({ children }) => {
    const [poem, setPoem] = useState(null);
    const [error, setError] = useState(false);
    const getRandomInFive = () => {
        return Math.floor(Math.random() * 5);
    }

    const fetchPoem = () => {
        setError(false);
        poemistAPI.get()
                  .then((response) => {
                      setPoem(response.data[getRandomInFive()]);
                      sessionStorage.setItem("@AstroPoem:", JSON.stringify(poem))
                    }) 
                  .catch((err) => setError(true))
    }

    useEffect(() => {
        if(!sessionStorage.getItem("@AstroPoem:")){
            fetchPoem();
        } else {
            setPoem(JSON.parse(sessionStorage.getItem("@AstroPoem:")))
        }
    }, []);

    if(!poem){
        return (
            <GetPoemContext.Provider 
            value={{
                title: "",
                content: "",
                poet: "",
            }}
            >
                {children}
            </GetPoemContext.Provider>
        )
    }

    return (
        <GetPoemContext.Provider 
            value={{
                title: poem.title,
                content: poem.content,
                poet: poem.poet.name,
                error
            }}
            >
            {children}
        </GetPoemContext.Provider>
    )
}

export const usePoem = () => useContext(GetPoemContext)