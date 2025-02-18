import styled from "styled-components";

const Container = styled.div/*css*/`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    
    min-width: 200px;
    padding-top: 10rem;
    margin: 0 auto;

    background-color: #cccccc;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

const Form = styled.form/*css*/`
    width: 90%;
    min-width: 200px;
    max-width: 300px;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    border: 1px solid #e9e9e9;
    background-color: #f5f5f5;        
    border-radius: 2rem;
`;

const Label = styled.label/*css*/`
    margin-left: 1rem;
    align-self: flex-start;
`;

const Input = styled.input<{ error?: boolean }>/*css*/`
    width: 100%;
    min-width: 150px;
    height: 2rem;
    border: 1px solid ${(props) => (props.error ? "red" : "#e9e9e9")};
    border-radius: 1rem;
    background-color: #f5f5f5;
    padding-left: 1rem;

    &:focus {
        outline: none;
        border-color: ${(props) => (props.error ? "red" : "#50d47d")};
    }
`;

const Button = styled.button/*css*/`
    width: auto;
    min-width: 5rem;
    height: 2rem;
    margin: 1rem;
    cursor: pointer;

    font-weight: bold;

    border: 1px solid #e9e9e9;
    border-radius: 5px;
    background-color: #f5f5f5;
    color: #000;
    opacity: 1;

    &:hover {
        transform: scale(1.05);
    }
    &:active {
        opacity: 0.8;
    }

    &.fechar {
        background-color: #ed4c31;
    }

    &.salvar {
        background-color: #50d47d;
    }
`;

const ErrorMessage = styled.p/*css*/`
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    margin-left: 1rem;
    align-self: flex-start;
`;

export { Container, Form, Label, Input, Button, ErrorMessage };