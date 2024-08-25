const SmallAuthorListItem = ({ author }) => {
  const { name, age } = author;

  return (
    <p>
      <li>Name: {name}</li>
      <li>Age: {age}</li>
    </p>
  );
};
export default SmallAuthorListItem;
