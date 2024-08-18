import SplitScreen from "./components/split-screen.jsx";

const LeftSdeComponent = () => {
  return <h2 style={{ backgroundColor: "red" }}>I'm Left</h2>;
};

const RightSideComponent = () => {
  return <h2 style={{ backgroundColor: "green" }}>I'm Right</h2>;
};

function App() {
  return (
    <SplitScreen Left={LeftSdeComponent} Right={RightSideComponent} leftWidth = {1} rightWidth = {2}/>    
  );
}

export default App;
