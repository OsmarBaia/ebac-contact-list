import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../../redux/contactSlice.ts";
import { Container, Form, Label, Input, Button, ErrorMessage } from "./contact-form.ts";

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

    // Estados para mensagens de erro
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");

    useEffect(() => {
        if (contactToEdit) {
            setName(contactToEdit.name);
            setPhone(contactToEdit.phone);
            setEmail(contactToEdit.email);
        }
    }, [contactToEdit]);

    // Função para validar o nome
    const validateName = () => {
        if (!name.trim()) {
            setNameError("O nome é obrigatório.");
            return false;
        }
        setNameError("");
        return true;
    };

    // Função para validar o telefone
    const validatePhone = () => {
        const phoneRegex = /^\d{11}$/; // Exemplo: 11 dígitos para o padrão brasileiro
        if (!phoneRegex.test(phone)) {
            setPhoneError("O telefone deve conter 11 dígitos.");
            return false;
        }
        setPhoneError("");
        return true;
    };

    // Função para validar o e-mail
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato básico de e-mail
        if (!emailRegex.test(email)) {
            setEmailError("Por favor, insira um e-mail válido.");
            return false;
        }
        setEmailError("");
        return true;
    };

    // Função para validar todos os campos
    const validateForm = () => {
        const isNameValid = validateName();
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();

        return isNameValid && isPhoneValid && isEmailValid;
    };

    const handleSave = () => {
        if (!validateForm()) {
            return; // Impede o salvamento se houver erros
        }

        if (contactToEdit) {
            dispatch(updateContact({ id: contactToEdit.id, name, phone, email }));
        } else {
            dispatch(addContact({ id: Date.now(), name, phone, email }));
        }
        setName("");
        setPhone("");
        setEmail("");
        onClose();
    };

    return (
        <Container>
            <Form>
                {/* Campo Nome */}
                <Label htmlFor="name">Nome: </Label>
                <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={validateName} // Valida ao sair do campo
                />
                {nameError && <ErrorMessage>{nameError}</ErrorMessage>}

                {/* Campo Telefone */}
                <Label htmlFor="phone">Telefone: </Label>
                <Input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={validatePhone} // Valida ao sair do campo
                />
                {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}

                {/* Campo E-mail */}
                <Label htmlFor="email">E-mail: </Label>
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail} // Valida ao sair do campo
                />
                {emailError && <ErrorMessage>{emailError}</ErrorMessage>}

                {/* Botões */}
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