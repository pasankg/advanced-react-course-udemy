import axios from "axios";
import React, { FC, useState, useEffect, ReactNode } from "react";
import { User } from "./user-info";

export interface UserLoaderProps {
  children?: ReactNode;
  userId?: string;
}

export const UserLoader: FC<UserLoaderProps> = ({ children, userId }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`api/users/${userId}`);
      console.log(data);
      setUser(data || {});
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // cloneElement helps to attach addional props to element.
          return React.cloneElement(child, { ...user });
        }
        return child;
      })}
    </>
  );
};
