import EstiloGlobal from "./App.ts";
import SearchBar from "./containers/Header/searchbar.tsx";
import ContactList from "./containers/Main/contact-list.tsx";

function App() {
  return (
    <>
      <EstiloGlobal />
      <SearchBar/>
      <ContactList/>
    </>
  )
}

export default App
