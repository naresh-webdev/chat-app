import React from "react";

import Add from "../images/add.svg";
import More from "../images/more.svg";
import Camera from "../images/camera.svg";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <img src={Camera} alt="camera icon" />
          <img src={Add} alt="add friend icon" />
          <img src={More} alt="More options icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
