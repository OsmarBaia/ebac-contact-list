import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { Main, Container, AdicionarContato } from "./contact-list.ts";
import ContactForm from "./contact-form.tsx";
import ContactCard from "../../components/contact/contact-card.tsx";

const ContactList = () => {
    const [showForm, setShowForm] = useState(false);
    const contacts = useSelector((state: RootState) => state.contacts); // Obtém a lista de contatos do Redux

    return (
        <Main>
            <Container>
                <AdicionarContato onClick={() => setShowForm(!showForm)}>
                    <i className="bi bi-person-plus"></i> Adicionar Contato
                </AdicionarContato>
                {showForm && <ContactForm onClose={() => setShowForm(false)} />}
                {contacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} /> // Renderiza cada contato
                ))}
            </Container>
        </Main>
    );
};

export default ContactList;