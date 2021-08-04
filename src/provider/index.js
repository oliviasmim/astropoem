import { GoHomeProvider } from "./GoHome";
import { NasaPhotoProvider } from "./GetImage";
import { GetPoemProvider } from "./GetPoem";
const Providers = ({ children }) => {
    return (
        <GetPoemProvider>
        <NasaPhotoProvider>
            <GoHomeProvider>
                {children}
            </GoHomeProvider>
        </NasaPhotoProvider>
        </GetPoemProvider>
    )
};

export default Providers;