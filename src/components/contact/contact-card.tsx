import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactSlice.ts";
import { Card, Card__Image, Card__Name, Card__Email, Card__Telefone, Card__Buttons } from "./contact-card.ts";
import ContactForm from "../../containers/Main/contact-form.tsx";

type Props = {
    contact: {
        id: number;
        name: string;
        phone: string;
        email: string;
    };
};

const ContactCard = ({ contact }: Props) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        dispatch(removeContact(contact.id)); // Dispara a ação de remover contato
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCloseForm = () => {
        setIsEditing(false);
    };

    return (
        <Card>
            {isEditing ? (
                <ContactForm
                    onClose={handleCloseForm}
                    contactToEdit={contact}
                />
            ) : (
                <>
                    <Card__Image src="https://placehold.co/100x100" alt={contact.name} />
                    <Card__Name>{contact.name}</Card__Name>
                    <Card__Email>{contact.email}</Card__Email>
                    <Card__Telefone>{contact.phone}</Card__Telefone>
                    <Card__Buttons>
                        <button className="deletar" type="button" onClick={handleDelete}>
                            Deletar
                        </button>
                        <button className="editar" type="button" onClick={handleEdit}>
                            Editar
                        </button>
                    </Card__Buttons>
                </>
            )}
        </Card>
    );
};

export default ContactCard;