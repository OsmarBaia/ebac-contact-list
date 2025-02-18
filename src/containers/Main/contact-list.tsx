// containers/contact-list.tsx
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { Main, Container, AdicionarContato } from "./contact-list.ts";
import ContactForm from "./contact-form.tsx";
import ContactCard from "../../components/contact/contact-card.tsx";
import SearchBar from "../Header/searchbar.tsx";

const ContactList = () => {
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const contacts = useSelector((state: RootState) => state.contacts);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Main>
            <SearchBar onSearch={(term) => setSearchTerm(term)} />
            <Container>
                <AdicionarContato onClick={() => setShowForm(!showForm)}>
                    <i className="bi bi-person-plus"></i> Adicionar Contato
                </AdicionarContato>
                {showForm && <ContactForm onClose={() => setShowForm(false)} />}
                {filteredContacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </Container>
        </Main>
    );
};

export default ContactList;