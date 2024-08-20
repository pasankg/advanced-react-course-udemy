import SmallAuthorListItem from "../authors/SmallListItems";

const List = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        // <ItemComponent key={i} author={item} />
        // Above can be written as following for resulability.
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default List;
