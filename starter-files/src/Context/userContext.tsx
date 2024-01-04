import React, { useEffect, useState } from "react";
import { UserType } from "@/interfaces/interfaces";
import { createContext } from "react";

interface UserContextType {
  users: UserType[];
  handleCreateUser: (
    name: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => void;
  handleLogIn: (email: string) => void;
  currentLoggedInUser: UserType | undefined;
  handleChangePassword: (newPass: string, confirmPass: string) => void;
  handleLogOut: () => void;
  setCurrentLoggedInUser: React.Dispatch<
    React.SetStateAction<UserType | undefined>
  >;
  handleUpdateUser: (
    adress: string,
    contactNumber: string,
    biography: string
  ) => void;
}

export const UserContext = createContext<UserContextType>({
  users: [],
  handleCreateUser: () => {},
  handleLogIn: () => {},
  currentLoggedInUser: undefined,
  handleChangePassword: (newPass: string, confirmPass: string) => {},
  handleLogOut: () => {},
  setCurrentLoggedInUser: () => {},
  handleUpdateUser: (
    adress: string,
    contactNumber: string,
    biography: string
  ) => {},
});

interface Props {
  children: React.ReactNode;
}

const LS_USERS = "users";
const LS_CURRENT_USER_LOGGED_IN = "currentUserLoggedIn";

const UserContextConstructor: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState<UserType>();

  useEffect(() => {
    if (localStorage.getItem(LS_USERS)) {
      const usersFromLS = JSON.parse(localStorage.getItem(LS_USERS)!);
      setUsers(usersFromLS);
    }

    fetch("http://localhost:5001/users")
      .then((res) => res.json())
      .then((data: UserType[]) => {
        setUsers(data);
        localStorage.setItem(LS_USERS, JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_USERS, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentLoggedInUser) {
      localStorage.setItem(
        LS_CURRENT_USER_LOGGED_IN,
        JSON.stringify(currentLoggedInUser)
      );
    } else {
      localStorage.removeItem(LS_CURRENT_USER_LOGGED_IN);
    }
  }, [currentLoggedInUser]);

  useEffect(() => {
    if (currentLoggedInUser) {
      localStorage.setItem(
        LS_CURRENT_USER_LOGGED_IN,
        JSON.stringify(currentLoggedInUser)
      );
    } else {
      localStorage.removeItem(LS_CURRENT_USER_LOGGED_IN);
    }
  }, [currentLoggedInUser]);

  const handleCreateUser = (
    name: string,
    lastname: string,
    email: string,
    password: string
  ) => {
    const newUser: UserType = {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      image: "",
      adress: "",
      contactNumber: "",
      biography: "",
    };

    setUsers([...users, newUser]);
  };

  const handleLogIn = (email: string) => {
    const currentUser = users.find((user) => {
      return email === user.email;
    });

    setCurrentLoggedInUser(currentUser);
  };

  const handleLogOut = () => {
    currentLoggedInUser && setCurrentLoggedInUser(undefined);
  };

  const handleChangePassword = (newPass: string, confirmPass: string) => {
    if (newPass.length === confirmPass.length) {
      if (currentLoggedInUser) {
        const updatedUser = { ...currentLoggedInUser, password: newPass };
        setCurrentLoggedInUser(updatedUser);
      }
    }
  };

  const handleUpdateUser = (
    adress: string,
    contactNumber: string,
    biography: string
  ) => {
    if (currentLoggedInUser) {
      const userIndex = users.findIndex(
        (user) => user.email === currentLoggedInUser.email
      );

      if (userIndex !== -1) {
        const updatedUser = {
          ...currentLoggedInUser,
          adress: adress,
          contactNumber: contactNumber,
          biography: biography,
        };

        const updatedUsers = [...users];
        updatedUsers[userIndex] = updatedUser;

        setUsers(updatedUsers);
        setCurrentLoggedInUser(updatedUser);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        handleCreateUser,
        handleLogIn,
        currentLoggedInUser,
        handleChangePassword,
        handleLogOut,
        setCurrentLoggedInUser,
        handleUpdateUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
