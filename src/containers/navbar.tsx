import { Header, Form, Label, Input, Button } from "../styles/navbar.ts";

const Navbar = () => {
    return <Header>
            <Form action="">
                <Label htmlFor="busca"></Label>
                <Input type="text" name="busca" id="busca" placeholder="Nome do Contato"/>
                <Button type="submit"><i className="bi bi-search"></i></Button>
            </Form>
        </Header>
}

export default Navbar
