import { Main, Container, AdicionarContato } from "./contact-list.ts";
import ContactForm from "./contact-form.tsx";
import ContactCard from "../../components/contact/contact-card.tsx";
import Contact from "../../components/contact/contact.ts";

const ContactList = () => {
    function adicionarContato() {
        //Abrir formulario de contato
    }

    return <Main>
        <Container>
            <AdicionarContato onClick={adicionarContato}>
                <i className="bi bi-person-plus"></i> Adicionar Contato
            </AdicionarContato>
            {/* <ContactForm/> */}
            <ContactCard contact={new Contact("Osmar baia de castro neto", "o@o.com",9198181818)}/>
            <ContactCard contact={new Contact("Osmar", "o@o.com",9198181818)}/>
        </Container>
    </Main>
}

export default ContactList