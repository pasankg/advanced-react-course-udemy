export const UserInfo = ({ user }) => {
  const [name, age, country, books] = user || [];
  return (
    <>
      <h1>Name `{name}`</h1>
      <p>Age `{age}`</p>
      <p>Country: `{country}`</p>
      <ul>
        {books.map((book) => {
          <li key={book}>{book}</li>;
        })}
      </ul>
    </>
  );
};
