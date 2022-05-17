import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import sessionState from "../../atoms/sessionAtom";
import getUsers from "../../functions/getUsers";
import UserItem from "../UserItem/UserItem";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [session, setSession] = useRecoilState(sessionState);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users.filter((user) => user._id !== session.id));
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
