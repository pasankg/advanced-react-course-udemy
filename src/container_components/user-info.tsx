import { FC } from "react";

export interface Book {
  id?: string;
  name?: string;
  title?: string;
  pages?: number;
  price?: number;
}

export interface UserInfoResponse {
  UserInfoProp: UserInfo;
}
export interface UserInfo {
  id?: string;
  name?: string;
  age?: number;
  country?: string;
  books?: [];
  // books?: Book[];
}

export const UserInfo: FC<UserInfoResponse | UserInfo> = (props) => {
  if (!props) return null;
  const { name, age, country, books } = props?.UserInfoProp || props;
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
