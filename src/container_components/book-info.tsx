import { FC } from "react";

export interface BookInfo {
  id?: string;
  name?: string;
  title?: string;
  pages?: number;
  price?: number;
}

export const BookInfo: FC<BookInfo> = (props) => {
  if (!props) return null;
  const { name, title, pages, price } = props;
  return (
    <>
      <h1>{`Name: ${name}`}</h1>
      <p>{`Title: ${title}`}</p>
      <p>{`Pages: ${pages}`}</p>
      <p>{`Price: ${price}`}</p>
    </>
  );
};
