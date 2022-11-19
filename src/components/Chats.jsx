import React from "react";
import Profile from "../images/profile.svg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Profile} alt="profile img" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>

      {/* testting upto last div */}
      <div className="userChat">
        <img src={Profile} alt="profile img" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Profile} alt="profile img" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Profile} alt="profile img" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
