import { Routes } from "./routes";
import GlobalStyle from "./styles/global";
import Providers from "./provider";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
    <GlobalStyle />
    <AnimatePresence>
      <Providers>
       <Routes />
      </Providers>
    </AnimatePresence>
    </>
  );
}

export default App;
