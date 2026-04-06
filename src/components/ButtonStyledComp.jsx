import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.bg};
  color: black;
  padding: 10px;
  border-radius: 5px;
`;


export const Save = styled(Button)`
background-color : yellow;
color : black;
`

export default function ButtonStyled() {
    return (
        <>
            <Button bg="red">Click Me</Button>
            <Button bg="green">Submit</Button>
            <Save>Save</Save>
        </>
    )
}