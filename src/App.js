import { Routes } from "./routes";
import GlobalStyle from "./styles/global";
import Providers from "./provider";

function App() {
  return (
    <>
    <GlobalStyle />
      <Providers>
       <Routes />
      </Providers>
    </>
  );
}

export default App;
