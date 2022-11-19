import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/10528612/pexels-photo-10528612.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="message img icon"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/10528612/pexels-photo-10528612.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="message img icon"
        />
      </div>
    </div>
  );
};

export default Message;
