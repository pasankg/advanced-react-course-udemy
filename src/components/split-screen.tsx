import { styled } from "styled-components";

const Container = styled.div({
  display: "flex",
});

const Panel = styled.div`
  flex: ${(props) => props.flex};
`;

// version 1

// const SplitScreen = ({ Left, Right, leftWidth = 1, rightWidth = 1 }) => {
//   return (
//     <Container>
//       <Panel flex={leftWidth}>
//         <Left />
//       </Panel>
//       <Panel flex={rightWidth}>
//         <Right />
//       </Panel>
//     </Container>
//   );
// };

// version 2
const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;
