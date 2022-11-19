import React from "react";

import Add from "../images/add.svg";
import More from "../images/more.svg";
import Camera from "../images/camera.svg";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Camera} alt="camera icon" />
          <img src={Add} alt="add friend icon" />
          <img src={More} alt="More options icon" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
