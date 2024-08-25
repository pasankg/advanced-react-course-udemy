import axios from "axios";
import React, { useState, useEffect } from "react";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      console.log(response.data)
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {       
        if (React.isValidElement(child)) {
          // cloneElement helps to attach addional props to element.
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
