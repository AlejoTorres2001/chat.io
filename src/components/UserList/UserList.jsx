import { useState, useEffect } from "react";
import getUsers from "../../functions/getUsers";
import UserItem from "../UserItem/UserItem";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden scrollbar-thumb-gray-scrollbar scrollbar-track-gray scrollbar-thin scroll-smooth">
      {users.map((user) => {
        return <UserItem key={user._id} user={user} />;
      })}
    </div>
  );
};

export default UserList;
