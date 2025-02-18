import React from "react"; 
import { Card, Card__Image, Card__Name, Card__Email, Card__Telefone} from "./contact-card.ts";
import Contact from "./contact.ts";

type Props = {
    contact: Contact;
}

const ContactCard = ({contact}: Props) => {
    return <Card>
        <Card__Image src="https://placehold.co/100x100"></Card__Image>
        <Card__Name>{contact.name}</Card__Name>
        <Card__Telefone>{contact.number}</Card__Telefone>
        <Card__Email>{contact.email}</Card__Email>
    </Card>
}

export default ContactCard