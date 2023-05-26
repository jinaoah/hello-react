import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const SimpleButton = styled.button
`
  color: white;
  background-color: green;
`;
const LargeButton = styled(SimpleButton)
`
  font-size: 50px;
`;
//일반적인 방법
const ReactButton = (props) => {
  return <button>{props.children}</button>;
}
const ReactLargeButton = styled(ReactButton)
`
  font-size: 50px;
`;

const App = () => {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
    </div>
  );
}

export default App;
