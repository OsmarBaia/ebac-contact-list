import { useState } from "react";
import { Header, Form, Label, Input, Button } from "./searchbar.ts";

type SearchBarProps = {
    onSearch: (searchTerm: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term); // Busca em tempo real
    };

    return (
        <Header>
            <Form>
                <Label htmlFor="busca"></Label>
                <Input
                    type="text"
                    name="busca"
                    id="busca"
                    placeholder="Nome do Contato"
                    value={searchTerm}
                    onChange={handleSearch} // Busca em tempo real
                />
                <Button type="button" role="search">
                    <i className="bi bi-search"></i>
                </Button>
            </Form>
        </Header>
    );
};

export default SearchBar;
