import { CurrentUserLoader } from "./current-user-loader";
import UserInfo from "./user-info";

export const ResourceLoader = () => {
 return(
  <CurrentUserLoader>
    <UserInfo/>
  </CurrentUserLoader>
 );
}