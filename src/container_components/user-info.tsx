import { FC } from "react";

export interface Book {
  name?: string;
  title?: string;
  pages?: number;
  price?: number;
}

export interface User {
  id?: string;
  name?: string;
  age?: number;
  country?: string;
  books?: [];
  // books?: Book[];
}

export const UserInfo: FC<User> = (props) => {
  if (!props) return null;
  const { name, age, country, books } = props;
  return (
    <>
      <h1>{`Name: ${name}`}</h1>
      <p>{`Age: ${age}`}</p>
      <p>{`Country: ${country}`}</p>
      <ul>
        {books?.map((book) => {
          return <li key={`${book}`}>{book}</li>;
          // return <li key={`${book?.name}-${book?.title}`}>{book?.title}</li>;
        })}
      </ul>
    </>
  );
};
