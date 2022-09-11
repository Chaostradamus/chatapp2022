import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jasmine</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
