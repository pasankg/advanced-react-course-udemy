const SmallBookItems = ({ book }) => {
  const { name, title } = book;

  return (
    <>
      <p>
        <li>Name: {name}</li>
        <li>Title: {title}</li>
      </p>
    </>
  );
};

export default SmallBookItems;
