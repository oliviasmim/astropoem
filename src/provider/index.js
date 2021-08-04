import { GoHomeProvider } from "./GoHome";
import { NasaPhotoProvider } from "./getImage";
const Providers = ({ children }) => {
    return (
        <NasaPhotoProvider>
        <GoHomeProvider>
            {children}
        </GoHomeProvider>
    </NasaPhotoProvider>
    )
};

export default Providers;