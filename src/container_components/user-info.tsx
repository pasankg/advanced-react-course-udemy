import { FC } from 'react'

interface Address {
  address: string
  city: string
  country: string
}
interface Book {
  name: string
  pages: number
  title: string
  price: number
}
export interface User {
  firstName?: string
  lastName?: string
  age?: number
  country?: string
  books?: Book[]
  address?: Address
}

export const UserInfo:FC<User> = (props) => {
  if(!props) return null
  const { firstName, lastName, age, address, books } = props
  return (
    <>
      <h1>{`Name ${firstName || '-'} ${lastName || '-'}`}</h1>
      <p>{`Age ${age || '-'}`}</p>
      <p>{`Country: ${address?.country || '-'}`}</p>
      <ul>
        {books?.map((book) => {
          return <li key={`${book?.name}-${book?.title}`}>{book?.title}</li>;
        })}
      </ul>
    </>
  );
};
