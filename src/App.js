import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }
  100% {
    transform:rotate(0deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotation} 3s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😀</Emoji>
        <Emoji>🤣</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
