import React, { FC, ReactNode, useEffect, useState } from "react";
import axios from "axios";

export interface ResourceLoaderProps {
  children?: ReactNode;
  resourceUrl?: string;
  resourceName?: string;
}

export const ResourceLoader: FC<ResourceLoaderProps> = ({
  children,
  resourceUrl,
  resourceName,
}) => {
  const [resource, setResource] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${resourceUrl}`);
      console.log(data);
      setResource(data || {});
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // cloneElement helps to attach addional props to element.
          return React.cloneElement(child, { [resourceName]: resource });   // { 'dynamicKey': resource }
        }
        return child;
      })}
    </>
  );
};

/**
 *  { UserInfo: { id, name, age }}
 * { id, name, age }
 */
