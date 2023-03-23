import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;
const H1 = styled.h1`
  color:${props => props.theme.textColor}
`;

// Themes

function App03() {
  return <Container>
  <H1>kkamzzu</H1>
  </Container>

}

export default App03;