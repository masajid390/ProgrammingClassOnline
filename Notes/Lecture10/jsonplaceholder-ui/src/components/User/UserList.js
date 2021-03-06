import React from "react";
import { User } from "./User";

const style = {
  userList: {
    color: "white",
    padding: "16px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  user: {
    borderRadius: "8px",
    marginBottom: "8px",
    padding: "8px",
  },
};

const UserList = ({ userList = [], onUserClick }) => {
  return (
    <div style={style.userList}>
      {userList.map((user) => {
        return (
          <div
            style={style.user}
            key={user.id}
            onClick={(e) => onUserClick(user.id)}
          >
            <User user={user} />
          </div>
        );
      })}
    </div>
  );
};
export { UserList };
