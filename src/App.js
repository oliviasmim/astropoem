import { Routes } from "./routes";
import GlobalStyle from "./styles/global";
import { GoHomeProvider } from "./provider/GoHome";
import { NasaPhotoProvider } from "./provider/getImage";

function App() {
  return (
    <>
    <GlobalStyle />
    
    <NasaPhotoProvider>
      <GoHomeProvider>
       <Routes />
    </GoHomeProvider>
    </NasaPhotoProvider>
    </>
  );
}

export default App;
