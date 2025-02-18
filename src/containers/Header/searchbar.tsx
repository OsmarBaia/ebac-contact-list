import { Header, Form, Label, Input, Button } from "./searchbar.ts";

const SearchBar = () => {
    return <Header>
            <Form action="">
                <Label htmlFor="busca"></Label>
                <Input type="text" name="busca" id="busca" placeholder="Nome do Contato"/>
                <Button type="button" role="search"><i className="bi bi-search"></i></Button>
            </Form>
        </Header>
}

export default SearchBar
