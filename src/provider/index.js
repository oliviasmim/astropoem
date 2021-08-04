import { GoHomeProvider } from "./GoHome";
import { NasaPhotoProvider } from "./GetImage";
import { GetPoemProvider } from "./GetPoem";
import { ModalProvider } from "./Modal";
const Providers = ({ children }) => {
    return (
        <ModalProvider>
            <GetPoemProvider>
                <NasaPhotoProvider>
                    <GoHomeProvider>
                        {children}
                    </GoHomeProvider>
                </NasaPhotoProvider>
            </GetPoemProvider> 
        </ModalProvider>
    )
};

export default Providers;