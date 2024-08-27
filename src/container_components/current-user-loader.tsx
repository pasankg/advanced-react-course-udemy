import axios from "axios";
import React, { FC, useState, useEffect, ReactNode } from "react";
import { User } from '../container_components/user-info'

export interface CurrentUerLoaderProps {
  children?: ReactNode
}

export const CurrentUserLoader:FC<CurrentUerLoaderProps> = ({ children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://dummyjson.com/users/1");
      setUser(data || {});
    })();
  }, []);

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
