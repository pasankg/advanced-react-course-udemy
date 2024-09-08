import SplitScreen from "./layout_components/components/split-screen.js";
import List from "./layout_components/components/lists/List.js";

import dataAuthors from "./layout_components/data/authors.js";
import dataBooks from "./layout_components/data/books.js";

import SmallAuthorListItem from "./layout_components/components/authors/SmallListItems.js";
import LargeAuthorListItem from "./layout_components/components/authors/LargeListItems.js";

import SmallBookListItem from "./layout_components/components/books/SmallListItems.js";

// import { ResourceLoader } from "./container_components/resource-loader.tsx";
import { CurrentUserLoader } from "./container_components/current-user-loader.tsx";
import { UserInfo } from "./container_components/user-info.tsx";
import { UserLoader } from "./container_components/user-loader.jsx";
import { ResourceLoader } from "./container_components/resource-loader.tsx";
import { BookInfo } from "./container_components/book-info.tsx";

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
      {/* <SplitScreen leftWidth={1} rightWidth={2}>
        <LeftSdeComponent title={`I'm Left Side`} />
        <RightSideComponent title={`I'm Right Side`} />
      </SplitScreen> */}

      {/* <List
        items={dataAuthors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />*/}

      {/* <List
        items={dataAuthors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />*/}

      {/* <List
        items={dataBooks}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      /> */}

      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}

      {/* <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader> */}

      {/* <ResourceLoader resourceUrl={"/api/books/23"} resourceName={"BookInfo"}>
        <BookInfo />
      </ResourceLoader> */}

      <ResourceLoader resourceUrl={"/api/users/2"} resourceName={"UserInfoProp"}>
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
