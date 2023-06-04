import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Btn = styled.button`
  background-color: tomato;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

// Box 상속
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <Btn as="div">button</Btn>
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
