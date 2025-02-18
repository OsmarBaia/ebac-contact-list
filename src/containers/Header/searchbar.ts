import styled from "styled-components";

const Header = styled.header/*css*/`
    padding: 0.5rem;
    height: 3rem;
    width: 100%;

    background-color: #e9e9e9;
`;

const Form =  styled.form/*css*/`
    width: 100%;
    min-width: 200px;
    max-width: 600px;
    margin: 0 auto;

    position: relative;

    border: none;
    background-color: transparent;
`;

const Label = styled.label/*css*/`
  display: none;
`;

const Input = styled.input/*css*/`
    width: 100%;
    min-width: 150px;
    height: 2rem;
    min-height: 32px;

    border: 1px solid #cccccc;
    border-radius: 1.125rem;
    padding: 1rem;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button/*css*/`
    z-index: 10;
    width: 2rem;
    min-width: 32px;
    height: 2rem;
    min-height: 32px;

    position: absolute;
    top: 0.05rem;
    right: 0.05rem;

    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: #e9e9e9;
    }

    i{
        background-color: transparent;
    }
`;

export { Header, Form, Label, Input , Button};