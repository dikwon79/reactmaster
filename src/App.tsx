import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Btn = styled.button`
  background-color: ${(props) => props.theme.bgColor};
`;
function App() {
  return (
    <Container>
      <H1>protected</H1>
      <Btn />
    </Container>
  );
}

export default App;
