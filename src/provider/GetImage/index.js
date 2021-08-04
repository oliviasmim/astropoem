import { createContext, useEffect, useState, useContext } from "react";
import { nasaAPI } from "../../services/nasaAPI";


const NasaPhotoContext = createContext();

export const NasaPhotoProvider = ({ children }) => {
    const [photoData, setPhotoData] = useState(null);

    const fetchPhoto = () => {
        nasaAPI.get()
                .then((response) => setPhotoData(response.data))
                .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchPhoto();
    }, []);

    if (!photoData){
        return (
            <NasaPhotoContext.Provider value={{
                date: "",
                explanation: "",
                type: "",
                title: "",
                imageSrc: "",
            }}>
            {children}
            </NasaPhotoContext.Provider>
        )
    }

    return (
        <NasaPhotoContext.Provider 
            value={{
                date: photoData.date, 
                explanation: photoData.explanation,
                type: photoData.media_type,
                title: photoData.title,
                imageSrc: photoData.url
            }}
        >
            {children}
        </NasaPhotoContext.Provider>
    )
}

export const useNasaPhoto = () => useContext(NasaPhotoContext);