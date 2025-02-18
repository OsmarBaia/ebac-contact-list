import EstiloGlobal from "./styles/index.ts";
import Navbar from "./containers/navbar.tsx";
import ContactList from "./containers/contact-list.tsx";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Navbar/>
      <ContactList />
    </>
  )
}

export default App
