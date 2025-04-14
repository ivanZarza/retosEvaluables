
import { createContext, useState } from "react";

type User = {
  id_user: number;
  name: string;
  last_name: string;
  email: string;
  password: string;
  photo: string;
}

type UserContextType = {
  user: User | null;
  logIn: (user: User) => void;
  logOut: () => void;
};

type UserProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<UserContextType>({
  user: null,
  logIn: () => {},
  logOut: () => {},
});


function UserProvider(props: UserProviderProps) {

  const { children } = props;

  const[user, setUser] = useState<User | null >(() => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  });
  
  function logIn(user: User) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function logOut() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return(
  <>
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  </>
  )
}

export default UserProvider;

export { UserContext };