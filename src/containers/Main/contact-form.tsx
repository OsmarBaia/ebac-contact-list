// containers/contact-form.tsx
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../../redux/contactSlice.ts";
import { Container, Form, Label, Input, Button } from "./contact-form.ts";

type ContactFormProps = {
    onClose: () => void;
    contactToEdit?: {
        id: number;
        name: string;
        phone: string;
        email: string;
    };
};

const ContactForm = ({ onClose, contactToEdit }: ContactFormProps) => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (contactToEdit) {
            setName(contactToEdit.name);
            setPhone(contactToEdit.phone);
            setEmail(contactToEdit.email);
        }
    }, [contactToEdit]);

    const handleSave = () => {
        if (contactToEdit) {
            dispatch(updateContact({ id: contactToEdit.id, name, phone, email })); // Atualiza o contato
        } else {
            dispatch(addContact({ id: Date.now(), name, phone, email })); // Adiciona um novo contato
        }
        setName("");
        setPhone("");
        setEmail("");
        onClose();
    };

    return (
        <Container>
            <Form>
                <Label htmlFor="name">Nome: </Label>
                <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Label htmlFor="phone">Telefone: </Label>
                <Input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <Label htmlFor="email">E-mail: </Label>
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                    <Button className="fechar" type="button" onClick={onClose}>
                        Fechar
                    </Button>
                    <Button className="salvar" type="button" onClick={handleSave}>
                        {contactToEdit ? "Salvar Edição" : "Salvar"}
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default ContactForm;