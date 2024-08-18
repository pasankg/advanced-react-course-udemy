import SplitScreen from "./components/split-screen.jsx";

const LeftSdeComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
};

const RightSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "green" }}>{title}</h2>;
};

function App() {
  return (
    // version 1
    // <SplitScreen Left={LeftSdeComponent} Right={RightSideComponent} leftWidth = {1} rightWidth = {2}/>

    // version 2
    <SplitScreen leftWidth={1} rightWidth={2}>
      <LeftSdeComponent title={`I'm Left Side`} />
      <RightSideComponent title={`I'm Right Side`} />
    </SplitScreen>
  );
}

export default App;
