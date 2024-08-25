import SplitScreen from "./chapter_2_layout_components/components/split-screen.js";
import List from "./chapter_2_layout_components/components/lists/List.js";

import dataAuthors from "./chapter_2_layout_components/data/authors.js";
import dataBooks from "./chapter_2_layout_components/data/books.js";

import SmallAuthorListItem from "./chapter_2_layout_components/components/authors/SmallListItems.js";
import LargeAuthorListItem from "./chapter_2_layout_components/components/authors/LargeListItems.js";

import SmallBookListItem from "./chapter_2_layout_components/components/books/SmallListItems.js";

const LeftSdeComponent = ({ title }: { title: string }) => {
  return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
};

const RightSideComponent = ({ title }: { title: string }) => {
  return <h2 style={{ backgroundColor: "green" }}>{title}</h2>;
};

function App() {
  return (
    <>
      {/* version 1 */}
      {/* <SplitScreen Left={LeftSdeComponent} Right={RightSideComponent} leftWidth = {1} rightWidth = {2}/> */}

      {/* version 2 */}
      <SplitScreen leftWidth={1} rightWidth={2}>
        <LeftSdeComponent title={`I'm Left Side`} />
        <RightSideComponent title={`I'm Right Side`} />
      </SplitScreen>

      <List
        items={dataAuthors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />

      <List
        items={dataAuthors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />

      <List
        items={dataBooks}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
    </>
  );
}

export default App;
