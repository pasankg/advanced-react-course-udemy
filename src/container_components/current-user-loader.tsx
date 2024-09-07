import axios from "axios";
import React, { FC, useState, useEffect, ReactNode } from "react";
import { User } from "./user-info";

export interface CurrentUserLoaderProps {
  children?: ReactNode;
}

export const CurrentUserLoader: FC<CurrentUserLoaderProps> = ({ children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/current-user");
      console.log(data);
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
