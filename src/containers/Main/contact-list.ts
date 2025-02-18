import styled from "styled-components";

const Main = styled.main/*css*/`
    padding: 0.5rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div/*css*/`
    width: 100%;
    min-width: 200px;
    max-width: 600px;
    margin: 0 auto;
`;

const AdicionarContato = styled.button/*css*/`
    width: 100%;
    height: 2rem;
    border: none;
    border-radius: 5px;
    
    cursor: pointer;
    margin-bottom: 1rem;
    font-weight: bold;
    border: 1px solid #e9e9e9;

    background-color: #50d47d;        
    color: #000;
    opacity: 1;

    box-shadow: 0 1px 1px 0 #000;
    
    i{
        background-color: transparent;
        color: #000;
    }

    &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 2px 2px 0 #000;
    }

    &:active {
        transform: translateY(2px);
        color: #000;

        box-shadow: 0 0px 0px 0 #000;
        i{
            color: #000;
        }
    }


`;

export { Main, Container, AdicionarContato }