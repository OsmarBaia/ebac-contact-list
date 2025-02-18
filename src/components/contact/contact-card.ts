import styled from "styled-components";

const Card = styled.div/*css*/`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem 1rem;
  grid-auto-flow: row;
  grid-template-areas:
    "image name name"
    "image telefone email"
    "image telefone email";

  padding: 1rem;
  border: 1px solid #e9e9e9;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  margin-bottom: 1rem;
`;

const Card__Image = styled.img/*css*/`
  grid-area: image;
  width: 100px;
  height: 100px;
  background-image: url("https://placehold.co/100x100");
`;

const Card__Name = styled.p/*css*/`
  grid-area: name;
  font-size: larger;
  font-weight: bold;
`;

const Card__Telefone = styled.p/*css*/`
  grid-area: telefone;
`;


const Card__Email = styled.p/*css*/`
  grid-area: email;
`;



export { Card, Card__Name, Card__Image, Card__Telefone, Card__Email };
