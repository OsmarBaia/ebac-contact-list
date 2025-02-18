import {Container, Form , Label, Input, Button} from "./contact-form.ts";

const ContactForm = () => {

    function fechar() {
        //Fechar o fomulario
    }

    function salvar() {
        // Adicionar contato
    }

    return <Container>
                <Form>
                    <Label htmlFor="nome">Nome: </Label>
                    <Input type="text" id="nome" name="nome"></Input>
                    <Label htmlFor="telefone">Telefone: </Label>
                    <Input type="tel" id="telefone" name="telefone"></Input>
                    <Label htmlFor="email">E-mail: </Label>
                    <Input type="email" id="email" name="email"></Input>
                    <div>
                    <Button className="fechar" type="button" onClick={fechar}>Fechar</Button>
                    <Button className="salvar" type="button" onClick={salvar}>Salvar</Button>
                    </div>
                </Form>
            </Container>
}

export default ContactForm